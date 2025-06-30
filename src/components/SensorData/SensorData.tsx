import ArticleTitle from '../UI/ArticleTitle';
import Illuminance from './Illuminance';
import LatestDataUpdate from './LatestDataUpdate';
import PH from './pH';
import WaterLevel from './WaterLevel';

const SensorData = () => {
  return (
    <article className="bg-blue-200 mb-card">
      <div className="flex justify-between items-center">
        <ArticleTitle>센서 데이터</ArticleTitle>
        <LatestDataUpdate />
      </div>
      <div className="flex justify-between">
        <WaterLevel />
        <Illuminance />
        <PH />
      </div>
    </article>
  );
};

export default SensorData;
