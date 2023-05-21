import { articleTestData } from '../../../data/test/ArticleTestData';
import Typography from '../../elements/Typography';
import Article from '../Article';
import Tile from '../Tile';

function ArticleStories() {
    return (
        <>
            <Tile type='clear-condensed'>
                <Typography type='t1' fontFamily='sans-serif' content='Article' textAlign='center' paragraphMargins />
            </Tile>
            <Tile type='solid'>
                <Article
                    sections={articleTestData}
                    fontFamily='serif'
                    textAlign='justify'
                />
            </Tile>
        </>
    );
}

export default ArticleStories;