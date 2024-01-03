import {
    InstantGram as InstantGramComponent,
    instantGramContent,
} from '../../compounds'
import { Background, FootnoteTile } from '../../bash-blocks'

export const InstantGram = () => (
    <>
        <Background type="ig" content="Instant Gram" />
        <InstantGramComponent />
        <FootnoteTile content={instantGramContent[0].content} />
    </>
)
