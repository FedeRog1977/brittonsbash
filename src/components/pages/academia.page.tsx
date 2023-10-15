import { articleTestData } from '../../data'
import { Article, ArticleProps, Background, Tile } from '../bash-blocks'

export const Academia = () => (
    <>
        <Background type="std" content="Academia" />
        <Tile type="solid" top>
            <Article
                sections={articleTestData as ArticleProps['sections']}
                fontFamily="serif"
                textAlign="justify"
            />
        </Tile>
    </>
)
