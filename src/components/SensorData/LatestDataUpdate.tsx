import LoadingSpinner from '../UI/LoadingSpinner';

import { useQuery } from '@tanstack/react-query';
import { getLatestSensorData } from '@/apis/SensorAxios';
import { formatTimestamp } from '@/utils/formatTimestamp';

// 최신 업데이트 시각을 보여주는 컴포넌트
const LatestDataUpdate = () => {
  const { data: sensorData, isLoading } = useQuery({
    queryKey: ['latestSensorData'],
    queryFn: () => getLatestSensorData({ zoneId: 1 }),
  });

  return (
    <div className="text-3xl flex items-center pt-latestT pl-latestL">
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <span>
          최신 업데이트:{' '}
          {formatTimestamp(sensorData.latestValues.LIGHT?.timestamp)}
        </span>
      )}
    </div>
  );
};

export default LatestDataUpdate;
