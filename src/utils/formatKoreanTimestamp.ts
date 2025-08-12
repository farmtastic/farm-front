// 한국 시간으로 타임스탬프 변환
export function formatKoreanTimestamp(timestamp: string): string {
  const date = new Date(timestamp);

  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  const hour = date.getHours();
  const minute = date.getMinutes().toString().padStart(2, '0');

  const ampm = hour < 12 ? '오전' : '오후';
  const displayHour = hour % 12 === 0 ? 12 : hour % 12;

  return `${year}년 ${month}월 ${day}일 ${ampm} ${displayHour}시 ${minute}분`;
}
