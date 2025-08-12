import SensorData from '../SensorData/SensorData';
import Controls from '../Controls/Controls';
import Graph from '../Graph/Graph';

import { useRef } from 'react';
import { useDynamicMargin } from '@/hooks/useDynamicMargin';

const Main = () => {
  const sensorRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useDynamicMargin(sensorRef, controlsRef, rightRef);

  return (
    <main className="box-border grid items-stretch grid-cols-2 gap-x-8 px-14 pb-14 text-white">
      <section className="box-border flex flex-col min-h-full">
        <div ref={sensorRef}>
          <SensorData />
        </div>
        <div ref={controlsRef}>
          <Controls />
        </div>
      </section>
      <section className="box-border min-h-full space-y-6">
        <div ref={rightRef}>
          <Graph />
        </div>
      </section>
    </main>
  );
};

export default Main;
