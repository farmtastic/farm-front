import WarningIcon from '@/components/Icon/warning_orange.svg?react';
import { Tooltip } from 'react-tooltip';

// 그래프 요소 툴팁 컴포넌트
const GraphInfoTooltip = ({ text }: { text: string }) => {
  return (
    <div>
      <a data-tooltip-id="graphInfo">
        <WarningIcon />
      </a>
      <Tooltip
        id="graphInfo"
        place="right"
        style={{ backgroundColor: '#fff', color: '#000' }}
      >
        <span>{text}</span>
      </Tooltip>
    </div>
  );
};

export default GraphInfoTooltip;
