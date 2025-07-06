import ArticleTitle from '../UI/ArticleTitle';
import Illuminance from './Illuminance';
import LatestDataUpdate from './LatestDataUpdate';
import PH from './PH';
import WaterLevel from './WaterLevel';

// import { useQuery } from '@tanstack/react-query';
// import { getLatestSensorData } from '@/apis/SensorAxios';

// 임시 데이터
const water = 5;
const sun = 580;
const pH = 4.9;

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
  return (
    <article className="mb-card py-contentsCard bg-ContentsColor rounded-contentsCard">
      <div className="flex justify-between items-center m-contentsCard">
        <ArticleTitle>센서 데이터</ArticleTitle>
        <LatestDataUpdate />
      </div>
      <div className="flex justify-between m-contentsCard">
        <WaterLevel data={water} />
        <Illuminance data={sun} />
        <PH data={pH} />
      </div>
    </article>
  );
};

export default SensorData;
