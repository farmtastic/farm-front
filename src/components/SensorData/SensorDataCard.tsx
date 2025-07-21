import PHIcon from '@/components/Icon/pH.svg?react';
import Sun from '@/components/Icon/sun.svg?react';
import WaterIcon from '@/components/Icon/water.svg?react';
import type { SensorDataType } from '@/types/type';
import DiffStatus from './DiffStatus';

const SensorDataCard = ({ type, data, history }: SensorDataType) => {
  return (
    <div className="flex items-center gap-2 justify-between w-full px-24">
      {type === 'water' ? (
        <WaterIcon className="w-28 h-28 mb-4" />
      ) : type === 'illuminance' ? (
        <Sun className="w-32 h-32" />
      ) : (
        <PHIcon className="w-32 h-32" />
      )}
      <DiffStatus type={type} data={data} history={history} />
    </div>
  );
};

export default SensorDataCard;
