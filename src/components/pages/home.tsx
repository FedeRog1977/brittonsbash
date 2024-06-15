import { ArticleTile, ImageTile, PageLayout } from '../bash-blocks';
import { homeContent } from '../compounds';

export const Home = () => (
  <PageLayout background={homeContent.background}>
    <ImageTile {...homeContent.tileOne} />
    <ArticleTile {...homeContent.tileTwo} />
  </PageLayout>
);
