import { ReactNode } from 'react';
import { ArticleTile, ImageTile, PageLayout } from '../bash-blocks/index.js';
import { homeContent } from '../compounds/home/index.js';

export const Home = () => {
  const content: ReactNode[] = [
    <ImageTile {...homeContent.tileOne} />,
    <ArticleTile {...homeContent.tileTwo} />,
  ];

  return <PageLayout background={homeContent.background}>{content}</PageLayout>;
};
