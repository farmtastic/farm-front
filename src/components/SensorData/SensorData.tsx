import ArticleTitle from '../UI/ArticleTitle';
import SensorDataCard from './SensorDataCard';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';

import { useQuery } from '@tanstack/react-query';
import { getLatestSensorData, getDataHistory } from '@/apis/SensorAxios';
import { getNotifications } from '@/apis/HistoryAxios';

const SensorData = () => {
  // 최신 상태 조회 쿼리
  // isLoading => 로딩 스피너, isFetching => 새로고침

  // 센서 데이터 업데이트 주기 10초
  // 그래프에 쓰이는 데이터는 3시간마다 줌. (초기 데이터 부족 시 3시간이 되지 않으면 현재 센서 데이터 값만 보내짐)

  const {
    data: sensorData,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ['latestSensorData'],
    queryFn: () => getLatestSensorData({ zoneId: 1 }),
    refetchInterval: 10 * 1000, // 10초 주기 (ms)
  });

  // 과거 이력 조회 쿼리
  const { data: historyData } = useQuery({
    queryKey: ['dataHistory'],
    queryFn: () => getDataHistory({ zoneId: 1 }),
    refetchInterval: 10 * 1000, // 10초 주기 (ms)
  });

  // 알림 목록 조회 쿼리
  const { data: notiData, isLoading: notiIsLoading } = useQuery({
    queryKey: ['notification'],
    queryFn: () => getNotifications(),
    refetchInterval: 10 * 1000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const isWaterLow = notiData?.some(
    (item: { message: string }) =>
      item.message.includes('수위') && item.message.includes('정상')
  )
    ? false
    : notiData?.some(
        (item: { message: string }) =>
          item.message.includes('수위') && item.message.includes('낮습니다')
      );

  // const isWaterHigher = notiData?.some(
  //   (item: { message: string }) =>
  //     item.message.includes('수위') && item.message.includes('정상')
  // )
  //   ? false
  //   : notiData?.some(
  //       (item: { message: string }) =>
  //         item.message.includes('수위') && item.message.includes('높습니다')
  //     );

  const isWaterHigher = true;

  if (
    isLoading ||
    !historyData ||
    !historyData.historyValues ||
    notiIsLoading
  ) {
    return (
      <Card type="sensors">
        <LoadingSpinner />
      </Card>
    );
  }

  // 가장 최근의 history 데이터가 배열 맨뒤에 추가된다고 가정함
  const waterArr = historyData?.historyValues?.WATER_LEVEL ?? [];
  const sunArr = historyData?.historyValues?.LIGHT ?? [];
  const phArr = historyData?.historyValues?.PH ?? [];

  const waterHistory = waterArr[waterArr.length - 1]?.value ?? null;
  const sunHistory = sunArr[sunArr.length - 1]?.value ?? null; // 테스트를 위힌 임의 값 지정
  const pHHistory = phArr[phArr.length - 1]?.value ?? null; // 테스트를 위힌 임의 값 지정

  return (
    <article className="mb-card py-contentsCard bg-ContentsColor rounded-contentsCard">
      <div className="flex justify-between items-center m-contentsCard">
        <ArticleTitle>센서 데이터</ArticleTitle>
      </div>
      <div className="flex flex-col justify-between m-contentsCard gap-9">
        <Card type="sensors">
          {(isLoading || isFetching) && <LoadingSpinner />}
          {(!isLoading || !isFetching) && (
            <SensorDataCard
              type="water"
              isWaterLow={isWaterLow}
              isWaterHigher={isWaterHigher}
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
