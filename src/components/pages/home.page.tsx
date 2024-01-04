import { ArticleTile, Background, ImageTile } from '../bash-blocks'
import { homeContent } from '../compounds'

export const Home = () => (
    <>
        <Background {...homeContent.background} />
        <ImageTile {...homeContent.tileOne} />
        <ArticleTile {...homeContent.tileTwo} />
        <ArticleTile {...homeContent.tileThree} />
    </>
)
