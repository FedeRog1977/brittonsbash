import { Background } from '../../elements'
import InstantGramSearch from '../../compounds/blog/instant-gram/InstantGramSearch'
import { instantGramContent } from '../../data/page-content/blog/instant-gram.content'
import { Footnote } from '../../bash-blocks'

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
