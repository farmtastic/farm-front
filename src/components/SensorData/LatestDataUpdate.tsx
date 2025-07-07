import UpdateIcon from '@/components/Icon/update.svg?react';

const LatestDataUpdate = () => {
  const time = '2025/07/03 20:38';
  return (
    <div className="text-3xl flex items-center">
      <span>최신 업데이트: {time}</span>
      <button className="w-5 bg-transparent mx-2">
        <UpdateIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default LatestDataUpdate;
