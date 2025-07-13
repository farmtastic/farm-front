import ArticleTitle from '../UI/ArticleTitle';
import ThresholdCard from '../UI/ThresholdCard';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';

import { useQuery } from '@tanstack/react-query';
import { getLatestSensorData, getDataHistory } from '@/apis/SensorAxios';

// 임시 데이터
const waterHistory = 4.8;
const sunHistory = 590;
const pHHistory = 4.9;

const dataDummyData = {
  historyValues: null,
  latestValues: {
    ILLUMINANCE: {
      timestamp: '2025-06-26T12:55:36.071133',
      value: 12000,
    },
    PH: {
      timestamp: '2025-06-26T12:55:36.057906',
      value: 6.5,
    },
    WATER_LEVEL: {
      timestamp: '2025-06-26T12:55:36.064386',
      value: 85.2,
    },
  },
  zoneId: 1,
  zoneName: '스마트팜 A-1',
};

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

  // console.log(sensorData, isFetching, isLoading, HistoryData);

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
              data={dataDummyData.latestValues.WATER_LEVEL.value}
              history={waterHistory}
            />
          )}
        </Card>
        <Card type="sensors">
          {isLoading && <LoadingSpinner />}
          {!isLoading && (
            <ThresholdCard
              type="illuminance"
              // sensorData.latestValues.ILLUMINANCE.value
              data={dataDummyData.latestValues.ILLUMINANCE.value}
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
              data={dataDummyData.latestValues.PH.value}
              history={pHHistory}
            />
          )}
        </Card>
      </div>
    </article>
  );
};

export default SensorData;
