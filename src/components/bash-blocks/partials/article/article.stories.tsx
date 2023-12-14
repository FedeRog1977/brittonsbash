import { articleTestData } from '../../../../data'
import { Tile, Typography } from '../../basics'
import { Article } from '.'
import { ArticleProps } from '.'

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
