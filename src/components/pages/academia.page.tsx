import { ArticleTile, Background, TitleTile } from '../bash-blocks'
import { academiaContent } from '../compounds'

export const Academia = () => (
    <>
        <Background type="logo" content="Academia" />
        <TitleTile {...academiaContent.tileOne} />
        <ArticleTile {...academiaContent.tileTwo} />
        <ArticleTile {...academiaContent.tileThree} />
        <ArticleTile {...academiaContent.tileFour} />
        <ArticleTile {...academiaContent.tileFive} />
    </>
)
