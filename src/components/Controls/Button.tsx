import type { STButtonType } from '@/types/type';
import Modal from '../UI/Modal';
import { useState } from 'react';

const SettingButton = ({
  btnType,
  id,
  type,
  data,
  onDelete = () => {},
  onSave = () => {},
}: STButtonType) => {
  const [showModal, setShowModal] = useState(false);

  // 기록 조회 버튼이랑 스타일이 같고, 용도도 같음. 공통 컴포넌트로 빼기(배경색, 폰트색만 다름)
  // ButtonType을 인자로 받아서 타입이 controls일때와 history일 경우 두 가지로 버튼의 이름을 줌
  // onSave와 onDelete는 옵셔널 체이닝을 사용해 history 모달의 경우 이 두가지 함수는 인자로 받지 않음.
  // 버튼 클릭 시 모달창 렌더링

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="rounded-3xl w-20 h-10 bg-ContentsColor px-4 py-1 text-xl transition hover:bg-slate-700/60 outline-none"
      >
        {btnType === 'controls' ? '설정' : '기록 조회'}
      </button>
      {showModal && (
        <Modal
          id={id}
          onSave={onSave}
          onDelete={onDelete}
          data={data}
          type={type}
          isOpen={showModal}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default SettingButton;
