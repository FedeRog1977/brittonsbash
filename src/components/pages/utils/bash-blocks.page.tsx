import {
    ArticleStories,
    ButtonStories,
    FootnoteTileStories,
    ImageMatrixStories,
    ImageSliderStories,
    ImageStories,
    TileStories,
    TypographyStories,
} from '../../bash-blocks'
import { Background } from '../../bash-blocks'

export const BashBlocks = () => (
    <>
        <Background type="logo" content="BashBlocks" />
        <TypographyStories />
        <hr />
        <FootnoteTileStories />
        <hr />
        <ImageStories />
        <hr />
        <ArticleStories />
        <hr />
        <ImageMatrixStories />
        <hr />
        <ImageSliderStories />
        <hr />
        <ButtonStories />
        <hr />
        <TileStories />
    </>
)
