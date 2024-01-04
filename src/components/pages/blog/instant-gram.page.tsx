import {
    InstantGram as InstantGramComponent,
    instantGramContent,
} from '../../compounds'
import { Background, FootnoteTile } from '../../bash-blocks'

export const InstantGram = () => (
    <>
        <Background {...instantGramContent.background} />
        <InstantGramComponent />
        <FootnoteTile {...instantGramContent.blockOne} />
    </>
)
