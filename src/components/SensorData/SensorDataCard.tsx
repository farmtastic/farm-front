import PHIcon from '@/components/Icon/pH.svg?react';
import Sun from '@/components/Icon/sun.svg?react';
import WaterIcon from '@/components/Icon/water.svg?react';
import type { SensorDataType } from '@/types/type';
import DiffStatus from './DiffStatus';
import WaterLow from './WaterLow';

const SensorDataCard = ({
  type,
  data,
  history,
  isWaterLow = false,
  isWaterHigher = false,
}: SensorDataType) => {
  return (
    <div className="relative flex items-center gap-2 justify-between w-full px-24">
      {type === 'water' && (isWaterLow || isWaterHigher) && (
        <WaterLow isWaterHigher={isWaterHigher} isWaterLow={isWaterLow} />
      )}
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
