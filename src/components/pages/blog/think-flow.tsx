import { ReactNode } from 'react';
import { ArticleTile, PageLayout } from '../../bash-blocks/index.js';
import { thinkFlowContent } from '../../compounds/blog/think-flow/index.js';

export const ThinkFlow = () => {
  const content: ReactNode[] = [<ArticleTile {...thinkFlowContent.tileOne} />];

  return <PageLayout background={thinkFlowContent.background}>{content}</PageLayout>;
};
