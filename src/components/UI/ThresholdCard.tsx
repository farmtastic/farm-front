import PHIcon from '@/components/Icon/pH.svg?react';
import Sun from '@/components/Icon/sun.svg?react';
import WaterIcon from '@/components/Icon/water.svg?react';
import type { ThresholdType } from '@/types/type';
import Threshold from './Threshold';

const ThresholdCard = ({ type, data, history }: ThresholdType) => {
  return (
    <div className="flex flex-col items-center gap-2">
      {type === 'water' ? (
        <WaterIcon className="w-24 h-24 mb-4" />
      ) : type === 'illuminance' ? (
        <Sun className="w-28 h-28" />
      ) : (
        <PHIcon className="w-28 h-28" />
      )}
      <Threshold type={type} data={data} history={history} />
    </div>
  );
};

export default ThresholdCard;
