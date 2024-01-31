import { articleTestData } from '../../../data'
import { Article, ArticleProps, PageLayout, Tile } from '../../bash-blocks'

export const FoundingFathers = () => (
    <PageLayout background={{ content: 'Founding Fathers' }}>
        <Tile type="solid" top>
            <Article
                sections={articleTestData as ArticleProps['sections']}
                fontFamily="serif"
                textAlign="justify"
            />
        </Tile>
    </PageLayout>
)
