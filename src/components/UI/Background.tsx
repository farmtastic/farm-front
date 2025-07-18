import type { Children } from '@/types/type';

const Background = ({ children }: Children) => {
  return (
    <div className="w-screen min-h-screen bg-BackgroundColor m-0 px-12 flex flex-col">
      {children}
    </div>
  );
};

export default Background;
