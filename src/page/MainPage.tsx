import Background from '@/components/UI/Background';
import Header from '@/components/UI/Header';
import Main from '@/components/UI/Main';

import { useQuery } from '@tanstack/react-query';
import { getNotifications } from '@/apis/HistoryAxios';

const MainPages = () => {
  /* 테스트용으로 쿼리문을 한곳에 모아 사용 중이며, 추후 컴포넌트 단에서 개별 호출 예정 */

  // 알림 목록 조회 쿼리
  const { data: NotiData } = useQuery({
    queryKey: ['notification'],
    queryFn: () => getNotifications(),
  });

  console.log('history', '알림', NotiData);

  return (
    <Background>
      <Header />
      <Main />
    </Background>
  );
};

export default MainPages;
