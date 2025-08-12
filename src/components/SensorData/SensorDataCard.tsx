import PHIcon from '@/components/Icon/pH.svg?react';
import Sun from '@/components/Icon/sun.svg?react';
import WaterIcon from '@/components/Icon/water.svg?react';
import type { SensorDataType } from '@/types/type';
import DiffStatus from './DiffStatus';

const SensorDataCard = ({
  type,
  data,
  history,
  isWaterLow,
  isWaterHigher,
}: SensorDataType) => {
  return (
    <div className={`flex items-center gap-2 justify-between w-full px-24`}>
      {type === 'water' ? (
        <WaterIcon className="flex-none w-24 h-24 mb-4" />
      ) : type === 'illuminance' ? (
        <Sun className="w-28 h-28" />
      ) : (
        <PHIcon className="w-28 h-28" />
      )}
      <DiffStatus
        type={type}
        data={data}
        history={history}
        isWaterLow={isWaterLow}
        isWaterHigher={isWaterHigher}
      />
    </div>
  );
};

export default SensorDataCard;
