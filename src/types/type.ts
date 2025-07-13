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
  sensorId: number;
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

type ControlsDataType = {
  ruleName: string;
  sensorId: number;
  conditionOp: string;
  threshold: number;
  actuatorId: number;
  command: string;
  active: boolean;
};

export interface ModalType {
  type: 'water' | 'illuminance' | 'PH';
  isOpen: boolean;
  closeModal: () => void;
  data: ControlsDataType[];
  onSave: (saveData: number, id: number) => void; // 임시로 string 타입으로 적어놓았음.
  onDelete: (id: number) => void;
  id: number;
}

export interface STButtonType {
  type: 'water' | 'illuminance' | 'PH';
  data: ControlsDataType[];
  onSave: (saveData: number, id: number) => void; // 임시로 string 타입으로 적어놓았음.
  onDelete: (id: number) => void;
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

export interface GraphDataType {
  timestamp: string;
  value: number;
  threshold: number;
  type: string;
}

export interface CustomGraphProps {
  data: GraphDataType[];
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
