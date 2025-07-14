import UpdateIcon from '@/components/Icon/update.svg?react';
import LoadingSpinner from '../UI/LoadingSpinner';

import { useQuery } from '@tanstack/react-query';
import { getLatestSensorData } from '@/apis/SensorAxios';
import { formatTimestamp } from '@/utils/formatTimestamp';

// const DummyData = {
//   historyValues: null,
//   latestValues: {
//     ILLUMINANCE: {
//       timestamp: '2025-06-26T12:55:36.071133',
//       value: 12000,
//     },
//     PH: {
//       timestamp: '2025-06-26T12:55:36.057906',
//       value: 6.5,
//     },
//     WATER_LEVEL: {
//       timestamp: '2025-06-26T12:55:36.064386',
//       value: 85.2,
//     },
//   },
//   zoneId: 1,
//   zoneName: '스마트팜 A-1',
// };

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
          {formatTimestamp(sensorData.latestValues.WATER_LEVEL?.timestamp)}
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
