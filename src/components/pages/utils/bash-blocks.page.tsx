import {
    ArticleStories,
    DropDownStories,
    FootnoteStories,
    ImageSliderStories,
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
        <ImageSliderStories />
        <DropDownStories />
    </>
)
