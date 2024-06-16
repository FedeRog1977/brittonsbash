import { FootnoteTile, PageLayout } from '../../bash-blocks';
import {
  BrittonsFoodRC as BrittonsFoodRCComponent,
  brittonsFoodRCContent,
} from '../../compounds';

export const BrittonsFoodRC = () => (
  <PageLayout background={{ type: 'calligraphy', content: 'BrittonsFoodRC' }}>
    <BrittonsFoodRCComponent />
    <FootnoteTile {...brittonsFoodRCContent.tileTwo} />
  </PageLayout>
);
