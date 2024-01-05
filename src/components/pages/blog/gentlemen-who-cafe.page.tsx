import { articleTestData } from '../../../data'
import { Article, ArticleProps, Tile } from '../../bash-blocks'
import { PageLayout } from '../../bash-blocks/templates'

export const GentlemenWhoCafe = () => (
    <PageLayout background={{ content: 'Gentlemen Who Cafe' }}>
        <Tile type="solid" top>
            <Article
                sections={articleTestData as ArticleProps['sections']}
                fontFamily="serif"
                textAlign="justify"
            />
        </Tile>
    </PageLayout>
)
