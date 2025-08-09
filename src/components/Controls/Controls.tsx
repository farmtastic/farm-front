import ArticleTitle from '../UI/ArticleTitle';
import Card from '../UI/Card';
import Button from '@/components/UI/Button';
import type { RuleData, RulesProps } from '@/types/type';

import { useQuery, useMutation } from '@tanstack/react-query';
import {
  getRules,
  updateRules,
  deleteRules,
  createRules,
} from '@/apis/RulesAxios';

const Controls = () => {
  //규칙 조회 쿼리
  const { data, refetch } = useQuery({
    queryKey: ['rulesData'],
    queryFn: () => getRules(),
  });

  const rules = data ?? [];
  const getRulesByName = (name: string) =>
    rules.filter((item: RuleData) => item.ruleName === name);
  const LIGHT = getRulesByName('조명 자동 조절');
  const PH = getRulesByName('ph 자동 조절');

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

  const onSave = (data: number, id: number, type: string) => {
    const unit = type === 'LIGHT' ? LIGHT : PH;
    if (unit.length !== 0) {
      const newData = {
        ...unit[0],
        threshold: data,
      };
      updateMutation.mutate({ ruleId: id, newData });
    } else {
      const unitId = type === 'LIGHT' ? 3 : 4;
      const newCreateData = {
        ruleName: type === 'LIGHT' ? '조명 자동 조절' : 'ph 자동 조절',
        sensorId: unitId,
        threshold: data,
        actuatorId: type === 'LIGHT' ? 5 : 6,
        active: true,
      };
      createMutation.mutate(newCreateData);
    }
  };

  const onDelete = (id: number) => deleteMutation.mutate({ ruleId: id });
  const controlConfigs = [
    {
      label: '조도 제어',
      type: 'LIGHT',
      id: LIGHT[0]?.ruleId,
      data: LIGHT,
      onSave: (data: number, id: number, type: string) => {
        onSave(data, id, type);
      },
      onDelete: (id: number) => {
        onDelete(id);
      },
    },
    {
      label: 'PH 제어',
      type: 'PH',
      id: PH[0]?.ruleId,
      data: PH,
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
      <div className="flex flex-col my-contentsCard gap-9">
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
