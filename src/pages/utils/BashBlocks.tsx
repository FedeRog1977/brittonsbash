import ArticleStories from '../../bashBlocks/components/stories/ArticleStories'
import DropDownStories from '../../bashBlocks/components/stories/DropDownStories'
import FootnoteStories from '../../bashBlocks/components/stories/FootnoteStories'
import ImageSliderStories from '../../bashBlocks/components/stories/ImageSliderStories'
import TypographyStories from '../../bashBlocks/elements/stories/TypographyStories'
import Background from '../../elements/Background'

function BashBlocks() {
    return (
        <>
            <Background />
            <TypographyStories />
            <FootnoteStories />
            <ArticleStories />
            <ImageSliderStories />
            <DropDownStories />
        </>
    )
}

export default BashBlocks
