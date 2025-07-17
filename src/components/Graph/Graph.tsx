import ArticleTitle from '../UI/ArticleTitle';
import CustomGraph from './CustomGraph';
import { useQuery } from '@tanstack/react-query';
import { getDataHistory } from '@/apis/SensorAxios';

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
  const { data: HistoryData } = useQuery({
    queryKey: ['dataHistory'],
    queryFn: () => getDataHistory({ zoneId: 1 }),
  });

  console.log(HistoryData);

  // threshold와 type 속성 필요. type은 프론트에서 직접 추가하면 될 것 같고 threshold을 같이 보내줄 수 있냐고 여쭤봐야됨.
  const waterHistory = DummyData.historyValues.WATER_LEVEL.map((d) => ({
    ...d,
    type: 'WATER_LEVEL' as const,
    threshold: 7,
  }));
  const illuminanceHistory = DummyData.historyValues.ILLUMINANCE.map((d) => ({
    ...d,
    type: 'ILLUMINANCE' as const,
    threshold: 7000,
  }));
  const pHHistory = DummyData.historyValues.PH.map((d) => ({
    ...d,
    type: 'PH' as const,
    threshold: 5.5,
  }));

  return (
    <article className="p-45px rounded-contentsCard bg-ContentsColor">
      <ArticleTitle>수치 그래프</ArticleTitle>
      <CustomGraph type="WATER_LEVEL" data={waterHistory} />
      <CustomGraph type="ILLUMINANCE" data={illuminanceHistory} />
      <CustomGraph type="PH" data={pHHistory} />
    </article>
  );
};

export default Graph;
