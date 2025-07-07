import ArticleTitle from '../UI/ArticleTitle';
import ThresholdCard from '../UI/ThresholdCard';
import Card from '../UI/Card';

// import { useQuery } from '@tanstack/react-query';
// import { getLatestSensorData } from '@/apis/SensorAxios';

// 임시 데이터
const water = 5;
const sun = 580;
const pH = 4.9;
const waterHistory = 4.8;
const sunHistory = 590;
const pHHistory = 4.9;

const SensorData = () => {
  // 최신 상태 조회 쿼리
  // isLoading => 로딩 스피너, isFetching => 새로고침
  /* 
   const {
    data: sensorData,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ['latestSensorData'],
    queryFn: () => getLatestSensorData({ zoneId: 1 }),
    enabled: false,
  });
  */

  /*
  // 과거 이력 조회 쿼리
  const { data: HistoryData } = useQuery({
    queryKey: ['dataHistory'],
    queryFn: () => getDataHistory({ zoneId: 1 }),
  });
  */

  // 실시간 수치들을 넘겨주면서 과거 이력 조회api의 가장 최신 데이터도 같이 넘겨줌
  // 가장 최신 데이터를 이용해서 이전 수치에 비해 얼마나 증/감/유지 되었는지를 표시.

  return (
    <article className="mb-card py-contentsCard bg-ContentsColor rounded-contentsCard">
      <div className="flex justify-between items-center m-contentsCard">
        <ArticleTitle>센서 데이터</ArticleTitle>
        {/* <LatestDataUpdate /> */}
      </div>
      <div className="flex justify-between m-contentsCard">
        <Card type="sensors">
          <ThresholdCard type="water" data={water} history={waterHistory} />
        </Card>
        <Card type="sensors">
          <ThresholdCard type="illuminance" data={sun} history={sunHistory} />
        </Card>
        <Card type="sensors">
          <ThresholdCard type="PH" data={pH} history={pHHistory} />
        </Card>
      </div>
    </article>
  );
};

export default SensorData;
