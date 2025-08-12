import Drawer from '@mui/material/Drawer';
import type { DrawerProps } from '@/types/type';
import { formatKoreanTimestamp } from '@/utils/formatKoreanTimestamp';

const CustomDrawer = ({ showDrawer, onClose, data }: DrawerProps) => {
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
            key={`${item.createdAt} ${item.message}`}
            className="px-7 py-4 flex flex-col gap-1 hover:bg-BackgroundColor transition"
          >
            <span className="text-2xl text-gray-400">
              {formatKoreanTimestamp(item.createdAt)}
            </span>
            <span className="text-3xl font-medium text-white">
              {item.message}
            </span>
          </li>
        ))}
      </ul>
    </Drawer>
  );
};

export default CustomDrawer;
