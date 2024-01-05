import {
    InstantGram as InstantGramComponent,
    instantGramContent,
} from '../../compounds'
import { FootnoteTile } from '../../bash-blocks'
import { PageLayout } from '../../bash-blocks/templates'

export const InstantGram = () => (
    <PageLayout background={instantGramContent.background}>
        <InstantGramComponent />
        <FootnoteTile {...instantGramContent.blockOne} />
    </PageLayout>
)
