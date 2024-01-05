import { articleTestData } from '../../../data'
import { Article, ArticleProps, Tile } from '../../bash-blocks'
import { PageLayout } from '../../bash-blocks/templates'

export const MiamiVice = () => (
    <PageLayout background={{ type: 'miami', content: 'MIAMI VICE' }}>
        <Tile type="solid" top>
            <Article
                sections={articleTestData as ArticleProps['sections']}
                fontFamily="serif"
                textAlign="justify"
            />
        </Tile>
    </PageLayout>
)
