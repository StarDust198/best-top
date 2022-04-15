import { Htag, Button, Ptag, Tag } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary">Кнопка</Button>
      <Button appearance="ghost" arrow="down">
        Кнопка2
      </Button>
      <Ptag size="l">Большой интересный обзац хрен пойми о чём</Ptag>
      <Ptag>Средний интересный обзац хрен пойми о чём</Ptag>
      <Ptag size="s">Маленький интересный обзац хрен пойми о чём</Ptag>
      <Tag size="s">qwe</Tag>
      <Tag size="m" color="grey">
        qwe
      </Tag>
      <Tag size="s" color="green">
        asd
      </Tag>
      <Tag size="s" color="red" href={'https://yandex.ru'}>
        asd
      </Tag>
      <Tag size="s" color="primary">
        zxc
      </Tag>
    </>
  );
}
