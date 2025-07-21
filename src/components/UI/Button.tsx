import type { HistoryType, STButtonType, ControlsDataType } from '@/types/type';
import ThresholdModal from '@/components/Controls/ThresholdModal';
import HistoryModal from '../Graph/HistoryModal';
import { useState } from 'react';

const Button = ({
  btnType,
  id,
  type,
  data,
  onDelete = () => {},
  onSave = () => {},
}: STButtonType) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const dynamicCss = {
    controls:
      'rounded-3xl w-20 h-10 bg-ContentsColor px-4 py-1 text-xl transition hover:bg-slate-700/60 outline-none ' +
      'disabled:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed',
    history:
      'rounded-3xl w-20 h-10 bg-BackgroundColor hover:bg-slate-700/60 outline-none transition text-sm mt-5 ' +
      'disabled:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed',
  };

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className={`${dynamicCss[btnType]}`}
        disabled={data === undefined}
      >
        {btnType === 'controls' ? '설정' : '기록 조회'}
      </button>
      {showModal && btnType === 'history' && (
        <HistoryModal
          isOpen={showModal}
          closeModal={closeModal}
          data={data as HistoryType[]}
        />
      )}
      {showModal && btnType === 'controls' && (
        <ThresholdModal
          id={id}
          onSave={onSave}
          onDelete={onDelete}
          data={data as ControlsDataType[]}
          type={type}
          isOpen={showModal}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default Button;
