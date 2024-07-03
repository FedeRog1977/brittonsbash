import { ArticleTile, PageLayout, Spacing } from '../bash-blocks';
import { libraryContent } from '../compounds/library';

export const Library = () => (
  <PageLayout background={libraryContent.background}>
    <Spacing marginBottom="md">
      <ArticleTile {...libraryContent.tileOne} />
    </Spacing>

    <Spacing marginBottom="md">
      <ArticleTile {...libraryContent.tileTwo} />
    </Spacing>

    <Spacing marginBottom="md">
      <ArticleTile {...libraryContent.tileThree} />
    </Spacing>
  </PageLayout>
);
