import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { formatStatus } from '@/utils/formatStatus';
import { waterStatusMapper } from '@/utils/waterStatusMapper';
import type { WaterGraphProps } from '@/types/type';
import CustomWaterTooltip from './CustomWaterTooltip';
import Button from '../UI/Button';
import LineDescript from './LineDescript';

// 수위 그래프 커스텀 컴포넌트
const CustomWaterGraph: React.FC<WaterGraphProps> = ({
  topData,
  bottomData,
  historyTOP,
  historyBOTTOM,
}) => {
  dayjs.locale('ko');
  const data = waterStatusMapper(topData, bottomData);
  const allHistoryData = waterStatusMapper(historyTOP, historyBOTTOM);

  const formatTime = (ts: string) => dayjs(ts).format('HH:mm');
  return (
    <div className="relative mt-11">
      <div className="flex items-center gap-3">
        <div className="text-3xl mb-graphB mt-graphT">수위</div>
        <Button
          btnType="history"
          id={1}
          type="WATER_LEVEL"
          data={allHistoryData}
        />
      </div>
      {data && data.length > 0 ? (
        <ResponsiveContainer width="100%" height={370}>
          <LineChart
            data={data}
            className="bg-BackgroundColor rounded-card p-8"
          >
            <CartesianGrid stroke="#333" strokeDasharray="3 3" />
            <XAxis
              dataKey="timestamp"
              tickFormatter={formatTime}
              tick={{ fill: '#ccc' }}
            />
            <YAxis
              type="number"
              domain={[0, 2]}
              ticks={[0, 1, 2]}
              tickFormatter={formatStatus}
              tick={{ fill: '#ccc' }}
            />
            <Tooltip content={<CustomWaterTooltip />} />
            <Line
              type="stepAfter"
              dataKey="status"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <div className="w-full h-[370px] flex items-center justify-center text-gray-400 bg-BackgroundColor rounded-card">
          표시할 데이터가 없습니다.
        </div>
      )}
      <LineDescript type="water" />
    </div>
  );
};

export default CustomWaterGraph;
