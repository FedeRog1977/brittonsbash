import {
    InstantGram as InstantGramComponent,
    instantGramContent,
} from '../../compounds'
import { FootnoteTile, PageLayout } from '../../bash-blocks'

export const InstantGram = () => (
    <PageLayout background={instantGramContent.background}>
        <InstantGramComponent />
        <FootnoteTile {...instantGramContent.tileOne} />
    </PageLayout>
)
