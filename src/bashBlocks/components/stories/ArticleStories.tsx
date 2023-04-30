import { articleTestData } from '../../../data/test/ArticleTestData';
import Typography from '../../elements/Typography';
import Article from '../Article';
import Tile from '../Tile';

function ArticleStories() {
    return (
        <>
            <Tile
                type='clear-condensed'
                content={
                    <Typography type='t1' fontFamily='sans-serif' content='Article' textAlign='center' paragraphMargins />
                }
            />
            <Tile
                type='solid'
                content={
                    <Article
                        sections={articleTestData}
                        fontFamily='serif'
                        textAlign='justify'
                    />
                }
            />
        </>
    );
}

export default ArticleStories;