import { ReactNode } from 'react';
import { ArticleTile, PageLayout } from '../bash-blocks';
import { libraryContent } from '../compounds/library';

export const Library = () => {
  const content: ReactNode[] = [
    <ArticleTile {...libraryContent.tileOne} />,
    <ArticleTile {...libraryContent.tileTwo} />,
    <ArticleTile {...libraryContent.tileThree} />,
  ];

  return (
    <PageLayout background={libraryContent.background}>{content}</PageLayout>
  );
};
