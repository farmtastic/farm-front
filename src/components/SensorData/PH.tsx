import Card from '../UI/Card';
import PHIcon from '@/components/Icon/pH.svg?react';

const PH = () => {
  return (
    <Card type="sensors">
      <div className="flex flex-col items-center gap-2">
        <PHIcon className="w-28 h-28" />
        <div className="text-2xl">pH</div>
        <div className="text-3xl">5.7</div>
      </div>
    </Card>
  );
};

export default PH;
