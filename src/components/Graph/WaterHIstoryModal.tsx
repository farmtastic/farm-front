import type { WaterHistoryModalProps } from '@/types/type';
import Modal from 'react-modal';
import type { Styles } from 'react-modal';
import dayjs from 'dayjs';

const WaterHIstoryModal = ({
  isOpen,
  closeModal,
  data,
}: WaterHistoryModalProps) => {
  const customStyle: Styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(17, 17, 28, 0.75)',
      zIndex: 50,
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      padding: 0,
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#1C1C2A',
      color: '#fff',
      border: '0px',
      borderRadius: '30px',
      width: '800px',
      height: 'auto',
      fontSize: '30px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyle}
    >
      <div className="hide-scrollbar relative mt-0 overflow-y-auto max-h-[500px] z-20 scrollbar-thumb-slate-600 scrollbar-track-slate-800">
        <div className="flex justify-center items-center px-6 py-6 border-b border-gray-500">
          <h2 className="text-3xl font-bold text-white">
            <span>수위</span>
            <span>기록 조회</span>
          </h2>
        </div>
        <table className="w-full table-fixed border-collapse text-base border-spacing-10">
          <thead>
            <tr className="bg-ContentsColor text-2xl">
              <th className="px-8 py-3 text-left">시간</th>
              <th className="p-3 text-right">값</th>
              <th className="px-8 py-3 text-right">상태</th>
            </tr>
          </thead>
          <tbody className="text-2xl">
            {data.map((item, idx) => (
              <tr
                key={`${item.timestamp}`}
                className={
                  idx % 2 === 0 ? 'bg-LightContentsColor' : 'bg-ContentsColor'
                }
              >
                <td className="px-8 py-3">
                  {dayjs(item.timestamp).format('MM.DD HH:mm:ss')}
                </td>
                <td className="p-3 text-right">
                  <span>{item.status}</span>
                </td>
                <td className="px-8 py-3 text-right text-red-400">
                  <span>
                    {item.status === 0
                      ? '부족'
                      : item.status === 1
                      ? '적정'
                      : '가득'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-6 py-4 border-t border-gray-700 bg-LightContentsColor">
          <button
            onClick={closeModal}
            className="w-full py-2 bg-ContentsColor hover:bg-gray-700 rounded-lg text-white font-medium transition"
          >
            닫기
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default WaterHIstoryModal;
