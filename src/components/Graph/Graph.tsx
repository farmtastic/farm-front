import ArticleTitle from '../UI/ArticleTitle';
import CustomGraph from './CustomGraph';
import { useQuery } from '@tanstack/react-query';
import { getDataHistory } from '@/apis/SensorAxios';
import LoadingSpinner from '../UI/LoadingSpinner';
import type { HistoryDataType } from '@/types/type';
import GraphInfoTooltip from './GraphInfoTooltip';
import Card from '../UI/Card';
import CustomWaterGraph from './CustomWaterGraph';

const Graph = () => {
  const FIFTEEN_MINUTES = 16 * 60 * 1000;
  // 기준 시각: 지금으로부터 16분 전 (그래프는 15분까지의 데이터만 그려짐)
  const cutoff = Date.now() - FIFTEEN_MINUTES;

  // 과거 이력 조회 쿼리
  const { data: HistoryData, isLoading } = useQuery({
    queryKey: ['dataHistory'],
    queryFn: () => getDataHistory({ zoneId: 1 }),
  });

  if (isLoading) {
    return (
      <Card type="graphs">
        <LoadingSpinner />
      </Card>
    );
  }

  const illuminanceHistory = HistoryData.historyValues?.LIGHT?.map(
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
        <GraphInfoTooltip text="최근 15분의 데이터만 그래프로 표기됩니다." />
      </div>
      <CustomWaterGraph
        topData={
          HistoryData.historyValues.WATER_LEVEL_TOP?.filter(
            (item: HistoryDataType) =>
              new Date(item.timestamp).getTime() >= cutoff
          ) ?? []
        }
        bottomData={
          HistoryData.historyValues.WATER_LEVEL_BOTTOM?.filter(
            (item: HistoryDataType) =>
              new Date(item.timestamp).getTime() >= cutoff
          ) ?? []
        }
      />
      <CustomGraph
        type="ILLUMINANCE"
        data={illuminanceHistory?.filter(
          (item: HistoryDataType) =>
            new Date(item.timestamp).getTime() >= cutoff
        )}
        historyData={illuminanceHistory}
      />
      <CustomGraph
        type="PH"
        data={pHHistory?.filter(
          (item: HistoryDataType) =>
            new Date(item.timestamp).getTime() >= cutoff
        )}
        historyData={pHHistory}
      />
    </article>
  );
};

export default Graph;
