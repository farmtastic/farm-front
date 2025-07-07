import type { SensorDataProps } from '@/types/type';
import Card from '../UI/Card';
import PHIcon from '@/components/Icon/pH.svg?react';
import { IoTriangle } from 'react-icons/io5';
import Rectangular from '../UI/Rectangular';

const PH = ({ data, history }: SensorDataProps) => {
  return (
    <Card type="sensors">
      <div className="flex flex-col items-center gap-2">
        <PHIcon className="w-28 h-28" />
        <div className="text-2xl">pH</div>
        <div className="text-3xl">{data}</div>
        <div className="flex gap-4 items-center justify-center">
          {history < data ? (
            <IoTriangle color="#16BD80" />
          ) : history > data ? (
            <IoTriangle
              size={20}
              color="#BF1423"
              className="transform -scale-y-100"
            />
          ) : (
            <Rectangular />
          )}
          <div className="text-2xl">{data - history}</div>
          <div className="text-sm">({history})</div>
        </div>
      </div>
    </Card>
  );
};

export default PH;
