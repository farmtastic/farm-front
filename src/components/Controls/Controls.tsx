import ArticleTitle from '../UI/ArticleTitle';
import Card from '../UI/Card';
import SettingButton from './SettingButton';

const Controls = () => {
  return (
    <article className="bg-ContentsColor p-45px rounded-contentsCard">
      <ArticleTitle>제어</ArticleTitle>
      <div className="flex flex-col">
        <Card type="controls">
          <div className="m-16 flex justify-between flex-1">
            <div className="text-4xl">수위 제어</div>
            <SettingButton />
          </div>
        </Card>
        <Card type="controls">
          <div className="m-16 flex justify-between flex-1">
            <div className="text-4xl">조도 제어</div>
            <SettingButton />
          </div>
        </Card>
        <Card type="controls">
          <div className="m-16 flex justify-between flex-1">
            <div className="text-4xl">pH 제어</div>
            <SettingButton />
          </div>
        </Card>
      </div>
    </article>
  );
};

export default Controls;
