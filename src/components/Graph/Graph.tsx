import ArticleTitle from '../UI/ArticleTitle';
import { LineChart, ResponsiveContainer } from 'recharts';
// import { useQuery } from '@tanstack/react-query';
// import { getDataHistory } from '@/apis/SensorAxios';

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
  // const { data: HistoryData } = useQuery({
  //   queryKey: ['dataHistory'],
  //   queryFn: () => getDataHistory({ zoneId: 1 }),
  // });

  // console.log(HistoryData);

  return (
    <article className="p-45px rounded-contentsCard bg-ContentsColor">
      <ArticleTitle>수치 그래프</ArticleTitle>
      <div className="text-3xl mb-graphB mt-graphT">수위</div>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart className="bg-BackgroundColor rounded-card outline-none"></LineChart>
      </ResponsiveContainer>
      <div className="text-3xl mb-graphB mt-graphT">조도</div>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart className="bg-BackgroundColor rounded-card outline-none"></LineChart>
      </ResponsiveContainer>
      <div className="text-3xl mb-graphB mt-graphT">pH</div>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart className="bg-BackgroundColor rounded-card outline-none"></LineChart>
      </ResponsiveContainer>
    </article>
  );
};

export default Graph;
