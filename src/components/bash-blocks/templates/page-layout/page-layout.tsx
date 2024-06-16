import { FC, ReactNode } from 'react';
import { Footer } from '../../partials';
import { PageBackground, PageBackgroundProps } from '../page-background';

export type PageLayoutProps = {
  background: PageBackgroundProps;
  children: ReactNode;
};

export const PageLayout: FC<PageLayoutProps> = ({ background, children }) => (
  <>
    <PageBackground {...background} />
    {children}
    <Footer />
  </>
);
