import React from 'react';

export type Children = {
  children: React.ReactNode;
};

export interface SensorDataProps {
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
