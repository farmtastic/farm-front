import { FaRegBell } from 'react-icons/fa';
import LatestDataUpdate from '../SensorData/LatestDataUpdate';

const Header = () => {
  return (
    <header className="h-header flex justify-between items-center px-14 text-white">
      <div className="text-header">Parmtastic</div>
      <LatestDataUpdate />
      <FaRegBell size={40} />
    </header>
  );
};

export default Header;
