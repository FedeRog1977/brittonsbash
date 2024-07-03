import { ArticleTile, PageLayout, Spacing, TitleTile } from '../bash-blocks';
import { employmentContent } from '../compounds/employment';

export const Employment = () => (
  <PageLayout background={employmentContent.background}>
    <TitleTile {...employmentContent.tileOne} />

    <Spacing marginBottom="md">
      <ArticleTile {...employmentContent.tileTwo} />
    </Spacing>

    <Spacing marginBottom="md">
      <ArticleTile {...employmentContent.tileThree} />
    </Spacing>
  </PageLayout>
);
