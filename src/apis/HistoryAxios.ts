import AxiosInstance from './AxiosInstance';

// 알림 목록 조회
export const getNotifications = async () => {
  try {
    const { data } = await AxiosInstance.get('notifications');
    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

// 제어 이력 조회
export const getLogs = async () => {
  try {
    const { data } = await AxiosInstance.get('/controls/logs');
    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
