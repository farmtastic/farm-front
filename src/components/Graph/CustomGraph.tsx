import {
  LineChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
  Tooltip,
} from 'recharts';
import CustomTooltip from './CustomTooltip';
import dayjs from 'dayjs';
import LineDescript from './LineDescript';
import type { CustomGraphProps } from '@/types/type';
import Button from '@/components/UI/Button';

const CustomGraph = ({ data, type }: CustomGraphProps) => {
  // 모달창과 단위 컴포넌트 z-index 수정해야함

  const unit =
    type === 'WATER_LEVEL' ? 'm' : type === 'ILLUMINANCE' ? 'lux' : '';

  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="text-3xl mb-graphB mt-graphT">
          {type === 'WATER_LEVEL'
            ? '수위'
            : type === 'ILLUMINANCE'
            ? '조도'
            : 'pH'}
        </div>
        <Button btnType="history" id={1} type="water" data={data} />
      </div>
      <div className="relative">
        <div className="absolute right-16 top-0 flex justify-end mt-2 text-gray-400 text-xs z-10">
          {unit !== '' && `(단위: ${unit})`}
        </div>
        <ResponsiveContainer width="100%" height={370}>
          <LineChart
            className="bg-BackgroundColor rounded-card p-8"
            tabIndex={-1}
            data={data}
          >
            <CartesianGrid stroke="#22232a" vertical={true} />
            <XAxis
              dataKey="timestamp"
              tickFormatter={(v) => dayjs(v).format('MM.DD HH:mm')}
              stroke="#888"
              tick={{ fill: '#ccc', fontSize: 13 }}
            />
            <YAxis
              domain={[0, (dataMax) => Math.ceil(dataMax * 1.05)]} // 최대값의 110%까지 표시 (점에 hover시 잘리지 않기 위함)
              stroke="#888"
              tick={{ fill: '#ccc', fontSize: 13 }}
              tickCount={6}
              width={32}
              axisLine={false}
            />{' '}
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#58a6ff"
              strokeWidth={3}
              activeDot={{ r: 7 }}
              name={`${data[0].type}`}
            />
            <Line
              type="monotone"
              dataKey="threshold"
              stroke="#FF6969"
              strokeWidth={2}
              dot={false}
              name="임계값"
              legendType="line"
            />
          </LineChart>
        </ResponsiveContainer>
        <LineDescript />
      </div>
    </div>
  );
};

export default CustomGraph;
