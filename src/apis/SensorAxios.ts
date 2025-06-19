import AxiosInstance from './axiosInstance';
import type { SensorDataProps } from '@/types/type';

export const getLatestSensorData = async ({ zoneId }: SensorDataProps) => {
  try {
    // 최신 상태 조회
    const { data } = await AxiosInstance.get(`/zones/${zoneId}/latest`);
    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const getDataHistory = async ({ zoneId }: SensorDataProps) => {
  try {
    // 과거 이력 조회
    const res = await AxiosInstance.get(`/zones/${zoneId}/history`);
    return res.data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
