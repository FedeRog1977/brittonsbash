import { ArticleTile, TitleTile } from '../bash-blocks'
import { PageLayout } from '../bash-blocks/templates'
import { employmentContent } from '../compounds/employment'

export const Employment = () => (
    <PageLayout background={employmentContent.background}>
        <TitleTile {...employmentContent.tileOne} />
        <ArticleTile {...employmentContent.tileTwo} />
        <ArticleTile {...employmentContent.tileThree} />
    </PageLayout>
)
