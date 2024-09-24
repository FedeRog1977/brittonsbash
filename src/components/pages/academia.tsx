import { ReactNode } from 'react';
import { ArticleTile, PageLayout, TitleTile } from '../bash-blocks/index.js';
import { academiaContent } from '../compounds/academia/index.js';

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
