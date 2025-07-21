import ArticleTitle from '../UI/ArticleTitle';
import CustomGraph from './CustomGraph';
import { useQuery } from '@tanstack/react-query';
import { getDataHistory } from '@/apis/SensorAxios';
import LoadingSpinner from '../UI/LoadingSpinner';
import type { HistoryDataType } from '@/types/type';
import GraphInfoTooltip from './GraphInfoTooltip';

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
  const pHHistory = HistoryData.historyValues?.PH?.map(
    (d: HistoryDataType) => ({
      ...d,
      type: 'PH' as const,
      threshold: d.threshold === null ? 0 : d.threshold,
    })
  );

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
