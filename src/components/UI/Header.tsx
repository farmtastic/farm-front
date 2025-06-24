import { FaRegBell } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="h-header flex justify-between items-center px-14">
      <div className="text-header">Dashboard</div>
      <FaRegBell size={40} />
    </header>
  );
};

export default Header;
