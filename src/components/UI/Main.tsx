import Divider from './Divider';

const Main = () => {
  return (
    <main className="flex-1 bg-green-50 flex">
      <section className="w-leftSection bg-red-100 ml-14">
        <article className="h-sensor bg-blue-200">센서 데이터</article>
        <article>제어</article>
      </section>
      <Divider />
      <section className="w-rightSection bg-yellow-100 mr-14">
        <article>수치 그래프</article>
      </section>
    </main>
  );
};

export default Main;
