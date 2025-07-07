import SensorData from '../SensorData/SensorData';
import Controls from '../Controls/Controls';
import Graph from '../Graph/Graph';

const Main = () => {
  return (
    <main className="flex pb-14 text-white">
      <section className="mx-14 flex-1 min-w-0 min-h-article">
        <SensorData />
        <Controls />
      </section>
      <section className="mr-14 flex-1 min-w-0 min-h-article">
        <Graph />
      </section>
    </main>
  );
};

export default Main;
