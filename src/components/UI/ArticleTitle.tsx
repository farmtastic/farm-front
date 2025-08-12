import type { Children } from '@/types/type';

const ArticleTitle = ({ children }: Children) => {
  return <div className="text-articleTitle">{children}</div>;
};

export default ArticleTitle;
