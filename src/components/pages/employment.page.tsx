import { articleTestData } from '../../data'
import { Article, ArticleProps, Background, Tile } from '../bash-blocks'

export const Employment = () => (
    <>
        <Background type="std" content="Employment" />
        <Tile type="solid" top>
            <Article
                sections={articleTestData as ArticleProps['sections']}
                fontFamily="serif"
                textAlign="justify"
            />
        </Tile>
    </>
)
