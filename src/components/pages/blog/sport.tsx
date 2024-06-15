import { PageLayout } from '../../bash-blocks';
import { Sport as SportComponent } from '../../compounds';

export const Sport = () => (
  <PageLayout background={{ type: 'sport', content: 'Sport' }}>
    <SportComponent />
  </PageLayout>
);
