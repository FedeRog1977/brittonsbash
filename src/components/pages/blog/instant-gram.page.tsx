import {
    InstantGram as InstantGramComponent,
    instantGramContent,
} from '../../compounds'
import { Background, Footnote } from '../../bash-blocks'

export const InstantGram = () => (
    <>
        <Background type="ig" content="Instant Gram" />
        <InstantGramComponent />
        <Footnote content={instantGramContent[0].content} />
    </>
)
