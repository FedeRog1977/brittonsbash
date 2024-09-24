import { PageLayout } from '../bash-blocks';

// TODO: style this
export const ErrorPage = () => (
  <PageLayout background={{ content: 'Error' }}>
    [
    <div id="error-page">
      <h1>Dayum!</h1>
      <p>An unexpected error has occurred.</p>
    </div>
    ]
  </PageLayout>
);
