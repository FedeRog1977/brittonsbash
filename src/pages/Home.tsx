import '../App.css';
import Article from '../bashBlocks/components/Article';
import Tile from '../bashBlocks/components/Tile';
import { articleTestData } from '../data/test/ArticleTestData';
import Background from '../elements/Background';

function Home() {
    return (
        <div>
            <Background text='BrittonsBashRC' />
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
        </div>
    );
}

export default Home;