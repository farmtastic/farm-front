import { useLayoutEffect } from 'react';
import type { RefObject } from 'react'; // ← 이렇게

// 왼쪽과 오른쪽 아티클의 높이를 맞추기 위한 동적 마진 계산 hook
// 오른쪽 아티클의 높이에 맞춰서 SensorData 컴포넌트의 margin-bottom이 동적으로 계산됨
export function useDynamicMargin(
  sensorRef: RefObject<HTMLElement | null>,
  controlsRef: RefObject<HTMLElement | null>,
  rightRef: RefObject<HTMLElement | null>
) {
  useLayoutEffect(() => {
    if (!sensorRef.current || !controlsRef.current || !rightRef.current) return;

    const updateMargin = () => {
      const totalRightH = rightRef.current!.offsetHeight;
      const sensorH = sensorRef.current!.offsetHeight;
      const controlsH = controlsRef.current!.offsetHeight;

      const needed = totalRightH - (sensorH + controlsH);
      sensorRef.current!.style.marginBottom = `${Math.max(needed, 0)}px`;
    };

    // 1) 최초 계산
    updateMargin();

    // 2) ResizeObserver 로 세 요소를 모두 감시
    const ro = new ResizeObserver(updateMargin);
    ro.observe(rightRef.current);
    ro.observe(sensorRef.current);
    ro.observe(controlsRef.current);

    // 3) 윈도우 리사이즈도 같이
    window.addEventListener('resize', updateMargin);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateMargin);
    };
  }, [sensorRef, controlsRef, rightRef]);
}
