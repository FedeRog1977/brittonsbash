import { useState } from "react";
import ImageSlider from "../../../bashBlocks/components/ImageSlider";
import Typography from "../../../bashBlocks/elements/Typography";
import "./styles/InstantGramTile.css";
import Article from "../../../bashBlocks/components/Article";
import Tile from "../../../bashBlocks/components/Tile";
import refactorEvent from "../../../scripts/blog/instant-gram/refactorEvent";
import DropDown from "../../../bashBlocks/components/DropDown";

const InstantGramResultTile = (
    { event, sportEvent, showSportEvent }: any
) => {
    const refactoredEvent = refactorEvent({ event, sportEvent, showSportEvent });

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
                    <div className='instant-gram-tile-title'>
                        {refactoredEvent[0].eventPrefix &&
                            <>
                                <Typography type='h1' content={refactoredEvent[0].eventPrefix} inline />
                                <Typography type='h1' content=': ' inline />
                            </>
                        }
                        {refactoredEvent[0].eventNames.length > 1 ?
                            <>
                                {refactoredEvent[0].eventNames.map(
                                    ({ name, refKey }: any) => (
                                        <div>
                                            <Typography
                                                type='h2'
                                                content={
                                                    <>Part{' '}{refKey}{' '}&#8212;{' '}</>
                                                }
                                                color='#585858'
                                                inline
                                                refKey={refKey}
                                            />
                                            <Typography
                                                type='h2'
                                                content={
                                                    <>{name}</>
                                                }
                                                inline
                                                refKey={refKey}
                                            />
                                        </div>
                                    )
                                )}
                            </>
                            :
                            <Typography
                                type={refactoredEvent[0].eventPrefix ? 'h2' : 'h1'}
                                content={refactoredEvent[0].eventNames[0].name}
                                textAlign='center'
                            />
                        }
                    </div>
                    <div className='instant-gram-tile-title'>
                        <Typography type='h3' content={refactoredEvent[0].eventStartDate} textAlign='left' color='#585858' inline />
                        {refactoredEvent[0].eventEndDate &&
                            <>
                                <Typography type='h3' content={<>{' '}&#8212;{' '}</>} textAlign='left' color='#585858' inline />
                                <Typography type='h3' content={refactoredEvent[0].eventEndDate} textAlign='left' color='#585858' inline />
                            </>
                        }
                    </div>
                    {refactoredEvent[0].showSportEvent &&
                        <div className='instant-gram-tile-sport'>
                            <div>
                                {/* <Typography type='body' content='Distance: ' textAlign='center' boldFace inline />{' '} */}
                                <Typography type='body' content={refactoredEvent[0].sportDist} textAlign='center' inline />
                                <Typography type='body' content={<>&nbsp;&#124;&nbsp;</>} textAlign='center' inline />
                                {/* <Typography type='body' content='Elevation: ' textAlign='center' boldFace inline />{' '} */}
                                <Typography type='body' content={refactoredEvent[0].sportElev} textAlign='center' inline />
                                <Typography type='body' content={<>&nbsp;&#124;&nbsp;</>} textAlign='center' inline />
                                {/* <Typography type='body' content='Time: ' textAlign='center' boldFace inline />{' '} */}
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
                    {refactoredEvent[0].eventYouthHostels &&
                        <div className='instant-gram-tile-body'>
                            <Typography
                                type='body'
                                content={
                                    <>
                                        <Typography type='body' content='Youth Hostel(s): ' textAlign='left' boldFace inline />
                                        <Typography type='body' content={refactoredEvent[0].eventYouthHostels} textAlign='left' inline />
                                    </>
                                }
                                textAlign='center'
                            />
                        </div>
                    }
                    <div className='instant-gram-tile-body'>
                        <DropDown className='regular' func={handleClick} funcResp={showDropDown} />
                    </div>
                    {showDropDown &&
                        <div className='instant-gram-tile-body'>
                            {Array.isArray(refactoredEvent[0].eventDescription) ?
                                <Article sections={refactoredEvent[0].eventDescription} textAlign='justify' />
                                :
                                <Typography type='body' content={refactoredEvent[0].eventDescription} textAlign='justify' paragraphMargins />
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