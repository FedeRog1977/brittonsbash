import { articleTestData } from '../../../data'
import { Article, ArticleProps, PageLayout, Tile } from '../../bash-blocks'

export const Allroad = () => (
    <PageLayout background={{ type: 'audi', content: 'allroad quattro' }}>
        <Tile type="solid" top>
            <Article
                sections={articleTestData as ArticleProps['sections']}
                fontFamily="serif"
                textAlign="justify"
            />
        </Tile>
    </PageLayout>
)
