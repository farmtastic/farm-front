import type { CardProps } from '@/types/type';

const Card = ({ children, type }: CardProps) => {
  // 동적 CSS를 위한 객체
  const cardDynamicCss = {
    sensors: 'w-210 h-210 justify-center',
    controls: 'w-full h-140',
    graphs: 'w-210 h-210',
  };

  return (
    <div
      className={`${cardDynamicCss[type]} bg-BackgroundColor rounded-card  mt-card mb-9 flex items-center`}
    >
      {children}
    </div>
  );
};

export default Card;
