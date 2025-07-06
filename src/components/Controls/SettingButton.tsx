const SettingButton = () => {
  // 기록 조회 버튼이랑 스타일이 같고, 용도도 같음. 공통 컴포넌트로 빼기(크기, 배경색만 다름)
  // 버튼 클릭 시 모달창 렌더링
  return (
    <button className="rounded-3xl w-20 h-10 bg-ContentsColor px-4 py-1 text-xl transition hover:bg-slate-700/60">
      설정
    </button>
  );
};

export default SettingButton;
