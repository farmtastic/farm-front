import WarningIcon from '@/components/Icon/warning_orange.svg?react';
import { Tooltip } from 'react-tooltip';

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
