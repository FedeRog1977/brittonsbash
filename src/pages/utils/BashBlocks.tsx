import '../../App.css';
import ArticleStories from '../../bashBlocks/components/stories/ArticleStories';
import TypographyStories from '../../bashBlocks/elements/stories/TypographyStories';
import Background from '../../elements/Background';

function BashBlocks() {
    return (
        <>
            <Background />
            <TypographyStories />
            <ArticleStories />
        </>
    );
}

export default BashBlocks;