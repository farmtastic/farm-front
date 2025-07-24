import type { CustomTooltipProps } from '@/types/type';
import dayjs from 'dayjs';
import { formatStatus } from '@/utils/formatStatus';

const CustomWaterTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (!active || !payload?.length) return null;
  const { timestamp, status } = payload[0].payload;

  const date = dayjs(timestamp).format('MM.DD HH:mm:ss');
  return (
    <div className="bg-white/90 text-black rounded-lg px-3 py-2 shadow border border-gray-300 text-xs flex flex-col items-center">
      <div style={{ marginBottom: 4 }}>{date}</div>
      <div>{formatStatus(status!)}</div>
    </div>
  );
};

export default CustomWaterTooltip;
