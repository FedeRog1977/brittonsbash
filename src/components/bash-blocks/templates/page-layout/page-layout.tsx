import { FC, ReactNode } from 'react';
import { Footer, Header } from '../../partials';
import { PageBackground, PageBackgroundProps } from '../page-background';

export type PageLayoutProps = {
  background?: PageBackgroundProps;
  children: ReactNode;
};

export const PageLayout: FC<PageLayoutProps> = ({ background, children }) => (
  <>
    <Header />
    {background ? <PageBackground {...background} /> : null}
    {children}
    <Footer />
  </>
);
