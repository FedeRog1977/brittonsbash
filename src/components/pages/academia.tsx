import { ReactNode } from 'react';
import { ArticleTile, PageLayout, TitleTile } from '../bash-blocks';
import { academiaContent } from '../compounds/academia';

export const Academia = () => {
  const content: ReactNode[] = [
    <TitleTile {...academiaContent.tileOne} />,
    <ArticleTile {...academiaContent.tileTwo} />,
    <ArticleTile {...academiaContent.tileThree} />,
    <ArticleTile {...academiaContent.tileFour} />,
    <ArticleTile {...academiaContent.tileFive} />,
  ];

  return <PageLayout background={academiaContent.background}>{content}</PageLayout>;
};
