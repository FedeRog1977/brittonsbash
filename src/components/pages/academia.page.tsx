import { ArticleTile, TitleTile } from '../bash-blocks'
import { PageLayout } from '../bash-blocks/templates'
import { academiaContent } from '../compounds'

export const Academia = () => (
    <PageLayout background={academiaContent.background}>
        <TitleTile {...academiaContent.tileOne} />
        <ArticleTile {...academiaContent.tileTwo} />
        <ArticleTile {...academiaContent.tileThree} />
        <ArticleTile {...academiaContent.tileFour} />
        <ArticleTile {...academiaContent.tileFive} />
    </PageLayout>
)
