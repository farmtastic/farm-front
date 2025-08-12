export type SensorData = {
  timestamp: string;
  value: number;
};

export type MergedState = {
  timestamp: string;
  status: number; // 0: 물 없음, 1: 물 있음, 2: 물 가득참
};

/**
 * topArray, bottomArray sensor 값을 기반으로 수위 상태를 병합합니다.
 * 매핑 기준:
 * top=0 & bottom=1 → status=2 (물 가득참)
 * top=1 & bottom=1 → status=1 (물 있음)
 * top=1 & bottom=0 → status=0 (물 없음)
 * 기타 조합 → status=1 (물 있음)
 */
export const waterStatusMapper = (
  topArray: SensorData[] = [],
  bottomArray: SensorData[] = []
): MergedState[] => {
  if (topArray.length === 0 || bottomArray.length === 0) {
    return [];
  }

  const topSorted = [...topArray].sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );
  const bottomSorted = [...bottomArray].sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );

  const merged: MergedState[] = [];
  const len = Math.min(topSorted.length, bottomSorted.length);

  for (let i = 0; i < len; i++) {
    const top = topSorted[i];
    const bottom = bottomSorted[i];

    let status: number;
    if (top.value === 0 && bottom.value === 1) {
      status = 2; // 물 가득참
    } else if (top.value === 1 && bottom.value === 1) {
      status = 1; // 물 적당함
    } else if (top.value === 1 && bottom.value === 0) {
      status = 0; // 물 없음
    } else if (top.value === 0 && bottom.value === 0) {
      status = 1; // 물 적당함 (both off)
    } else {
      status = 1; // fallback to 적당함
    }

    merged.push({ timestamp: top.timestamp, status });
  }

  return merged;
};
