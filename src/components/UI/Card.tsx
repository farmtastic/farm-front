import type { CardProps } from '@/types/type';

const Card = ({ children, type }: CardProps) => {
  // 동적 CSS를 위한 객체
  const cardDynamicCss = {
    sensors: 'w-full h-48 justify-center',
    controls: 'w-full h-36',
    graphs: 'w-210 h-48',
  };

  return (
    <div
      className={`${cardDynamicCss[type]} bg-BackgroundColor rounded-card mx-1 flex items-center`}
    >
      {children}
    </div>
  );
};

export default Card;
