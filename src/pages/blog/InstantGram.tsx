import Background from '../../elements/Background'
import InstantGramSearch from '../../components/blog/instant-gram/InstantGramSearch'
import { instantGramContent } from '../../data/page-content/blog/instant-gram/instantGramContent'
import Footnote from '../../bashBlocks/components/Footnote'

function InstantGram() {
    return (
        <div>
            <Background
                content="Instant Gram"
                className="background-text background-text-instant-gram"
            />
            <InstantGramSearch />
            <Footnote content={instantGramContent[0].content} />
        </div>
    )
}

export default InstantGram
