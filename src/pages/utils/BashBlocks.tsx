import '../../App.css';
import ArticleStories from '../../bashBlocks/components/stories/ArticleStories';
import DropDownStories from '../../bashBlocks/components/stories/DropDownStories';
import FootnoteStories from '../../bashBlocks/components/stories/FootnoteStories';
import ImageSliderStories from '../../bashBlocks/components/stories/ImageSliderStories';
import OptionStories from '../../bashBlocks/components/stories/OptionStories';
import TypographyStories from '../../bashBlocks/elements/stories/TypographyStories';
import Background from '../../elements/Background';

function BashBlocks() {
    return (
        <>
            <Background />
            <TypographyStories />
            <FootnoteStories />
            <ArticleStories />
            <ImageSliderStories />
            <DropDownStories />
            <OptionStories />
        </>
    );
}

export default BashBlocks;