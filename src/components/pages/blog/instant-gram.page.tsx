import { InstantGramSearch } from '../../compounds'
import { instantGramContent } from '../../../data'
import { Background, Footnote } from '../../bash-blocks'

export const InstantGram = () => (
    <div>
        <Background
            content="Instant Gram"
            className="background-text background-text-instant-gram"
        />
        <InstantGramSearch />
        <Footnote content={instantGramContent[0].content} />
    </div>
)
