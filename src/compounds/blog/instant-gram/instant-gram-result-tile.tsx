import { useState } from 'react'
import {
    Article,
    DropDown,
    ImageSlider,
    Tile,
    Typography,
} from '../../../bash-blocks'
import './styles/instant-gram-tile.styles.css'
import { refactorEvent, useMobile } from '../../../scripts'

export const InstantGramResultTile = ({
    event,
    sportEvent,
    showSportEvent,
}: any) => {
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
                    {refactoredEvent.prefix && (
                        <>
                            <Typography
                                type="h1"
                                content={refactoredEvent.prefix}
                                inline
                            />
                            <Typography type="h1" content=":" inline />
                        </>
                    )}
                    {refactoredEvent.names.length > 1 ? (
                        <>
                            {refactoredEvent.names.map(
                                ({ name, refKey }: any) => (
                                    <div key={refKey}>
                                        <Typography
                                            type="h2"
                                            content={
                                                <>
                                                    Part&nbsp;{refKey}
                                                    &nbsp;&#8212;&nbsp;
                                                </>
                                            }
                                            color="var(--font-5)"
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
                            type={refactoredEvent.prefix ? 'h2' : 'h1'}
                            content={refactoredEvent.names[0].name}
                            textAlign="center"
                        />
                    )}
                </div>
                <div className="instant-gram-tile-title">
                    <Typography
                        type="h3"
                        content={refactoredEvent.startDate}
                        textAlign="left"
                        color="var(--font-5)"
                        inline
                    />
                    {refactoredEvent.endDate && (
                        <>
                            <Typography
                                type="h3"
                                content={<>&nbsp;&#8212;&nbsp;</>}
                                textAlign="left"
                                color="var(--font-5)"
                                inline
                            />
                            <Typography
                                type="h3"
                                content={refactoredEvent.endDate}
                                textAlign="left"
                                color="var(--font-5)"
                                inline
                            />
                        </>
                    )}
                </div>
                {refactoredEvent.showSportEvent && (
                    <div className="instant-gram-tile-sport">
                        <div>
                            <div className="instant-gram-tile-sport-sub-element left">
                                <Typography
                                    type="body"
                                    content={refactoredEvent.distance}
                                    boldFace={isMobile ? false : true}
                                    inline
                                    mR="5px"
                                />
                                <Typography
                                    type="body"
                                    content={refactoredEvent.elevation}
                                    boldFace={isMobile ? false : true}
                                    inline
                                    mL="5px"
                                />
                            </div>
                            <div className="instant-gram-tile-sport-sub-element right">
                                <Typography
                                    type="body"
                                    content={<>[{refactoredEvent.time}]</>}
                                    boldFace={isMobile ? false : true}
                                    inline
                                />
                            </div>
                        </div>
                        {refactoredEvent.islands && (
                            <div className="instant-gram-tile-sport-element">
                                <div className="instant-gram-tile-sport-sub-element left">
                                    <Typography
                                        type="body"
                                        content="Island(s)"
                                        textAlign="center"
                                        boldFace={isMobile ? false : true}
                                        inline
                                    />
                                </div>
                                <div className="instant-gram-tile-sport-sub-element right">
                                    <Typography
                                        type={isMobile ? 'body-light' : 'body'}
                                        content={refactoredEvent.islands}
                                        textAlign="center"
                                        inline
                                    />
                                </div>
                            </div>
                        )}
                        {refactoredEvent.munros && (
                            <div className="instant-gram-tile-sport-element">
                                <div className="instant-gram-tile-sport-sub-element left">
                                    <Typography
                                        type="body"
                                        content="Munro(s)"
                                        boldFace={isMobile ? false : true}
                                        inline
                                    />
                                </div>
                                <div className="instant-gram-tile-sport-sub-element right">
                                    <Typography
                                        type={isMobile ? 'body-light' : 'body'}
                                        content={refactoredEvent.munros}
                                        inline
                                    />
                                </div>
                            </div>
                        )}
                        {refactoredEvent.munroTops && (
                            <div className="instant-gram-tile-sport-element">
                                <div className="instant-gram-tile-sport-sub-element left">
                                    <Typography
                                        type="body"
                                        content="Munro Top(s)"
                                        boldFace={isMobile ? false : true}
                                        inline
                                    />
                                </div>
                                <div className="instant-gram-tile-sport-sub-element right">
                                    <Typography
                                        type={isMobile ? 'body-light' : 'body'}
                                        content={refactoredEvent.munroTops}
                                        inline
                                    />
                                </div>
                            </div>
                        )}
                        {refactoredEvent.corbetts && (
                            <div className="instant-gram-tile-sport-element">
                                <div className="instant-gram-tile-sport-sub-element left">
                                    <Typography
                                        type="body"
                                        content="Corbett(s)"
                                        boldFace={isMobile ? false : true}
                                        inline
                                    />
                                </div>
                                <div className="instant-gram-tile-sport-sub-element right">
                                    <Typography
                                        type={isMobile ? 'body-light' : 'body'}
                                        content={refactoredEvent.corbetts}
                                        inline
                                    />
                                </div>
                            </div>
                        )}
                        {refactoredEvent.corbettTops && (
                            <div className="instant-gram-tile-sport-element">
                                <div className="instant-gram-tile-sport-sub-element left">
                                    <Typography
                                        type="body"
                                        content="Corbett Top(s)"
                                        boldFace={isMobile ? false : true}
                                        inline
                                    />
                                </div>
                                <div className="instant-gram-tile-sport-sub-element right">
                                    <Typography
                                        type={isMobile ? 'body-light' : 'body'}
                                        content={refactoredEvent.corbettTops}
                                        inline
                                    />
                                </div>
                            </div>
                        )}
                        {refactoredEvent.grahams && (
                            <div className="instant-gram-tile-sport-element">
                                <div className="instant-gram-tile-sport-sub-element left">
                                    <Typography
                                        type="body"
                                        content="Graham(s)"
                                        boldFace={isMobile ? false : true}
                                        inline
                                    />
                                </div>
                                <div className="instant-gram-tile-sport-sub-element right">
                                    <Typography
                                        type={isMobile ? 'body-light' : 'body'}
                                        content={refactoredEvent.grahams}
                                        inline
                                    />
                                </div>
                            </div>
                        )}
                        {refactoredEvent.subTwos && (
                            <div className="instant-gram-tile-sport-element">
                                <div className="instant-gram-tile-sport-sub-element left">
                                    <Typography
                                        type="body"
                                        content="Sub 2000(s)"
                                        boldFace={isMobile ? false : true}
                                        inline
                                    />
                                </div>
                                <div className="instant-gram-tile-sport-sub-element right">
                                    <Typography
                                        type={isMobile ? 'body-light' : 'body'}
                                        content={refactoredEvent.subTwos}
                                        inline
                                    />
                                </div>
                            </div>
                        )}
                        {refactoredEvent.donalds && (
                            <div className="instant-gram-tile-sport-element">
                                <div className="instant-gram-tile-sport-sub-element left">
                                    <Typography
                                        type="body"
                                        content="Donald(s)"
                                        boldFace={isMobile ? false : true}
                                        inline
                                    />
                                </div>
                                <div className="instant-gram-tile-sport-sub-element right">
                                    <Typography
                                        type={isMobile ? 'body-light' : 'body'}
                                        content={refactoredEvent.donalds}
                                        inline
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                )}
                {refactoredEvent.youthHostels && (
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
                                        content={refactoredEvent.youthHostels}
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
                        backgroundType="regular-clear"
                        func={handleClick}
                        funcResp={showDropDown}
                    />
                </div>
                {showDropDown && (
                    <div className="instant-gram-tile-body">
                        {Array.isArray(refactoredEvent.description) ? (
                            <Article
                                sections={refactoredEvent.description}
                                textAlign="justify"
                            />
                        ) : (
                            <Typography
                                type="body"
                                content={refactoredEvent.description}
                                textAlign="justify"
                                paragraphMargins
                            />
                        )}
                    </div>
                )}
                <div className="instant-gram-tile-image-slider">
                    <ImageSlider slides={refactoredEvent.images} />
                </div>
            </>
        </Tile>
    )
}
