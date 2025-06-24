import AxiosInstance from './AxiosInstance';
import type { RulesProps } from '@/types/type';

export const getRules = async () => {
  try {
    const { data } = await AxiosInstance.get('/rules');
    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const createRules = async ({ newData }: RulesProps) => {
  try {
    const { data } = await AxiosInstance.post('/rules', newData);
    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const updateRules = async ({ ruleId, newData }: RulesProps) => {
  try {
    const { data } = await AxiosInstance.put(`/rules/${ruleId}`, newData);
    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const deleteRules = async ({ ruleId }: RulesProps) => {
  try {
    const { data } = await AxiosInstance.delete(`/rules/${ruleId}`);
    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
