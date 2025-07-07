import React from 'react';

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

export interface ModalType {
  type: 'water' | 'illuminance' | 'PH';
  isOpen: boolean;
  closeModal: () => void;
  data: number;
  onSave: (saveData: string, id: number) => void; // 임시로 string 타입으로 적어놓았음.
  onDelete: (id: number) => void;
  id: number;
}

export interface STButtonType {
  type: 'water' | 'illuminance' | 'PH';
  data: number;
  onSave: (saveData: string, id: number) => void; // 임시로 string 타입으로 적어놓았음.
  onDelete: (id: number) => void;
  id: number;
}

export interface ThresholdType {
  type: 'water' | 'illuminance' | 'PH';
  data: number;
  history: number;
}
