import { ReactNode } from 'react';
import { ArticleTile, PageLayout, TitleTile } from '../bash-blocks';
import { employmentContent } from '../compounds/employment';

export const Employment = () => {
  const content: ReactNode[] = [
    <TitleTile {...employmentContent.tileOne} />,
    <ArticleTile {...employmentContent.tileTwo} />,
    <ArticleTile {...employmentContent.tileThree} />,
  ];

  return (
    <PageLayout background={employmentContent.background}>{content}</PageLayout>
  );
};
