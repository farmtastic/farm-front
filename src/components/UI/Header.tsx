import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getNotifications } from '@/apis/HistoryAxios';
import { usePrevious } from '@/hooks/usePrevious';
import { FaRegBell, FaCircle } from 'react-icons/fa';
import LatestDataUpdate from '../SensorData/LatestDataUpdate';
import Drawer from './Drawer';

const Header = () => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [hasChanged, setHasChanged] = useState<boolean>(false);

  // 알림 목록 조회 쿼리
  const { data, isLoading } = useQuery({
    queryKey: ['notification'],
    queryFn: () => getNotifications(),
    refetchInterval: 10 * 1000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const prevNotifications = usePrevious(data);

  // 이전 알림 데이터와 비교해 길이의 차이가 있으면 새로운 알림이 도착한 것 & 알림창을 열면 빨간 점 사라짐
  useEffect(() => {
    if (!prevNotifications) return;

    if (data.length !== prevNotifications.length) setHasChanged(true);

    if (showDrawer) setHasChanged(false);
  }, [data, prevNotifications, showDrawer]);

  const onShowDrawer = () => {
    setShowDrawer(true);
  };

  const onCloseDrawer = () => {
    setShowDrawer(false);
  };

  return (
    <header className="relative h-header flex justify-between items-center px-14 text-white">
      <div className="text-header">Farmtastic</div>
      <LatestDataUpdate />
      <FaRegBell onClick={onShowDrawer} size={40} className="cursor-pointer" />
      {hasChanged && (
        <FaCircle
          color="#FF0000"
          className="absolute right-12 bottom-24"
          size={13}
        />
      )}
      {!isLoading && (
        <Drawer showDrawer={showDrawer} onClose={onCloseDrawer} data={data} />
      )}
    </header>
  );
};

export default Header;
