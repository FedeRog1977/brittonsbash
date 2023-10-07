import { Article, ArticleProps, Tile } from '../bash-blocks'
import { articleTestData } from '../../data'
import { Background } from '../bash-blocks'

export const Home = () => (
    <>
        <Background
            content="BrittonsBashRC"
            className="background-text background-text-logo"
        />
        <Tile type="solid" top>
            <Article
                sections={articleTestData as ArticleProps['sections']}
                fontFamily="serif"
                textAlign="justify"
            />
        </Tile>
    </>
)
