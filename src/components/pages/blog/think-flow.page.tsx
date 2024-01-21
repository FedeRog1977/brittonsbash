import { ArticleTile } from '../../bash-blocks'
import { PageLayout } from '../../bash-blocks/templates'
import { thinkFlowContent } from '../../compounds/blog/think-flow'

export const ThinkFlow = () => (
    <PageLayout background={thinkFlowContent.background}>
        <ArticleTile {...thinkFlowContent.tileOne} />
    </PageLayout>
)
