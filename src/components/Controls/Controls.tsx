import ArticleTitle from '../UI/ArticleTitle';
import Card from '../UI/Card';
import SettingButton from './SettingButton';
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
  const rulesData = [
    {
      ruleName: 'water',
      sensorId: 1,
      conditionOp: '테스트op',
      threshold: 100,
      actuatorId: 7,
      command: '테스트cd',
      active: true,
    },
    {
      ruleName: 'illuminance',
      sensorId: 2,
      conditionOp: '조도 테스트',
      threshold: 600,
      actuatorId: 8,
      command: '조도 테스트',
      active: true,
    },
    {
      ruleName: 'pH',
      sensorId: 3,
      conditionOp: 'pH 테스트',
      threshold: 5.6,
      actuatorId: 9,
      command: 'pH 테스트',
      active: true,
    },
  ];

  const water = rulesData.filter((item) => item.ruleName === 'water');
  const illuminance = rulesData.filter(
    (item) => item.ruleName === 'illuminance'
  );
  const pH = rulesData.filter((item) => item.ruleName === 'pH');
  console.log('물제어', water, illuminance, pH);

  // 업데이트 데이터
  const updateData = {
    threshold: 150,
  };

  //규칙 조회 쿼리
  const { data } = useQuery({
    queryKey: ['rulesData'],
    queryFn: () => getRules(),
  });
  console.log(data);
  // 규칙 생성 mutation
  const createMutation = useMutation({
    mutationFn: (newData: RuleData) => createRules({ ...newData }),
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

  // const onSave = (data, id) => {
  //   if (water.length !== 0) { 실제 데이터로 조건 수정 필요
  //     const newData = {
  //       ...water,
  //       ...updateData,
  //     };
  //     updateMutation.mutate({ ruleId: id, newData });
  //   } else {
  //     createMutation.mutate(newCreateData);
  //   }
  // };

  // const onDelete={(id) => () => deleteMutation.mutate({ ruleId: id})}

  return (
    <article className="bg-ContentsColor p-45px rounded-contentsCard">
      <ArticleTitle>제어</ArticleTitle>
      <div className="flex flex-col">
        <Card type="controls">
          <div className="m-16 flex justify-between flex-1">
            <div className="text-4xl">수위 제어</div>
            <SettingButton
              id={1}
              onSave={() => {
                if (water.length !== 0) console.log('update');
                else console.log('create');
              }}
              onDelete={(id) => console.log('delete id', id)}
              type="water"
              data={water}
            />
          </div>
        </Card>
        <Card type="controls">
          <div className="m-16 flex justify-between flex-1">
            <div className="text-4xl">조도 제어</div>
            <SettingButton
              id={2}
              onSave={() => {
                if (dummyData.length !== 0) console.log('update');
                else console.log('create');
              }}
              onDelete={(id) => console.log('delete id', id)}
              type="illuminance"
              data={illuminance}
            />
          </div>
        </Card>
        <Card type="controls">
          <div className="m-16 flex justify-between flex-1">
            <div className="text-4xl">pH 제어</div>
            <SettingButton
              id={3}
              onSave={() => {
                if (dummyData.length !== 0) console.log('update');
                else console.log('create');
              }}
              onDelete={(id) => console.log('delete id', id)}
              type="PH"
              data={rulesData.filter((item) => item.ruleName === 'PH')}
            />
          </div>
        </Card>
      </div>
    </article>
  );
};

export default Controls;
