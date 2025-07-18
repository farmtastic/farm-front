import React from 'react';
import type { TooltipProps } from 'recharts';

export type Children = {
  children: React.ReactNode;
};

export interface SensorDataAPIProps {
  zoneId: number;
}

export interface RuleData {
  ruleName: string;
  sensorId?: number;
  conditionOp: string;
  threshold: number;
  actuatorId: number;
  command: string;
  active: boolean;
}

export interface RulesProps {
  ruleId?: number;
  newData?: RuleData;
}

type CardTypes = 'sensors' | 'controls' | 'graphs';

export interface Type {
  type: CardTypes;
}

export type CardProps = Children & Type;

export interface SensorDataProps {
  data: number;
  history: number;
}

export type ControlsDataType = {
  ruleName: string;
  sensorId: number;
  conditionOp: string;
  threshold: number;
  actuatorId: number;
  command: string;
  active: boolean;
};

export type HistoryType = {
  timestamp: string;
  value: number;
  type: 'WATER_LEVEL' | 'ILLUMINANCE' | 'PH';
  threshold: number;
};

export interface HistoryModalProps {
  isOpen: boolean;
  closeModal: () => void;
  data: HistoryType[];
}

export interface ModalType {
  type: 'water' | 'illuminance' | 'PH' | string;
  isOpen: boolean;
  closeModal: () => void;
  data: ControlsDataType[];
  onSave: (saveData: number, id: number, type: string) => void;
  onDelete: (id: number) => void;
  id: number;
}

export interface STButtonType {
  btnType: 'controls' | 'history';
  type: 'water' | 'illuminance' | 'PH' | string;
  data: ControlsDataType[] | HistoryType[];
  onSave?: (data: number, id: number, type: string) => void;
  onDelete?: (id: number) => void;
  id: number;
}

export interface ThresholdType {
  type: 'water' | 'illuminance' | 'PH';
  data: number;
  history: number;
}

export interface DrawerProps {
  showDrawer: boolean;
  onClose: () => void;
}

export interface CustomGraphProps {
  data: HistoryType[];
  type: 'WATER_LEVEL' | 'ILLUMINANCE' | 'PH';
}

// CustomTooltip의 Props 타입
export interface CustomTooltipProps extends TooltipProps<number, string> {
  payload?: Array<{
    payload: {
      timestamp: string;
      value: number;
      threshold: number;
      type: string;
    };
  }>;
}
