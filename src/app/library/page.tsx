import { ReactNode } from 'react';
import { ArticleTile, PageLayout } from '../../components';
import { libraryContent } from './content/library-content';

export const Library = () => {
  const content: ReactNode[] = [
    <ArticleTile {...libraryContent.tileOne} />,
    <ArticleTile {...libraryContent.tileTwo} />,
    <ArticleTile {...libraryContent.tileThree} />,
    // <ArticleTile {...libraryContent.tileFour} />,
  ];

  return <PageLayout background={libraryContent.background}>{content}</PageLayout>;
};
