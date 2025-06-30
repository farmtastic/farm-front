import Card from '../UI/Card';
import Sun from '@/components/Icon/sun.svg?react';

const Illuminance = () => {
  return (
    <Card type="sensors">
      <div className="flex flex-col items-center gap-2">
        <Sun className="w-28 h-28" />
        <div className="text-2xl">조도</div>
        <div className="text-3xl">580lux</div>
      </div>
    </Card>
  );
};

export default Illuminance;
