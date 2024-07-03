import { PageLayout } from '../bash-blocks';

export const ErrorPage = () => (
  <PageLayout background={{ content: 'Error' }}>
    {/* TODO: style this */}
    <div id="error-page">
      <h1>Dayum!</h1>
      <p>An unexpected error has occurred.</p>
    </div>
  </PageLayout>
);
