import Background from '@/components/UI/Background';
import Header from '@/components/UI/Header';
import Main from '@/components/UI/Main';
import { useQuery } from '@tanstack/react-query';
import { getNotifications } from '@/apis/HistoryAxios';

const MainPages = () => {
  // 알림 목록 조회 쿼리
  const { data: NotiData } = useQuery({
    queryKey: ['notification'],
    queryFn: () => getNotifications(),
  });
  return (
    <Background>
      <Header />
      <Main />
    </Background>
  );
};

export default MainPages;
