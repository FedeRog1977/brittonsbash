import Button from "../elements/Button";
import Search from "../elements/Search";
import InstantGramSearchList from '../elements/InstantGramSearchList'
import { eventData } from "../../data/Events";
import './styles/InstantGramSearchBar.css'

const InstantGramSearchBar = ({ funcSelect, funcInput, funcButton }: any) => {
    return (
        <div className='instant-gram-search-bar'>
            <InstantGramSearchList className='instant-gram-search' func={funcSelect} items={eventData[2023]} year='2023' />
            <InstantGramSearchList className='instant-gram-search' func={funcSelect} items={eventData[2022]} year='2022' />
            <InstantGramSearchList className='instant-gram-search' func={funcSelect} items={eventData[2021]} year='2021' />
            <InstantGramSearchList className='instant-gram-search' func={funcSelect} items={eventData[2020]} year='2020' />
            <Search className='instant-gram-search' func={funcInput} content='Search All Events' />
            <Button className='instant-gram-search' func={funcButton} content='Search' />
        </div>
    )
};

export default InstantGramSearchBar;