import { articleTestData } from '../../data'
import { Article, ArticleProps, Background, Tile } from '../bash-blocks'

export const Employment = () => (
    <>
        <Background
            content="Employment"
            className="background-text background-text-standard"
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
