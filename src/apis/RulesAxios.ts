import AxiosInstance from './AxiosInstance';
import type { RuleData, RulesProps } from '@/types/type';

export const getRules = async () => {
  try {
    const { data } = await AxiosInstance.get('/rules');
    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const createRules = async ({
  ruleName,
  sensorId,
  conditionOp,
  threshold,
  actuatorId,
  command,
  active,
}: RuleData) => {
  try {
    const newData = {
      ruleName,
      sensorId,
      conditionOp,
      threshold,
      actuatorId,
      command,
      active,
    };
    const { data } = await AxiosInstance.post('/rules', newData);
    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const updateRules = async ({ ruleId, newData }: RulesProps) => {
  try {
    console.log('수정할 update 데이터', newData);
    const { data } = await AxiosInstance.put(
      `/rules/update/${ruleId}`,
      newData
    );
    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const deleteRules = async ({ ruleId }: RulesProps) => {
  try {
    const { data } = await AxiosInstance.delete(`/rules/delete/${ruleId}`);
    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
