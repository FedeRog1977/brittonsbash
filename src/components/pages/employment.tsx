import { ArticleTile, PageLayout, TitleTile } from '../bash-blocks';
import { employmentContent } from '../compounds/employment';

export const Employment = () => (
  <PageLayout background={employmentContent.background}>
    <TitleTile {...employmentContent.tileOne} />
    <ArticleTile {...employmentContent.tileTwo} />
    <ArticleTile {...employmentContent.tileThree} />
  </PageLayout>
);
