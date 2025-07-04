import type { Children } from '@/types/type';

const ContentsBox = ({ children }: Children) => {
  return <div className="bg-blue p-contentsCard">{children}</div>;
};

export default ContentsBox;
