import ArticleTitle from '../UI/ArticleTitle';
import Card from '../UI/Card';
import SettingButton from './SettingButton';
// import type { RuleData, RulesProps } from '@/types/type';

// import { useQuery, useMutation } from '@tanstack/react-query';
// import {
//   getRules,
//   updateRules,
//   deleteRules,
//   createRules,
// } from '@/apis/RulesAxios';

const dummyData = [{}];

const Controls = () => {
  // 테스트 데이터
  const rulesData = {
    ruleName: 'test1',
    sensorId: 1,
    conditionOp: '테스트op',
    threshold: 100,
    actuatorId: 7,
    command: '테스트cd',
    active: true,
  };
  /*
  // 업데이트 데이터
  const updateData = {
    threshold: 150,
  };

  // 규칙 조회 쿼리
  const { data } = useQuery({
    queryKey: ['rulesData'],
    queryFn: () => getRules(),
  });

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
*/
  // const onSave = (data, id) => {
  //   if (dummyData.ruleId) { 실제 데이터로 조건 수정 필요
  //     const newData = {
  //       ...rulesData[ruleId],
  //       ...updateData,
  //     };
  //     updateMutation.mutate({ ruleId: dummyData.ruleId, newData });
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
              id={rulesData.sensorId}
              onSave={() => {
                if (dummyData.length !== 0) console.log('update');
                else console.log('create');
              }}
              onDelete={(id) => console.log('delete id', id)}
              type="water"
              data={5}
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
              data={580}
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
              data={4.9}
            />
          </div>
        </Card>
      </div>
    </article>
  );
};

export default Controls;
