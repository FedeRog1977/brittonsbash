import { Article, ArticleProps, Tile } from '../bash-blocks'
import { articleTestData } from '../../data'
import { Background } from '../bash-blocks'

export const Home = () => (
    <div>
        <Background text="BrittonsBashRC" />
        <Tile type="solid">
            <Article
                sections={articleTestData as ArticleProps['sections']}
                fontFamily="serif"
                textAlign="justify"
            />
        </Tile>
    </div>
)
