import { useEffect, useState } from 'react';
import { Htag, Button, Ptag, Tag, Rating } from '../components';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">Hello NextJS</Htag>
      <Button appearance="primary">Button 1</Button>
      <Button appearance="ghost" arrow="down">
        Button 2
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
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);
