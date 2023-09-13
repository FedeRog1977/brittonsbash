import { Article, ArticleProps, Tile, Typography } from '..'
import { articleTestData } from '../../../data'

export const ArticleStories = () => (
    <>
        <Tile type="clear">
            <Typography
                type="t1"
                fontFamily="sansSerif"
                content="Article"
                textAlign="center"
            />
        </Tile>
        <Tile type="solid">
            <Article
                sections={articleTestData as ArticleProps['sections']}
                fontFamily="serif"
                textAlign="justify"
            />
        </Tile>
    </>
)
