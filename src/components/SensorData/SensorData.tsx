import ArticleTitle from '../UI/ArticleTitle';
import SensorDataCard from './SensorDataCard';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';

import { useQuery } from '@tanstack/react-query';
import { getLatestSensorData, getDataHistory } from '@/apis/SensorAxios';

const SensorData = () => {
  // 최신 상태 조회 쿼리
  // isLoading => 로딩 스피너, isFetching => 새로고침

  // 센서 데이터 업데이트 주기 10초
  // 그래프에 쓰이는 데이터는 3시간마다 줌.

  const {
    data: sensorData,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ['latestSensorData'],
    queryFn: () => getLatestSensorData({ zoneId: 1 }),
    refetchInterval: 5 * 60 * 1000, // 5분 주기 (ms)
  });

  // 과거 이력 조회 쿼리
  const { data: HistoryData } = useQuery({
    queryKey: ['dataHistory'],
    queryFn: () => getDataHistory({ zoneId: 1 }),
  });

  if (isLoading || !HistoryData || !HistoryData.historyValues) {
    return <LoadingSpinner />;
  }

  // 가장 최근의 history 데이터가 배열 맨뒤에 추가된다고 가정함
  const waterArr = HistoryData?.historyValues?.WATER_LEVEL ?? [];
  const sunArr = HistoryData?.historyValues?.LIGHT ?? [];
  const phArr = HistoryData?.historyValues?.PH ?? [];

  const waterHistory = waterArr[waterArr.length - 1]?.value ?? null;
  const sunHistory = sunArr[0]?.value ?? null; // 테스트를 위힌 임의 값 지정
  const pHHistory = phArr[0]?.value ?? null; // 테스트를 위힌 임의 값 지정

  return (
    <article className="mb-card py-contentsCard bg-ContentsColor rounded-contentsCard">
      <div className="flex justify-between items-center m-contentsCard">
        <ArticleTitle>센서 데이터</ArticleTitle>
      </div>
      <div className="flex justify-between m-contentsCard">
        <Card type="sensors">
          {(isLoading || isFetching) && <LoadingSpinner />}
          {(!isLoading || !isFetching) && (
            <SensorDataCard
              type="water"
              data={sensorData.latestValues.WATER_LEVEL.value}
              history={waterHistory}
            />
          )}
        </Card>
        <Card type="sensors">
          {(isLoading || isFetching) && <LoadingSpinner />}
          {(!isLoading || !isFetching) && (
            <SensorDataCard
              type="illuminance"
              data={sensorData.latestValues.LIGHT.value}
              history={sunHistory}
            />
          )}
        </Card>
        <Card type="sensors">
          {(isLoading || isFetching) && <LoadingSpinner />}
          {(!isLoading || !isFetching) && (
            <SensorDataCard
              type="PH"
              data={sensorData.latestValues.PH.value}
              history={pHHistory}
            />
          )}
        </Card>
      </div>
    </article>
  );
};

export default SensorData;
