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
        <Background />
        <TypographyStories />
        <FootnoteStories />
        <ArticleStories />
        <ImageSliderStories />
        <DropDownStories />
    </>
)
