import { ArticleTile, PageLayout, Spacing } from '../../bash-blocks';
import { thinkFlowContent } from '../../compounds/blog/think-flow';

export const ThinkFlow = () => (
  <PageLayout background={thinkFlowContent.background}>
    <Spacing marginBottom="md">
      <ArticleTile {...thinkFlowContent.tileOne} />
    </Spacing>
  </PageLayout>
);
