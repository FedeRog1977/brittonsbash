import { useState } from 'react'
import ImageSlider from '../../../bashBlocks/components/ImageSlider'
import Typography from '../../../bashBlocks/elements/Typography'
import './styles/InstantGramTile.css'
import Article from '../../../bashBlocks/components/Article'
import Tile from '../../../bashBlocks/components/Tile'
import refactorEvent from '../../../scripts/compilers/refactorEvent'
import DropDown from '../../../bashBlocks/components/DropDown'
import { useMobile } from '../../../scripts/display/useMobile'

const InstantGramResultTile = ({ event, sportEvent, showSportEvent }: any) => {
    const isMobile = useMobile()

    const refactoredEvent = refactorEvent({ event, sportEvent, showSportEvent })

    const [showDropDown, setShowDropDown] = useState(false)

    const handleClick = () => {
        if (showDropDown === false) {
            setShowDropDown(true)
        } else {
            setShowDropDown(false)
        }
    }

    return (
        <Tile type="solid" dense={isMobile && true}>
            <>
                <div className="instant-gram-tile-title">
                    {refactoredEvent[0].prefix && (
                        <>
                            <Typography
                                type="h1"
                                content={refactoredEvent[0].prefix}
                                inline
                            />
                            <Typography type="h1" content=":" inline />
                        </>
                    )}
                    {refactoredEvent[0].names.length > 1 ? (
                        <>
                            {refactoredEvent[0].names.map(
                                ({ name, refKey }: any) => (
                                    <div>
                                        <Typography
                                            type="h2"
                                            content={
                                                <>
                                                    Part{refKey}
                                                    &nbsp;&#8212;&nbsp;
                                                </>
                                            }
                                            color="#585858"
                                            inline
                                            refKey={refKey}
                                        />
                                        <Typography
                                            type="h2"
                                            content={<>{name}</>}
                                            inline
                                            refKey={refKey}
                                        />
                                    </div>
                                )
                            )}
                        </>
                    ) : (
                        <Typography
                            type={refactoredEvent[0].prefix ? 'h2' : 'h1'}
                            content={refactoredEvent[0].names[0].name}
                            textAlign="center"
                        />
                    )}
                </div>
                <div className="instant-gram-tile-title">
                    <Typography
                        type="h3"
                        content={refactoredEvent[0].startDate}
                        textAlign="left"
                        color="#585858"
                        inline
                    />
                    {refactoredEvent[0].endDate && (
                        <>
                            <Typography
                                type="h3"
                                content={<>&nbsp;&#8212;&nbsp;</>}
                                textAlign="left"
                                color="#585858"
                                inline
                            />
                            <Typography
                                type="h3"
                                content={refactoredEvent[0].endDate}
                                textAlign="left"
                                color="#585858"
                                inline
                            />
                        </>
                    )}
                </div>
                {refactoredEvent[0].showSportEvent && (
                    <div className="instant-gram-tile-sport">
                        <div>
                            <div className="instant-gram-tile-sport-sub-element left">
                                <Typography
                                    type="body"
                                    content={refactoredEvent[0].sportDist}
                                    boldFace
                                    inline
                                    mR="5px"
                                />
                                <Typography
                                    type="body"
                                    content={refactoredEvent[0].sportElev}
                                    boldFace
                                    inline
                                    mL="5px"
                                />
                            </div>
                            <div className="instant-gram-tile-sport-sub-element right">
                                <Typography
                                    type="body"
                                    content={
                                        <>[{refactoredEvent[0].sportTime}]</>
                                    }
                                    boldFace
                                    inline
                                />
                            </div>
                        </div>
                        {refactoredEvent[0].sportIslands && (
                            <div className="instant-gram-tile-sport-element">
                                <div className="instant-gram-tile-sport-sub-element left">
                                    <Typography
                                        type="body"
                                        content="Island(s): "
                                        textAlign="center"
                                        boldFace
                                        inline
                                    />
                                </div>
                                <div className="instant-gram-tile-sport-sub-element right">
                                    <Typography
                                        type="body"
                                        content={
                                            refactoredEvent[0].sportIslands
                                        }
                                        textAlign="center"
                                        inline
                                    />
                                </div>
                            </div>
                        )}
                        {refactoredEvent[0].sportMunros && (
                            <div className="instant-gram-tile-sport-element">
                                <div className="instant-gram-tile-sport-sub-element left">
                                    <Typography
                                        type="body"
                                        content="Munro(s)"
                                        boldFace
                                        inline
                                    />
                                </div>
                                <div className="instant-gram-tile-sport-sub-element right">
                                    <Typography
                                        type="body"
                                        content={refactoredEvent[0].sportMunros}
                                        inline
                                    />
                                </div>
                            </div>
                        )}
                        {refactoredEvent[0].sportMunroTops && (
                            <div className="instant-gram-tile-sport-element">
                                <div className="instant-gram-tile-sport-sub-element left">
                                    <Typography
                                        type="body"
                                        content="Munro Top(s)"
                                        boldFace
                                        inline
                                    />
                                </div>
                                <div className="instant-gram-tile-sport-sub-element right">
                                    <Typography
                                        type="body"
                                        content={
                                            refactoredEvent[0].sportMunroTops
                                        }
                                        inline
                                    />
                                </div>
                            </div>
                        )}
                        {refactoredEvent[0].sportCorbetts && (
                            <div className="instant-gram-tile-sport-element">
                                <div className="instant-gram-tile-sport-sub-element left">
                                    <Typography
                                        type="body"
                                        content="Corbett(s)"
                                        boldFace
                                        inline
                                    />
                                </div>
                                <div className="instant-gram-tile-sport-sub-element right">
                                    <Typography
                                        type="body"
                                        content={
                                            refactoredEvent[0].sportCorbetts
                                        }
                                        inline
                                    />
                                </div>
                            </div>
                        )}
                        {refactoredEvent[0].sportCorbettTops && (
                            <div className="instant-gram-tile-sport-element">
                                <div className="instant-gram-tile-sport-sub-element left">
                                    <Typography
                                        type="body"
                                        content="Corbett Top(s)"
                                        boldFace
                                        inline
                                    />
                                </div>
                                <div className="instant-gram-tile-sport-sub-element right">
                                    <Typography
                                        type="body"
                                        content={
                                            refactoredEvent[0].sportCorbettTops
                                        }
                                        inline
                                    />
                                </div>
                            </div>
                        )}
                        {refactoredEvent[0].sportGrahams && (
                            <div className="instant-gram-tile-sport-element">
                                <div className="instant-gram-tile-sport-sub-element left">
                                    <Typography
                                        type="body"
                                        content="Graham(s)"
                                        boldFace
                                        inline
                                    />
                                </div>
                                <div className="instant-gram-tile-sport-sub-element right">
                                    <Typography
                                        type="body"
                                        content={
                                            refactoredEvent[0].sportGrahams
                                        }
                                        inline
                                    />
                                </div>
                            </div>
                        )}
                        {refactoredEvent[0].sportSubTwos && (
                            <div className="instant-gram-tile-sport-element">
                                <div className="instant-gram-tile-sport-sub-element left">
                                    <Typography
                                        type="body"
                                        content="Sub 2000(s)"
                                        boldFace
                                        inline
                                    />
                                </div>
                                <div className="instant-gram-tile-sport-sub-element right">
                                    <Typography
                                        type="body"
                                        content={
                                            refactoredEvent[0].sportSubTwos
                                        }
                                        inline
                                    />
                                </div>
                            </div>
                        )}
                        {refactoredEvent[0].sportDonalds && (
                            <div className="instant-gram-tile-sport-element">
                                <div className="instant-gram-tile-sport-sub-element left">
                                    <Typography
                                        type="body"
                                        content="Donald(s)"
                                        boldFace
                                        inline
                                    />
                                </div>
                                <div className="instant-gram-tile-sport-sub-element right">
                                    <Typography
                                        type="body"
                                        content={
                                            refactoredEvent[0].sportDonalds
                                        }
                                        inline
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                )}
                {refactoredEvent[0].youthHostels && (
                    <div className="instant-gram-tile-body">
                        <Typography
                            type="body"
                            content={
                                <>
                                    <Typography
                                        type="body"
                                        content="Youth Hostel(s): "
                                        boldFace
                                        inline
                                    />
                                    <Typography
                                        type="body"
                                        content={
                                            refactoredEvent[0].youthHostels
                                        }
                                        inline
                                    />
                                </>
                            }
                            textAlign="center"
                        />
                    </div>
                )}
                <div className="instant-gram-tile-body">
                    <DropDown
                        className="regular"
                        func={handleClick}
                        funcResp={showDropDown}
                    />
                </div>
                {showDropDown && (
                    <div className="instant-gram-tile-body">
                        {Array.isArray(refactoredEvent[0].description) ? (
                            <Article
                                sections={refactoredEvent[0].description}
                                textAlign="justify"
                            />
                        ) : (
                            <Typography
                                type="body"
                                content={refactoredEvent[0].description}
                                textAlign="justify"
                                paragraphMargins
                            />
                        )}
                    </div>
                )}
                <div className="instant-gram-tile-image-slider">
                    <ImageSlider slides={refactoredEvent[0].images} />
                </div>
            </>
        </Tile>
    )
}

export default InstantGramResultTile
