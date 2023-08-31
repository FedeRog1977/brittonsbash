import {
    ArticleStories,
    ButtonStories,
    FootnoteStories,
    ImageMatrixStories,
    ImageSliderStories,
    ImageStories,
    TileStories,
    TypographyStories,
} from '../../bash-blocks'
import { Background } from '../../bash-blocks'

export const BashBlocks = () => (
    <>
        <Background
            content="BashBlocks"
            className="background-text background-text-standard"
        />
        <TypographyStories />
        <hr />
        <FootnoteStories />
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
