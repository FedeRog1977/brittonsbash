import { ReactNode } from 'react';
import { PageLayout, Tile } from '../../../components';

export const Allroad = () => {
  const content: ReactNode[] = [
    <Tile type="solid">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Tile>,
  ];

  return (
    <PageLayout background={{ type: 'audi', content: 'allroad quattro' }}>{content}</PageLayout>
  );
};
