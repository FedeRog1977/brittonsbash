import { ReactNode } from 'react';
import { ArticleTile, PageLayout } from '../../bash-blocks';
import { thinkFlowContent } from '../../compounds/blog/think-flow';

export const ThinkFlow = () => {
  const content: ReactNode[] = [<ArticleTile {...thinkFlowContent.tileOne} />];

  return (
    <PageLayout background={thinkFlowContent.background}>{content}</PageLayout>
  );
};
