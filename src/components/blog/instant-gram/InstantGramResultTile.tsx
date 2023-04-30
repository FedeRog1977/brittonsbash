import { useState } from "react";
import Button from "../../../bashBlocks/elements/Button";
import ImageSlider from "../../../bashBlocks/components/ImageSlider";
import Typography from "../../../bashBlocks/elements/Typography";
import "./styles/InstantGramTile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Article from "../../../bashBlocks/components/Article";
import Tile from "../../../bashBlocks/components/Tile";
import refactorEvent from "../../../scripts/blog/instant-gram/refactorEvent";

const InstantGramResultTile = (
    { event, sportEvent, showSportEvent }: any
) => {
    const refactoredEvent = refactorEvent({ event, sportEvent, showSportEvent });

    const [showDescription, setShowDescription] = useState(false);

    const handleClick = () => {
        if (showDescription === false) {
            setShowDescription(true);
        } else {
            setShowDescription(false);
        }
    }

    return (
        <Tile type='solid'
            content={
                <>
                    <div className='instant-gram-tile-title'>
                        {refactoredEvent[0].eventPrefix &&
                            <>
                                <Typography type='h1' content={refactoredEvent[0].eventPrefix} textAlign='left' inline />
                                <Typography type='h1' content=': ' textAlign='left' inline />
                            </>
                        }
                        <Typography type='h1' content={refactoredEvent[0].eventNames} textAlign='left' inline />
                    </div>
                    <div className='instant-gram-tile-title'>
                        <Typography type='h3' content={refactoredEvent[0].eventStartDate} textAlign='left' inline />
                        {refactoredEvent[0].eventEndDate &&
                            <>
                                <Typography type='h3' content={<>{' '}&#8212;{' '}</>} textAlign='left' inline />
                                <Typography type='h3' content={refactoredEvent[0].eventEndDate} textAlign='left' inline />
                            </>
                        }
                    </div>
                    {refactoredEvent[0].showSportEvent &&
                        <div className='instant-gram-tile-sport'>
                            <div>
                                <Typography type='body' content='Distance: ' textAlign='center' boldFace inline />{' '}
                                <Typography type='body' content={refactoredEvent[0].sportDist} textAlign='center' inline />
                                <Typography type='body' content={<>&nbsp;&#124;&nbsp;</>} textAlign='center' inline />
                                <Typography type='body' content='Elevation: ' textAlign='center' boldFace inline />{' '}
                                <Typography type='body' content={refactoredEvent[0].sportElev} textAlign='center' inline />
                                <Typography type='body' content={<>&nbsp;&#124;&nbsp;</>} textAlign='center' inline />
                                <Typography type='body' content='Time: ' textAlign='center' boldFace inline />{' '}
                                <Typography type='body' content={refactoredEvent[0].sportTime} textAlign='center' inline />
                            </div>
                            {refactoredEvent[0].sportIslands &&
                                <div className='instant-gram-tile-sport-element'>
                                    <Typography type='body' content='Island(s): ' textAlign='center' boldFace inline />
                                    <Typography type='body' content={refactoredEvent[0].sportIslands} textAlign='center' inline />
                                </div>
                            }
                            {refactoredEvent[0].sportMunros &&
                                <div className='instant-gram-tile-sport-element'>
                                    <Typography type='body' content='Munro(s): ' textAlign='center' boldFace inline />
                                    <Typography type='body' content={refactoredEvent[0].sportMunros} textAlign='center' inline />
                                </div>
                            }
                            {refactoredEvent[0].sportMunroTops &&
                                <div className='instant-gram-tile-sport-element'>
                                    <Typography type='body' content='Munro Top(s): ' textAlign='center' boldFace inline />
                                    <Typography type='body' content={refactoredEvent[0].sportMunroTops} textAlign='center' inline />
                                </div>
                            }
                            {refactoredEvent[0].sportCorbetts &&
                                <div className='instant-gram-tile-sport-element'>
                                    <Typography type='body' content='Corbett(s): ' textAlign='center' boldFace inline />
                                    <Typography type='body' content={refactoredEvent[0].sportCorbetts} textAlign='center' inline />
                                </div>
                            }
                            {refactoredEvent[0].sportCorbettTops &&
                                <div className='instant-gram-tile-sport-element'>
                                    <Typography type='body' content='Corbett Top(s): ' textAlign='center' boldFace inline />
                                    <Typography type='body' content={refactoredEvent[0].sportCorbettTops} textAlign='center' inline />
                                </div>
                            }
                            {refactoredEvent[0].sportGrahams &&
                                <div className='instant-gram-tile-sport-element'>
                                    <Typography type='body' content='Graham(s): ' textAlign='center' boldFace inline />
                                    <Typography type='body' content={refactoredEvent[0].sportGrahams} textAlign='center' inline />
                                </div>
                            }
                            {refactoredEvent[0].sportSubTwos &&
                                <div className='instant-gram-tile-sport-element'>
                                    <Typography type='body' content='Sub 2000(s): ' textAlign='center' boldFace inline />
                                    <Typography type='body' content={refactoredEvent[0].sportSubTwos} textAlign='center' inline />
                                </div>
                            }
                            {refactoredEvent[0].sportDonalds &&
                                <div className='instant-gram-tile-sport-element'>
                                    <Typography type='body' content='Donald(s): ' textAlign='center' boldFace inline />
                                    <Typography type='body' content={refactoredEvent[0].sportDonalds} textAlign='center' inline />
                                </div>
                            }
                        </div>
                    }
                    {refactoredEvent[0].eventYoutHostels &&
                        <div className='instant-gram-tile-body'>
                            <Typography
                                type='body'
                                content={
                                    <>
                                        <Typography type='body' content='Youth Hostel(s): ' textAlign='left' boldFace inline />
                                        <Typography type='body' content={refactoredEvent[0].eventYoutHostels} textAlign='left' inline />
                                    </>
                                }
                                textAlign='center'
                            />
                        </div>
                    }
                    <div className='instant-gram-tile-body'>
                        <Button
                            className='instant-gram-expand'
                            func={handleClick}
                            content={
                                <Typography
                                    type='h4'
                                    content={
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    }
                                />
                            }
                        />
                    </div>
                    {showDescription &&
                        <div className='instant-gram-tile-body'>
                            {Array.isArray(refactoredEvent[0].eventDescription) ?
                                <Article sections={refactoredEvent[0].eventDescription} textAlign='justify' />
                                :
                                <Typography type='body' content={refactoredEvent[0].eventDescription} textAlign='justify' />
                            }
                        </div>
                    }
                    <div className='instant-gram-tile-body'>
                        <ImageSlider slides={refactoredEvent[0].eventImages} />
                    </div>
                </>
            }
        />
    )
}

export default InstantGramResultTile;