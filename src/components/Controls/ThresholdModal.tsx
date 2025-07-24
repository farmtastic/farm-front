import ReactModal from 'react-modal';
import type { Styles } from 'react-modal';
import type { ModalType } from '@/types/type';
import { useState } from 'react';

const ThresholdModal = ({
  id,
  type,
  isOpen,
  closeModal,
  data = [],
  onDelete,
  onSave,
}: ModalType) => {
  const [value, setValue] = useState<number>(data?.[0]?.threshold ?? 0);

  const customStyle: Styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(17, 17, 28, 0.75)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#1C1C2A',
      color: '#fff',
      border: '0px',
      borderRadius: '30px',
      width: '410px',
      height: 'auto',
      fontSize: '30px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyle}
    >
      <div>
        <span>{type === 'LIGHT' ? '조도' : 'pH'}</span>
        <span>임계값 설정</span>
      </div>
      <div className="text-lg">
        <span className="mr-2">현재 임계값:</span>
        <span>{data[0]?.threshold ?? '없음'}</span>
      </div>
      <div className="flex flex-col justify-center items-start text-lg text-ModalSmText">
        <div className="mt-3 flex">
          <span>{type === 'LIGHT' ? '조도' : 'pH'}</span>
          <span>임계값 설정</span>
        </div>
        <div className="flex items-center justify-between mb-6 px-3 py-1 rounded-contentsCard border border-gray-300 rounded-2x w-full max-w-md mr-4 mt-2">
          <input
            type="number"
            onChange={(e) => setValue(Number(e.target.value))}
            placeholder={`${value}`}
            className="w-full bg-transparent pl-2 border-gray-100 text-2xl font-medium text-white focus:border-green-400 focus:outline-none transition"
          />
          <span className="ml-2 text-xl text-gray-300">
            {type === 'water' ? 'm' : type === 'LIGHT' ? 'lux' : 'pH'}
          </span>
        </div>
        <div className="flex gap-10">
          <button
            onClick={() => closeModal()}
            className="w-24 px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition"
          >
            취소
          </button>
          <button
            onClick={() => {
              onSave(value, id, type);
              closeModal();
            }}
            className="w-24 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            저장
          </button>
          <button
            type="button"
            className="w-24 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            onClick={() => {
              onDelete(id);
              closeModal();
            }}
          >
            제거
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default ThresholdModal;
