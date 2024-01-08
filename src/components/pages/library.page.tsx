import { ArticleTile } from '../bash-blocks'
import { PageLayout } from '../bash-blocks/templates'
import { libraryContent } from '../compounds/library'

export const Library = () => (
    <PageLayout background={libraryContent.background}>
        <ArticleTile {...libraryContent.tileOne} />
        <ArticleTile {...libraryContent.tileTwo} />
        <ArticleTile {...libraryContent.tileThree} />
    </PageLayout>
)
