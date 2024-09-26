import { ReactNode } from 'react';
import { PageLayout } from '../../components';

// TODO: style this
export const Error = () => {
  const content: ReactNode[] = [
    <div id="error-page">
      <h1>Dayum!</h1>
      <p>An unexpected error has occurred.</p>
    </div>,
  ];

  return <PageLayout background={{ content: 'Error' }}>{content}</PageLayout>;
};
