import Drawer from '@mui/material/Drawer';
import type { DrawerProps } from '@/types/type';
import { formatKoreanTimestamp } from '@/utils/formatKoreanTimestamp';

const CustomDrawer = ({ showDrawer, onClose }: DrawerProps) => {
  const data = [
    {
      id: 1,
      timestamp: '2025-06-26T12:55:36.071133',
      contents: 'pH 저하로 펌프 ON',
    },
    {
      id: 2,
      timestamp: '2025-06-28T12:05:36.071133',
      contents: '수위 저하로 펌프 ON',
    },
    {
      id: 3,
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
          className: 'w-drawer !bg-ContentsColor',
        },
      }}
    >
      <div className="flex justify-between text-4xl p-7 text-white">
        <div>알림 내역</div>
        <div onClick={onClose} className="cursor-pointer">
          X
        </div>
      </div>
      <ul className="divide-y divide-gray-800">
        {data.map((item) => (
          <li
            key={item.id}
            className="px-7 py-4 flex flex-col gap-1 hover:bg-BackgroundColor transition"
          >
            <span className="text-2xl text-gray-400">
              {formatKoreanTimestamp(item.timestamp)}
            </span>
            <span className="text-3xl font-medium text-white">
              {item.contents}
            </span>
          </li>
        ))}
      </ul>
    </Drawer>
  );
};

export default CustomDrawer;
