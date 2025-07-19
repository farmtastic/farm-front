import PHIcon from '@/components/Icon/pH.svg?react';
import Sun from '@/components/Icon/sun.svg?react';
import WaterIcon from '@/components/Icon/water.svg?react';
import type { SensorDataType } from '@/types/type';
import DiffStatus from './DiffStatus';

const SensorDataCard = ({ type, data, history }: SensorDataType) => {
  return (
    <div className="flex flex-col items-center gap-2">
      {type === 'water' ? (
        <WaterIcon className="w-24 h-24 mb-4" />
      ) : type === 'illuminance' ? (
        <Sun className="w-28 h-28" />
      ) : (
        <PHIcon className="w-28 h-28" />
      )}
      <DiffStatus type={type} data={data} history={history} />
    </div>
  );
};

export default SensorDataCard;
