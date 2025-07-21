import Warning from '@/components/Icon/warning_red.svg?react';

const WaterLow = ({
  isWaterLow,
  isWaterHigher,
}: {
  isWaterLow: boolean;
  isWaterHigher: boolean;
}) => {
  console.log(isWaterHigher, isWaterLow);
  return (
    <div className="absolute -top-5 left-6 flex items-center gap-2">
      <Warning />
      <div className="bg-red-500 p-2 rounded-xl opacity-90">
        {isWaterLow && (
          <span>적정 수위보다 수위가 낮습니다. 물을 추가해주세요.</span>
        )}
        {isWaterHigher && (
          <span>적정 수위보다 수위가 높습니다. 물을 빼주세요.</span>
        )}
      </div>
    </div>
  );
};

export default WaterLow;
