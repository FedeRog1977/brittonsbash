import {
    ArticleStories,
    DropDownStories,
    FootnoteStories,
    ImageMatrixStories,
    ImageSliderStories,
    ImageStories,
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
        <FootnoteStories />
        <ImageStories />
        <ArticleStories />
        <ImageMatrixStories />
        <ImageSliderStories />
        <DropDownStories />
    </>
)
