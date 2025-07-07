import ArticleTitle from '../UI/ArticleTitle';
import { LineChart, ResponsiveContainer } from 'recharts';

const Graph = () => {
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
