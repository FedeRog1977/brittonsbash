import { ReactNode } from 'react';
import { ArticleTile, PageLayout } from '../../../components';
import { thinkFlowContent } from './content/think-flow-content';

export const ThinkFlow = () => {
  const content: ReactNode[] = [<ArticleTile {...thinkFlowContent.tileOne} />];

  return <PageLayout background={thinkFlowContent.background}>{content}</PageLayout>;
};
