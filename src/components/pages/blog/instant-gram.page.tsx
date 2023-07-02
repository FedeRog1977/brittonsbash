import { InstantGram as InstantGramComponent } from '../../compounds'
import { instantGramContent } from '../../../data'
import { Background, Footnote } from '../../bash-blocks'

export const InstantGram = () => (
    <>
        <Background
            content="Instant Gram"
            className="background-text background-text-instant-gram"
        />
        <InstantGramComponent />
        <Footnote content={instantGramContent[0].content} />
    </>
)
