import SensorData from '../SensorData/SensorData';
import Controls from '../Controls/Controls';
import Graph from '../Graph/Graph';

const Main = () => {
  return (
    <main className="flex-1 flex pb-14 text-white">
      <section className="w-leftSection mx-14">
        <SensorData />
        <Controls />
      </section>
      <section className="w-rightSection mr-14">
        <Graph />
      </section>
    </main>
  );
};

export default Main;
