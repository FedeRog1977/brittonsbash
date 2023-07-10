import {
    ArticleStories,
    DropDownStories,
    FootnoteStories,
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
        <ArticleStories />
        <ImageStories />
        <ImageSliderStories />
        <DropDownStories />
    </>
)
