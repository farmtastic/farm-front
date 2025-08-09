import type { Children } from '@/types/type';

// 아티클 타이틀 컴포넌트
const ArticleTitle = ({ children }: Children) => {
  return <div className="text-articleTitle">{children}</div>;
};

export default ArticleTitle;
