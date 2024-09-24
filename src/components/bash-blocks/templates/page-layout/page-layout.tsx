import { FC, ReactNode } from 'react';
import { Footer, Header } from '../../partials';
import { PageBackground, PageBackgroundProps } from '../page-background';
import { Spacing } from '../../basics';

export type PageLayoutProps = {
  background?: PageBackgroundProps;
  children: ReactNode[];
};

export const PageLayout: FC<PageLayoutProps> = ({ background, children }) => (
  <>
    <Header />
    {background ? <PageBackground {...background} /> : null}
    <Spacing marginTop="md" marginBottom="md">
      {children[0]}
    </Spacing>
    {children.slice(1, children.length).map((child) => (
      <Spacing marginBottom="md">{child}</Spacing>
    ))}
    <Footer />
  </>
);
