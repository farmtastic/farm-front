import Drawer from '@mui/material/Drawer';
import type { DrawerProps } from '@/types/type';
import { formatKoreanTimestamp } from '@/utils/formatKoreanTimestamp';

const CustomDrawer = ({ showDrawer, onClose }: DrawerProps) => {
  const data = [
    {
      timestamp: '2025-06-26T12:55:36.071133',
      contents: 'pH 저하로 펌프 ON',
    },
    {
      timestamp: '2025-06-28T12:05:36.071133',
      contents: '수위 저하로 펌프 ON',
    },
    {
      timestamp: '2025-06-30T01:25:36.071133',
      contents: '조도 저하로 조명 ON',
    },
  ];

  return (
    <Drawer
      open={showDrawer}
      onClose={onClose}
      anchor="right"
      slotProps={{
        paper: {
          className: 'bg-ContentsColor w-drawer',
        },
      }}
    >
      <div className="flex justify-between text-4xl p-7">
        <div>알림 내역</div>
        <div>X</div>
      </div>
      {data.map((item) => (
        <div className="flex flex-col justify-center p-7 h-drawerList text-3xl">
          <div>{formatKoreanTimestamp(item.timestamp)}</div>
          <div>{item.contents}</div>
        </div>
      ))}
    </Drawer>
  );
};

export default CustomDrawer;
