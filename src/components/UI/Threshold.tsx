import { IoTriangle } from 'react-icons/io5';
import Rectangular from '../UI/Rectangular';
import type { ThresholdType } from '@/types/type';

const Threshold = ({ type, data, history }: ThresholdType) => {
  const diff = data - history;
  const diffFixed = diff.toFixed(2);

  // diff 값에 따라 클래스 결정
  const diffClass =
    diff > 0 ? 'text-[#16BD80]' : diff < 0 ? 'text-[#BF1423]' : 'text-gray-400';

  return (
    <>
      <div className="text-2xl">
        {type === 'water' ? '수위' : type === 'illuminance' ? '조도' : 'pH'}
      </div>
      <div>
        <span className="text-3xl">{data}</span>
        <span className="text-3xl">
          {type === 'water' ? 'm' : type === 'illuminance' ? 'lux' : ''}
        </span>
      </div>
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
        <span className={`text-2xl font-medium px-1 ${diffClass}`}>
          {diffFixed}
        </span>
        <div className="text-sm">({history})</div>
      </div>
    </>
  );
};

export default Threshold;
