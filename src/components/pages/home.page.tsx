import { ArticleTile, Background } from '../bash-blocks'
import { ImageTile } from '../bash-blocks'
import { homeContent } from '../compounds'

export const Home = () => (
    <>
        <Background type="logo" content="BrittonsBashRC" />
        <ImageTile {...homeContent.tileOne} />
        <ArticleTile {...homeContent.tileTwo} />
        <ArticleTile {...homeContent.tileThree} />
    </>
)
