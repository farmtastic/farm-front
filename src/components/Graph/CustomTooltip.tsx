import dayjs from 'dayjs';
import type { CustomTooltipProps } from '@/types/type';

// 조도, pH 그래프 커스텀 툴팁 컴포넌트
const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const { timestamp, value, threshold, type } = payload[0].payload;
    const date = dayjs(timestamp).format('MM.DD HH:mm:ss');
    const unit =
      type === 'WATER_LEVEL' ? 'm' : type === 'ILLUMINENCE' ? 'lux' : '';
    return (
      <div className="bg-white/90 text-black rounded-lg px-3 py-2 shadow border border-gray-300 text-xs flex flex-col items-center">
        <div>{date}</div>
        <div className="font-bold">{`${value}${unit}`}</div>
        <div className="text-gray-500">{`(임계값: ${threshold}${unit})`}</div>
      </div>
    );
  }
  return null;
};
export default CustomTooltip;
