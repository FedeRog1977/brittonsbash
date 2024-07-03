import { ArticleTile, ImageTile, PageLayout, Spacing } from '../bash-blocks';
import { homeContent } from '../compounds/home';

export const Home = () => (
  <PageLayout background={homeContent.background}>
    <Spacing marginBottom="md">
      <ImageTile {...homeContent.tileOne} />
    </Spacing>

    <Spacing marginBottom="md">
      <ArticleTile {...homeContent.tileTwo} />
    </Spacing>
  </PageLayout>
);
