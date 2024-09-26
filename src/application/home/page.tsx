import { ReactNode } from 'react';
import { ArticleTile, ImageTile, PageLayout } from '../../components';
import { homeContent } from './content/home-content';

export const Home = () => {
  const content: ReactNode[] = [
    <ImageTile {...homeContent.tileOne} />,
    <ArticleTile {...homeContent.tileTwo} />,
  ];

  return <PageLayout background={homeContent.background}>{content}</PageLayout>;
};
