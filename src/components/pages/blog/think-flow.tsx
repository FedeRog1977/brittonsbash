import { ArticleTile, PageLayout } from '../../bash-blocks';
import { thinkFlowContent } from '../../compounds/blog/think-flow';

export const ThinkFlow = () => (
  <PageLayout background={thinkFlowContent.background}>
    <ArticleTile {...thinkFlowContent.tileOne} />
  </PageLayout>
);
