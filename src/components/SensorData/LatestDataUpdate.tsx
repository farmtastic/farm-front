import UpdateIcon from '@/components/Icon/update.svg?react';
import LoadingSpinner from '../UI/LoadingSpinner';

import { useQuery } from '@tanstack/react-query';
import { getLatestSensorData } from '@/apis/SensorAxios';
import { formatTimestamp } from '@/utils/formatTimestamp';

const LatestDataUpdate = () => {
  const {
    data: sensorData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['latestSensorData'],
    queryFn: () => getLatestSensorData({ zoneId: 1 }),
  });

  return (
    <div className="text-3xl flex items-center">
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <span>
          최신 업데이트:{' '}
          {formatTimestamp(sensorData.latestValues.WATER_LEVEL.timestamp)}
        </span>
      )}
      <button className="w-5 bg-transparent mx-2">
        <UpdateIcon
          onClick={() => refetch()}
          className="w-8 h-8 hover:animate-spin-once"
        />
      </button>
    </div>
  );
};

export default LatestDataUpdate;
