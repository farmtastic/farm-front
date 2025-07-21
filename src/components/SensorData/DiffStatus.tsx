import { IoTriangle } from 'react-icons/io5';
import Rectangular from '../UI/Rectangular';
import type { SensorDataType } from '@/types/type';

const DiffStatus = ({ type, data, history }: SensorDataType) => {
  const diff = data - history;
  const diffFixed = diff.toFixed(2);

  // diff 값에 따라 클래스 결정
  const diffClass =
    diff > 0 ? 'text-[#16BD80]' : diff < 0 ? 'text-[#BF1423]' : 'text-gray-400';

  return (
    <>
      <div className="w-[6vw]">
        <span className="text-3xl">{data}</span>
        <span className="text-3xl inline-block">
          {type === 'water' ? 'm' : type === 'illuminance' ? 'lux' : ''}
        </span>
        <div className="text-xl">
          {type === 'water' ? '수위' : type === 'illuminance' ? '조도' : 'pH'}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-end w-full">
          <div className="flex items-center">
            <div>
              {history < data ? (
                <IoTriangle color="#16BD80" className="mr-2" />
              ) : history > data ? (
                <IoTriangle
                  size={20}
                  color="#BF1423"
                  className="transform -scale-y-100 mr-2"
                />
              ) : (
                <Rectangular />
              )}
            </div>
            <span className={`text-2xl font-medium px-1 ${diffClass}`}>
              {diffFixed}
            </span>
          </div>
          <div className="text-sm px-1">({history !== null ? history : 0})</div>
        </div>
      </div>
    </>
  );
};

export default DiffStatus;
