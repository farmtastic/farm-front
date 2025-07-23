type SensorData = {
  timestamp: string;
  value: number;
};

type MergedState = {
  timestamp: string;
  status: number; // 0: 부족, 1: 적당, 2: 가득참
};

export const mergeWaterLevelStatus = (
  topArray: SensorData[],
  bottomArray: SensorData[]
): MergedState[] => {
  // 시간순 정렬
  const topSorted = [...topArray].sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );
  const bottomSorted = [...bottomArray].sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );

  const result: MergedState[] = [];

  for (let i = 0; i < Math.min(topSorted.length, bottomSorted.length); i++) {
    const top = topSorted[i];
    const bottom = bottomSorted[i];

    let status = 1; // 기본은 '적당'
    if (top.value === 1) status = 2;
    else if (bottom.value === 1) status = 0;

    result.push({
      timestamp: top.timestamp, // 둘 중 아무거나 써도 됨
      status,
    });
  }

  return result;
};
