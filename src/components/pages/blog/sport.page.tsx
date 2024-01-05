import { PageLayout } from '../../bash-blocks/templates'
import { Sport as SportComponent } from '../../compounds'

export const Sport = () => (
    <PageLayout background={{ type: 'sport', content: 'Sport' }}>
        <SportComponent />
    </PageLayout>
)
