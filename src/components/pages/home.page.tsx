import { ImageTile } from '../bash-blocks'
import { ArticleTile } from '../bash-blocks/blocks/article-tile-temp'
import { PageLayout } from '../bash-blocks/templates'
import { homeContent } from '../compounds'

export const Home = () => (
    <PageLayout background={homeContent.background}>
        <ImageTile {...homeContent.tileOne} />
        <ArticleTile {...homeContent.tileTwo} />
    </PageLayout>
)
