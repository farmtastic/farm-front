// 수위 그래프에서 bottom, top 값에 따라 상태를 리턴하는 유틸함수
export const formatStatus = (val: number) => {
  if (val === 0) return '부족함';
  if (val === 1) return '적당함';
  if (val === 2) return '가득참';
  return '';
};
