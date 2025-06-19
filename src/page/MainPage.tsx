import Background from '@/components/UI/Background';
import Header from '@/components/UI/Header';
import Main from '@/components/UI/Main';

import { useQuery } from '@tanstack/react-query';
import { getLatestSensorData, getDataHistory } from '@/apis/SensorAxios';

const MainPages = () => {
  const { data: SensorData } = useQuery({
    queryKey: ['latestSensorData'],
    queryFn: () => getLatestSensorData({ zoneId: 1 }),
  });

  const { data: HistoryData } = useQuery({
    queryKey: ['dataHistory'],
    queryFn: () => getDataHistory({ zoneId: 1 }),
  });

  console.log('res', SensorData, HistoryData);

  return (
    <Background>
      <Header />
      <Main />
    </Background>
  );
};

export default MainPages;
