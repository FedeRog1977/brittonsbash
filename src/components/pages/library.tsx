import { ReactNode } from 'react';
import { ArticleTile, PageLayout } from '../bash-blocks/index.js';
import { libraryContent } from '../compounds/library/index.js';

export const Library = () => {
  const content: ReactNode[] = [
    <ArticleTile {...libraryContent.tileOne} />,
    <ArticleTile {...libraryContent.tileTwo} />,
    <ArticleTile {...libraryContent.tileThree} />,
    // <ArticleTile {...libraryContent.tileFour} />,
  ];

  return <PageLayout background={libraryContent.background}>{content}</PageLayout>;
};
