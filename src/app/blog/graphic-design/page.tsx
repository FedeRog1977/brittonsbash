import { ReactNode } from 'react';
import { ArticleTile, PageLayout } from '../../../components';
import { graphicDesignContent } from './content/graphic-design-content';

export const GraphicDesign = () => {
  const content: ReactNode[] = [
    <ArticleTile {...graphicDesignContent.tileOne} />,
    <ArticleTile {...graphicDesignContent.tileTwo} />,
  ];

  return <PageLayout background={graphicDesignContent.background}>{content}</PageLayout>;
};
