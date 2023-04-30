import Button from "../../../bashBlocks/elements/Button";
import Search from "../../../bashBlocks/elements/Search";
import InstantGramSearchList from '../../../elements/blog/instant-gram/InstantGramSearchList'
import { eventData } from "../../../data/general/Events";
import './styles/InstantGramSearchTile.css'
import { useState } from "react";
import Tile from "../../../bashBlocks/components/Tile";
import Typography from "../../../bashBlocks/elements/Typography";
import DropDown from "../../../bashBlocks/components/DropDown";

const InstantGramSearchTile = ({ funcSelect, funcInput, funcButton }: any) => {
    const [showDropDown, setShowDropDown] = useState(false);

    const handleClick = () => {
        if (showDropDown === false) {
            setShowDropDown(true);
        } else {
            setShowDropDown(false);
        }
    }

    return (
        <Tile
            type='solid'
            content={
                <>
                    <div>
                        <Search className='instant-gram-search' func={funcInput} content='Search All Events' />
                        <Button
                            className='instant-gram-search'
                            func={funcButton}
                            content={
                                <Typography
                                    type='h4'
                                    content='Search'
                                    color='#FFFFFF'
                                />
                            }
                        />
                        <DropDown className='regular' func={handleClick} funcResp={showDropDown} />
                    </div>
                    {showDropDown &&
                        <>
                            <InstantGramSearchList func={funcSelect} items={eventData[2023]} year='2023' />
                            <InstantGramSearchList func={funcSelect} items={eventData[2022]} year='2022' />
                            <InstantGramSearchList func={funcSelect} items={eventData[2021]} year='2021' />
                            <InstantGramSearchList func={funcSelect} items={eventData[2020]} year='2020' />
                        </>
                    }
                </>
            }
        />
    )
};

export default InstantGramSearchTile;