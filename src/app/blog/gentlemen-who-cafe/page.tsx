import { ReactNode } from 'react';
import { ArticleTile, PageLayout } from '../../../components';
import { gentlemenWhoCafeContent } from './content/gentlemen-who-cafe-content';

export const GentlemenWhoCafe = () => {
  const content: ReactNode[] = [<ArticleTile {...gentlemenWhoCafeContent.tileOne} />];

  return <PageLayout background={gentlemenWhoCafeContent.background}>{content}</PageLayout>;
};
