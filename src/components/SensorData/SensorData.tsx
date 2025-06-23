import ArticleTitle from '../UI/ArticleTitle';
import Card from '../UI/Card';

const SensorData = () => {
  return (
    <article className="h-sensor bg-blue-200">
      <ArticleTitle>센서 데이터</ArticleTitle>
      <div className="flex justify-between">
        <Card type="sensors">수위</Card>
        <Card type="sensors">조도</Card>
        <Card type="sensors">pH</Card>
      </div>
    </article>
  );
};

export default SensorData;
