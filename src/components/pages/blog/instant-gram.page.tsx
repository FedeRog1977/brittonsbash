import { InstantGram as InstantGramComponent } from '../../compounds'
import { instantGramContent } from '../../../data'
import { Background, Footnote } from '../../bash-blocks'

export const InstantGram = () => (
    <>
        <Background type="ig" content="Instant Gram" />
        <InstantGramComponent />
        <Footnote content={instantGramContent[0].content} />
    </>
)
