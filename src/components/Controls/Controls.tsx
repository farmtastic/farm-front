import ArticleTitle from '../UI/ArticleTitle';
import Card from '../UI/Card';
import Button from './Button';
import type { RuleData, RulesProps } from '@/types/type';

import { useQuery, useMutation } from '@tanstack/react-query';
import {
  getRules,
  updateRules,
  deleteRules,
  createRules,
} from '@/apis/RulesAxios';

const Controls = () => {
  // 테스트 데이터
  // const rulesData = [
  //   {
  //     ruleName: 'water',
  //     sensorId: 1,
  //     conditionOp: '테스트op',
  //     threshold: 100,
  //     actuatorId: 7,
  //     command: '테스트cd',
  //     active: true,
  //   },
  //   {
  //     ruleName: 'illuminance',
  //     sensorId: 2,
  //     conditionOp: '조도 테스트',
  //     threshold: 600,
  //     actuatorId: 8,
  //     command: '조도 테스트',
  //     active: true,
  //   },
  //   {
  //     ruleName: 'pH',
  //     sensorId: 3,
  //     conditionOp: 'pH 테스트',
  //     threshold: 5.6,
  //     actuatorId: 9,
  //     command: 'pH 테스트',
  //     active: true,
  //   },
  // ];

  //규칙 조회 쿼리
  const { data, refetch } = useQuery({
    queryKey: ['rulesData'],
    queryFn: () => getRules(),
  });

  console.log('rules data', data);
  const rules = data ?? [];
  const getRulesByName = (name: string) =>
    rules.filter((item: RuleData) => item.ruleName === name);
  const water = getRulesByName('water');
  const illuminance = getRulesByName('illuminance');
  const pH = getRulesByName('PH');

  // 규칙 생성 mutation
  const createMutation = useMutation({
    mutationFn: (newData: RuleData) => createRules({ ...newData }),
    onSuccess: (data) => {
      console.log('생성 성공:', data);
      alert('규칙 생성 성공');
      refetch();
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
      alert('규칙 수정 완료');
      refetch();
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
      alert('규칙 삭제 성공');
      refetch();
    },
    onError: (error) => {
      console.error('삭제 실패:', error);
      alert('규칙 삭제 실패');
    },
  });
  // 수정이 완료되면 센서데이터 카드도 새로고침하기
  const onSave = (data: number, id: number, type: string) => {
    const unit =
      type === 'water' ? water : type === 'illuminance' ? illuminance : pH;
    if (unit.length !== 0) {
      const newData = {
        ...unit[0],
        threshold: data,
      };
      updateMutation.mutate({ ruleId: id, newData });
    } else {
      const unitId = type === 'water' ? 1 : type === 'illuminance' ? 2 : 3;
      const newCreateData = {
        ruleName: type,
        sensorId: unitId,
        conditionOp: '테스트op',
        threshold: data,
        actuatorId: type === 'water' ? 7 : type === 'illuminance' ? 8 : 9,
        command: '테스트cd',
        active: true,
      };
      createMutation.mutate(newCreateData);
    }
  };

  const onDelete = (id: number) => deleteMutation.mutate({ ruleId: id });
  const controlConfigs = [
    {
      label: '수위 제어',
      type: 'water',
      id: water[0]?.ruleId,
      data: water,
      onSave: (data: number, id: number, type: string) => {
        onSave(data, id, type);
      },
      onDelete: (id: number) => {
        onDelete(id);
      },
    },
    {
      label: '조도 제어',
      type: 'illuminance',
      id: illuminance[0]?.ruleId,
      data: illuminance,
      onSave: (data: number, id: number, type: string) => {
        onSave(data, id, type);
      },
      onDelete: (id: number) => {
        onDelete(id);
      },
    },
    {
      label: 'pH 제어',
      type: 'PH',
      id: pH[0]?.ruleId,
      data: pH,
      onSave: (data: number, id: number, type: string) => {
        onSave(data, id, type);
      },
      onDelete: (id: number) => {
        onDelete(id);
      },
    },
  ];

  return (
    <article className="bg-ContentsColor p-45px rounded-contentsCard">
      <ArticleTitle>제어</ArticleTitle>
      <div className="flex flex-col">
        {controlConfigs.map((cfg) => (
          <Card type="controls" key={cfg.type}>
            <div className="m-16 flex justify-between flex-1">
              <div className="text-4xl">{cfg.label}</div>
              <Button
                btnType="controls"
                id={cfg.id}
                onSave={cfg.onSave}
                onDelete={(id) => deleteMutation.mutate({ ruleId: id })}
                type={cfg.type}
                data={cfg.data}
              />
            </div>
          </Card>
        ))}
      </div>
    </article>
  );
};

export default Controls;
