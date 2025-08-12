import Warning from '@/components/Icon/warning_red.svg?react';
import Warning_Green from '@/components/Icon/warning_green.svg?react';
import Warning_Orange from '@/components/Icon/warning_orange.svg?react';

const WaterLow = ({
  isWaterLow,
  isWaterHigher,
}: {
  isWaterLow: boolean;
  isWaterHigher: boolean;
}) => {
  return (
    <div className={`flex flex-col items-center justify-center gap-2`}>
      {isWaterHigher && <Warning_Orange />}
      {!isWaterHigher && !isWaterLow && <Warning_Green />}
      {isWaterLow && <Warning />}
      {isWaterHigher && (
        <div className="text-[#CD982F] w-28 text-base text-center">
          <span>물이 꽉 찼습니다.</span>
        </div>
      )}
      {(isWaterHigher || isWaterLow) && (
        <div className="text-red-500 w-28 text-base text-center">
          {!isWaterHigher && <span>물이 비었습니다.</span>}
        </div>
      )}
      {!isWaterHigher && !isWaterLow && (
        <div className="w-28 text-base text-green-500 text-center">
          현재 수위를 유지해주세요
        </div>
      )}
    </div>
  );
};

export default WaterLow;
