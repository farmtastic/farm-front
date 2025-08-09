import { useEffect, useRef } from 'react';

// 이전 알림 데이터를 저장하는 훅 (이전 알림과 비교했을때 새로운 알림이 오면 UI를 표시하기 위함)
export const usePrevious = <T>(value: T): T | undefined => {
  const ref = useRef<T | undefined>(undefined);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};
