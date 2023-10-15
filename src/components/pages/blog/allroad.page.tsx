import { articleTestData } from '../../../data'
import { Article, ArticleProps, Background, Tile } from '../../bash-blocks'

export const Allroad = () => (
    <>
        <Background type="audi" content="allroad quattro" />
        <Tile type="solid" top>
            <Article
                sections={articleTestData as ArticleProps['sections']}
                fontFamily="serif"
                textAlign="justify"
            />
        </Tile>
    </>
)
