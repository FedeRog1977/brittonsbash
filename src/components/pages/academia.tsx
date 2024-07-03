import { ArticleTile, PageLayout, Spacing, TitleTile } from '../bash-blocks';
import { academiaContent } from '../compounds/academia';

export const Academia = () => (
  <PageLayout background={academiaContent.background}>
    <TitleTile {...academiaContent.tileOne} />

    <Spacing marginBottom="md">
      <ArticleTile {...academiaContent.tileTwo} />
    </Spacing>

    <Spacing marginBottom="md">
      <ArticleTile {...academiaContent.tileThree} />
    </Spacing>

    <Spacing marginBottom="md">
      <ArticleTile {...academiaContent.tileFour} />
    </Spacing>

    <Spacing marginBottom="md">
      <ArticleTile {...academiaContent.tileFive} />
    </Spacing>
  </PageLayout>
);
