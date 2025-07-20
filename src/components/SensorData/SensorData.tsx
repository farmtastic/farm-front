import ArticleTitle from '../UI/ArticleTitle';
import SensorDataCard from './SensorDataCard';
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

  // 회의때 물어볼것
  // 수위는 임계값을 설정할 필요가 없는가?
  // 규칙 조회 api에서 받아오는 수위 경고, 조명 자동 조절은 뭔가. 프론트에서 신경써야할 부분인가?
  // api 호출할때 기존 방식과 달라진 점이 있는지? (필요한 데이터가 바꼈다던지 등등...)
  // 그래프 이력 데이터는 3시간 이내의 데이터만 저장되는것인가?
  // 알림 더미데이터 sql문 요청
  // 그래프 이력 조회 데이터 기록 주기...?

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
