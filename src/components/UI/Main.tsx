import SensorData from '../SensorData/SensorData';
import Controls from '../Controls/Controls';
import ArticleTitle from './ArticleTitle';
import ContentsBox from './ContentsBox';

const Main = () => {
  return (
    <main className="flex-1 bg-green-50 flex">
      <section className="w-leftSection bg-red-100 m-14">
        <ContentsBox>
          <SensorData />
        </ContentsBox>
        <ContentsBox>
          <Controls />
        </ContentsBox>
      </section>
      {/* <Divider /> */}
      <section className="w-rightSection bg-yellow-100 mr-14">
        <article>
          <ContentsBox>
            <ArticleTitle>수치 그래프</ArticleTitle>
          </ContentsBox>
        </article>
      </section>
    </main>
  );
};

export default Main;
