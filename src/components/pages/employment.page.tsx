import { articleTestData } from '../../data'
import { Article, ArticleProps, Tile } from '../bash-blocks'
import { PageLayout } from '../bash-blocks/templates'

export const Employment = () => (
    <PageLayout background={{ content: 'Employment' }}>
        <Tile type="solid" top>
            <Article
                sections={articleTestData as ArticleProps['sections']}
                fontFamily="serif"
                textAlign="justify"
            />
        </Tile>
    </PageLayout>
)
