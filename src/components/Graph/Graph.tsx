import ArticleTitle from '../UI/ArticleTitle';
import { LineChart } from 'recharts';

const Graph = () => {
  return (
    <article className="p-45px rounded-contentsCard bg-ContentsColor">
      <ArticleTitle>수치 그래프</ArticleTitle>
      <div className="text-3xl mb-graphB mt-graphT">수위</div>
      <LineChart
        width={650}
        height={350}
        className="bg-BackgroundColor rounded-card outline-none"
      ></LineChart>
      <div className="text-3xl mb-graphB mt-graphT">조도</div>
      <LineChart
        width={650}
        height={350}
        className="bg-BackgroundColor rounded-card outline-none"
      ></LineChart>
      <div className="text-3xl mb-graphB mt-graphT">pH</div>
      <LineChart
        width={650}
        height={350}
        className="bg-BackgroundColor rounded-card outline-none"
      ></LineChart>
    </article>
  );
};

export default Graph;
