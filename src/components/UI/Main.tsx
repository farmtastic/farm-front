import SensorData from '../SensorData/SensorData';
import Controls from '../Controls/Controls';
import ArticleTitle from './ArticleTitle';
import Divider from './Divider';

const Main = () => {
  return (
    <main className="flex-1 bg-green-50 flex">
      <section className="w-leftSection bg-red-100 ml-14">
        <SensorData />
        <Controls />
      </section>
      <Divider />
      <section className="w-rightSection bg-yellow-100 mr-14">
        <article>
          <ArticleTitle>수치 그래프</ArticleTitle>
        </article>
      </section>
    </main>
  );
};

export default Main;
