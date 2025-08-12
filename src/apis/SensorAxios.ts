import AxiosInstance from './AxiosInstance';
import type { SensorDataAPIProps } from '@/types/type';

// 최신 상태 조회
export const getLatestSensorData = async ({ zoneId }: SensorDataAPIProps) => {
  try {
    const { data } = await AxiosInstance.get(`/zones/${zoneId}/latest`);
    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

// 과거 이력 조회
export const getDataHistory = async ({ zoneId }: SensorDataAPIProps) => {
  try {
    const res = await AxiosInstance.get(`/zones/${zoneId}/history`);
    return res.data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
