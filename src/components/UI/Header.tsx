import { useState } from 'react';
import { FaRegBell } from 'react-icons/fa';
import LatestDataUpdate from '../SensorData/LatestDataUpdate';
import Drawer from './Drawer';

const Header = () => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);

  const onShowDrawer = () => {
    setShowDrawer(true);
  };

  const onCloseDrawer = () => {
    setShowDrawer(false);
  };

  return (
    <header className="h-header flex justify-between items-center px-14 text-white">
      <div className="text-header">Farmtastic</div>
      <LatestDataUpdate />
      <FaRegBell onClick={onShowDrawer} size={40} className="cursor-pointer" />
      <Drawer showDrawer={showDrawer} onClose={onCloseDrawer} />
    </header>
  );
};

export default Header;
