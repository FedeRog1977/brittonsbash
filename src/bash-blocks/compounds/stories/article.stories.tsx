import { articleTestData } from '../../../data'
import { Typography } from '../..'
import { Article, Tile } from '..'

export const ArticleStories = () => (
    <>
        <Tile type="clear-condensed">
            <Typography
                type="t1"
                fontFamily="sans-serif"
                content="Article"
                textAlign="center"
                paragraphMargins
            />
        </Tile>
        <Tile type="solid">
            <Article
                sections={articleTestData}
                fontFamily="serif"
                textAlign="justify"
            />
        </Tile>
    </>
)
