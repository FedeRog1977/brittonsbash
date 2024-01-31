import { articleTestData } from '../../../data'
import { Article, ArticleProps, PageLayout, Tile } from '../../bash-blocks'

export const GraphicDesign = () => (
    <PageLayout background={{ content: 'Graphic Design' }}>
        <Tile type="solid" top>
            <Article
                sections={articleTestData as ArticleProps['sections']}
                fontFamily="serif"
                textAlign="justify"
            />
        </Tile>
    </PageLayout>
)
