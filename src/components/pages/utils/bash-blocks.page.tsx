import {
    ArticleStories,
    DropDownStories,
    FootnoteStories,
    ImageSliderStories,
    TypographyStories,
} from '../../bash-blocks'
import { Background } from '../../elements'

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
