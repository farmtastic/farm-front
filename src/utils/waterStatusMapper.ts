type SensorData = {
  threshold: undefined;
  timestamp: string;
  value: number;
};

type MergedState = {
  timestamp: string;
  status: number; // 0: 물 부족함, 1: 물 적당함, 2: 물 가득참
};

export const waterStatusMapper = (
  topArr: SensorData[] = [],
  bottomArr: SensorData[] = []
): MergedState[] => {
  if (topArr.length === 0 || bottomArr.length === 0) {
    return [];
  }
  const topSorted = [...topArr].sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );
  const bottomSorted = [...bottomArr]?.sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );
  const merged: MergedState[] = [];
  const len = Math.min(topSorted.length, bottomSorted.length);
  for (let i = 0; i < len; i++) {
    const top = topSorted[i];
    const bottom = bottomSorted[i];
    let status = 1;
    if (top.value === 1) status = 2;
    else if (bottom.value === 1) status = 0;
    merged.push({ timestamp: top.timestamp, status });
  }
  return merged;
};
