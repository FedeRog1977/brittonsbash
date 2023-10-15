import { articleTestData } from '../../../data'
import { Article, ArticleProps, Background, Tile } from '../../bash-blocks'

export const GentlemenWhoCafe = () => (
    <>
        <Background type="std" content="Gentlemen Who Café" />
        <Tile type="solid" top>
            <Article
                sections={articleTestData as ArticleProps['sections']}
                fontFamily="serif"
                textAlign="justify"
            />
        </Tile>
    </>
)
