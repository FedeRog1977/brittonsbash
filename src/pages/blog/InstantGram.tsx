import '../../App.css';
import Background from '../../elements/page/Background';
import InstantGramSearch from '../../components/blog/instant-gram/InstantGramSearch';

function InstantGram() {
    return (
        <div>
            <Background content={"Instant Gram"} className='background-text-instant-gram' />
            <InstantGramSearch />
        </div>
    );
}

export default InstantGram;