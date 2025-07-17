import ArticleTitle from '../UI/ArticleTitle';
import ThresholdCard from '../UI/ThresholdCard';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';

import { useQuery } from '@tanstack/react-query';
import { getLatestSensorData, getDataHistory } from '@/apis/SensorAxios';

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

const SensorData = () => {
  // 최신 상태 조회 쿼리
  // isLoading => 로딩 스피너, isFetching => 새로고침

  // TODO
  // n분 주기로 latestSensorData를 새로 불러오는 코드 작성해야함(이력조회도 일단 동일한 방식으로 코드 작성)
  // 그래프 단위 표시 z-index 수정
  // 그래프 그릴때 n개까지만 그려지도록 자르기. (이력 조회는 그냥 전부)

  const {
    data: sensorData,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ['latestSensorData'],
    queryFn: () => getLatestSensorData({ zoneId: 1 }),
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
            <ThresholdCard
              type="water"
              data={sensorData.latestValues.WATER_LEVEL.value}
              history={waterHistory}
            />
          )}
        </Card>
        <Card type="sensors">
          {(isLoading || isFetching) && <LoadingSpinner />}
          {(!isLoading || !isFetching) && (
            <ThresholdCard
              type="illuminance"
              data={sensorData.latestValues.LIGHT.value}
              history={sunHistory}
            />
          )}
        </Card>
        <Card type="sensors">
          {(isLoading || isFetching) && <LoadingSpinner />}
          {(!isLoading || !isFetching) && (
            <ThresholdCard
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
