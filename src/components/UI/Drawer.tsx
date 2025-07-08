import 'react-modern-drawer/dist/index.css';
import './drawer.css';
import type { DrawerProps } from '@/types/type';
import ReactDrawer from 'react-modern-drawer';

const Drawer = ({ showDrawer, onClose }: DrawerProps) => {
  return (
    <ReactDrawer
      open={showDrawer}
      direction="right"
      onClose={onClose}
      className="react-drawer__content"
    >
      <div className="notification-drawer">
        <div className="nd-header">
          <span>알림 내역</span>
          <button onClick={close}>×</button>
        </div>
        <div className="nd-list">
          {/* {notifications.map((msg, i) => (
            <div key={i} className="nd-item">
              오전 10:05, pH 저하로 펌프 ON
            </div>
          ))} */}
        </div>
      </div>
    </ReactDrawer>
  );
};

export default Drawer;
