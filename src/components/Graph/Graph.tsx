import ArticleTitle from '../UI/ArticleTitle';
import CustomGraph from './CustomGraph';
import { useQuery } from '@tanstack/react-query';
import { getDataHistory } from '@/apis/SensorAxios';
import LoadingSpinner from '../UI/LoadingSpinner';
import type { HistoryDataType } from '@/types/type';
import GraphInfoTooltip from './GraphInfoTooltip';

const DummyData = {
  historyValues: {
    ILLUMINANCE: [
      { timestamp: '2025-06-26T12:55:36.071133', value: 11000 },
      { timestamp: '2025-06-26T13:00:36.071133', value: 12000 },
      { timestamp: '2025-06-26T13:05:36.071133', value: 12000 },
    ],
    PH: [
      { timestamp: '2025-06-26T12:55:36.057906', value: 6.7 },
      { timestamp: '2025-06-26T13:03:36.057906', value: 6.7 },
      { timestamp: '2025-06-26T13:05:36.057906', value: 6.5 },
    ],
    WATER_LEVEL: [
      { timestamp: '2025-06-26T12:55:36.064386', value: 90 },
      { timestamp: '2025-06-26T13:00:36.064386', value: 87.5 },
      { timestamp: '2025-06-26T13:05:36.064386', value: 85.2 },
    ],
  },
  latestValues: null,
  zoneId: 1,
  zoneName: '스마트팜 A-1',
};

const Graph = () => {
  // 과거 이력 조회 쿼리
  const { data: HistoryData, isLoading } = useQuery({
    queryKey: ['dataHistory'],
    queryFn: () => getDataHistory({ zoneId: 1 }),
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const waterHistory = HistoryData.historyValues.WATER_LEVEL.map(
    (d: HistoryDataType) => ({
      ...d,
      type: 'WATER_LEVEL' as const,
      threshold: d.threshold === null ? 0 : d.threshold,
    })
  );
  const illuminanceHistory = HistoryData.historyValues.LIGHT.map(
    (d: HistoryDataType) => ({
      ...d,
      type: 'ILLUMINANCE' as const,
      threshold: d.threshold === null ? 0 : d.threshold,
    })
  );
  const pHHistory = DummyData.historyValues.PH.map((d) => ({
    ...d,
    type: 'PH' as const,
    threshold: 5.5,
  }));

  return (
    <article className="p-45px rounded-contentsCard bg-ContentsColor">
      <div className="flex items-center gap-3">
        <ArticleTitle>수치 그래프</ArticleTitle>
        <GraphInfoTooltip text="최근 n시간의 데이터만 그래프로 표기됩니다." />
      </div>
      <CustomGraph
        type="WATER_LEVEL"
        data={waterHistory.slice(0, 5)} // 5개까지만 그래프에 보여주도록 임시 설정
        historyData={waterHistory}
      />
      <CustomGraph
        type="ILLUMINANCE"
        data={illuminanceHistory}
        historyData={illuminanceHistory}
      />
      <CustomGraph type="PH" data={pHHistory} historyData={pHHistory} />
    </article>
  );
};

export default Graph;
