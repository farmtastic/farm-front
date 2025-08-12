import { useEffect, useRef } from 'react';

// 이전 알림 데이터를 저장하는 훅
export const usePrevious = <T>(value: T): T | undefined => {
  const ref = useRef<T | undefined>(undefined);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};
