import { articleTestData } from '../../../data'
import { Article, ArticleProps, PageLayout, Tile } from '../../bash-blocks'

export const BrittonsFoodRC = () => (
    <PageLayout background={{ content: 'BrittonsFoodRC' }}>
        <Tile type="solid">
            <Article
                sections={articleTestData as ArticleProps['sections']}
                fontFamily="serif"
                textAlign="justify"
            />
        </Tile>
    </PageLayout>
)
