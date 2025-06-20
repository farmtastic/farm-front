import Background from '@/components/UI/Background';
import Header from '@/components/UI/Header';
import Main from '@/components/UI/Main';

import { useMutation, useQuery } from '@tanstack/react-query';
import { getLatestSensorData, getDataHistory } from '@/apis/SensorAxios';
import { getNotifications, getLogs } from '@/apis/HistoryAxios';
import {
  getRules,
  createRules,
  updateRules,
  deleteRules,
} from '@/apis/RulesAxios';
import type { RuleData, RulesProps } from '@/types/type';

const MainPages = () => {
  // 테스트 데이터
  const newCreateData = {
    ruleId: 4,
    type: 'rules_4',
    threshold: 100,
  };
  const updateData = {
    threshold: 50,
  };

  /* 테스트용으로 쿼리문을 한곳에 모아 사용 중이며, 추후 컴포넌트 단에서 개별 호출 예정 */

  // 최신 상태 조회 쿼리
  const { data: SensorData } = useQuery({
    queryKey: ['latestSensorData'],
    queryFn: () => getLatestSensorData({ zoneId: 1 }),
    enabled: false,
  });

  // 과거 이력 조회 쿼리
  const { data: HistoryData } = useQuery({
    queryKey: ['dataHistory'],
    queryFn: () => getDataHistory({ zoneId: 1 }),
    enabled: false,
  });

  // 알림 목록 조회 쿼리
  const { data: NotiData } = useQuery({
    queryKey: ['notification'],
    queryFn: () => getNotifications(),
    enabled: false,
  });

  // 제어 이력 조회 쿼리
  const { data: LogsData } = useQuery({
    queryKey: ['logs'],
    queryFn: () => getLogs(),
    enabled: false,
  });

  // 규칙 조회 쿼리
  const { data: rulesData } = useQuery({
    queryKey: ['rulesData'],
    queryFn: () => getRules(),
    enabled: false,
  });

  // 규칙 생성 mutation
  const createMutation = useMutation({
    mutationFn: (newData: RuleData) => createRules(newData),
    onSuccess: (data) => {
      console.log('생성 성공:', data);
      alert(data.message);
    },
    onError: (error) => {
      console.error('생성 실패:', error);
      alert('규칙 생성 실패');
    },
  });

  // 규칙 수정 mutation
  const updateMutation = useMutation({
    mutationFn: ({ ruleId, newData }: RulesProps) =>
      updateRules({ ruleId, newData }),
    onSuccess: (data) => {
      console.log('수정 성공:', data);
      alert(data.message);
    },
    onError: (error) => {
      console.error('수정 실패:', error);
      alert('규칙 수정 실패');
    },
  });

  // 규칙 삭제 mutation
  const deleteMutation = useMutation({
    mutationFn: ({ ruleId }: RulesProps) => deleteRules({ ruleId }),
    onSuccess: (data) => {
      console.log('삭제 성공:', data);
      alert(data.message);
    },
    onError: (error) => {
      console.error('삭제 실패:', error);
      alert('규칙 삭제 실패');
    },
  });

  console.log('sensor', SensorData, HistoryData);
  console.log('history', NotiData, LogsData);
  console.log('rules', rulesData, LogsData);

  return (
    <Background>
      <Header />
      <button onClick={() => createMutation.mutate(newCreateData)}>
        create
      </button>
      <button
        onClick={() => {
          const newData = {
            ...newCreateData,
            updateData,
          };
          updateMutation.mutate({ ruleId: 2, newData });
        }}
      >
        update
      </button>
      <button onClick={() => deleteMutation.mutate({ ruleId: 1 })}>
        delete
      </button>
      <Main />
    </Background>
  );
};

export default MainPages;
