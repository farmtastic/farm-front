import ArticleTitle from '../UI/ArticleTitle';
import Card from '../UI/Card';
import SettingButton from './SettingButton';

const Controls = () => {
  return (
    <article className="m-contentsCard">
      <ArticleTitle>제어</ArticleTitle>
      <div className="flex flex-col justify-between">
        <Card type="controls">
          <div className="flex">
            <div>수위제어</div>
            <SettingButton />
          </div>
        </Card>
        <Card type="controls">조도제어</Card>
        <Card type="controls">pH제어</Card>
      </div>
    </article>
  );
};

export default Controls;
