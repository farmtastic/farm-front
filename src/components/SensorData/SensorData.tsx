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

  if (isLoading) {
    return <LoadingSpinner />;
  }

  // 가장 최근의 history 데이터가 배열 맨뒤에 추가된다고 가정함
  const waterHistory =
    HistoryData.historyValues.WATER_LEVEL[
      HistoryData.historyValues.WATER_LEVEL.length - 1
    ].value;
  const sunHistory = HistoryData.historyValues.LIGHT[0].value; // UI 테스트를 위해 배열 인덱스 임의 지정
  const pHHistory = HistoryData.historyValues.PH[0].value; // UI 테스트를 위해 배열 인덱스 임의 지정

  // console.log(sensorData, 'sensor', isLoading, HistoryData);

  // 실시간 수치들을 넘겨주면서 과거 이력 조회api의 가장 최신 데이터도 같이 넘겨줌
  // 가장 최신 데이터를 이용해서 이전 수치에 비해 얼마나 증/감/유지 되었는지를 표시.

  return (
    <article className="mb-card py-contentsCard bg-ContentsColor rounded-contentsCard">
      <div className="flex justify-between items-center m-contentsCard">
        <ArticleTitle>센서 데이터</ArticleTitle>
      </div>
      <div className="flex justify-between m-contentsCard">
        <Card type="sensors">
          {isLoading && <LoadingSpinner />}
          {!isLoading && (
            <ThresholdCard
              type="water"
              // sensorData.latestValues.WATER_LEVEL.value
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
              // sensorData.latestValues.ILLUMINANCE.value
              data={sensorData.latestValues.LIGHT.value}
              history={sunHistory}
            />
          )}
        </Card>
        <Card type="sensors">
          {isLoading && <LoadingSpinner />}
          {!isLoading && (
            <ThresholdCard
              type="PH"
              // sensorData.latestValues.PH.value
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
