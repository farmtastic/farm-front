import WaterIcon from '@/components/Icon/water.svg?react';
import Card from '../UI/Card';

const WaterLevel = () => {
  return (
    <Card type="sensors">
      <div className="flex flex-col items-center gap-2">
        <WaterIcon className="w-24 h-24" />
        <div className="text-2xl">수위</div>
        <div className="text-3xl">1m</div>
      </div>
    </Card>
  );
};

export default WaterLevel;
