import {
    Article,
    DropDown,
    ImageSlider,
    Spacing,
    Tile,
    Typography,
} from '../../bash-blocks'
import { refactorEvent, useDropDown, useScreenWidth } from '../../../scripts'
import { SportActivityTile } from './sport-activity-tile.component'

export const InstantGramResultTile = ({
    event,
    sportEvent,
    showSportEvent,
}: any) => {
    const { isMobile } = useScreenWidth()
    const { showDropDown, setShowDropDown } = useDropDown()
    const refactoredEvent = refactorEvent({ event, sportEvent, showSportEvent })

    return (
        <Tile type="solid" dense={isMobile && true}>
            <>
                <Spacing mB={15}>
                    <>
                        {refactoredEvent.prefix && (
                            <Typography
                                type="h1"
                                content={
                                    <>
                                        <Typography
                                            content={refactoredEvent.prefix}
                                            inline
                                        />
                                        <Typography content=":" inline />
                                    </>
                                }
                                textAlign="center"
                            />
                        )}
                        {refactoredEvent.names.length > 1 ? (
                            <>
                                {refactoredEvent.names.map(
                                    ({ name, refKey }: any) => (
                                        <Typography
                                            type="h2"
                                            content={
                                                <>
                                                    <Typography
                                                        content={
                                                            <>
                                                                Part&nbsp;
                                                                {refKey}
                                                                &nbsp;&#8212;&nbsp;
                                                            </>
                                                        }
                                                        color="var(--medium-grey)"
                                                        inline
                                                        key={refKey}
                                                    />
                                                    <Typography
                                                        content={<>{name}</>}
                                                        inline
                                                        key={refKey}
                                                    />
                                                </>
                                            }
                                            textAlign="center"
                                        />
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
                    </>
                </Spacing>
                <Spacing mT={15} mB={15}>
                    <Typography
                        type="h3"
                        content={
                            <>
                                <Typography
                                    content={refactoredEvent.startDate}
                                    inline
                                />
                                {refactoredEvent.endDate && (
                                    <>
                                        <Typography
                                            content={<>&nbsp;&#8212;&nbsp;</>}
                                            inline
                                        />
                                        <Typography
                                            content={refactoredEvent.endDate}
                                            inline
                                        />
                                    </>
                                )}
                            </>
                        }
                        color="var(--medium-grey)"
                        textAlign="center"
                    />
                </Spacing>
                <SportActivityTile
                    title={{
                        leftItem: (
                            <>
                                {refactoredEvent.distance}
                                &nbsp;|&nbsp;
                                {refactoredEvent.elevation}
                            </>
                        ),
                        rightItem: <>[{refactoredEvent.time}]</>,
                    }}
                    entries={[
                        {
                            leftItem: refactoredEvent.islands && 'Island(s)',
                            rightItem:
                                refactoredEvent.islands &&
                                refactoredEvent.islands,
                        },
                        {
                            leftItem: refactoredEvent.munros && 'Munro(s)',
                            rightItem:
                                refactoredEvent.munros &&
                                refactoredEvent.munros,
                        },
                        {
                            leftItem:
                                refactoredEvent.munroTops && 'Munro Top(s)',
                            rightItem:
                                refactoredEvent.munroTops &&
                                refactoredEvent.munroTops,
                        },
                        {
                            leftItem: refactoredEvent.corbetts && 'Corbett(s)',
                            rightItem:
                                refactoredEvent.corbetts &&
                                refactoredEvent.corbetts,
                        },
                        {
                            leftItem:
                                refactoredEvent.corbettTops && 'Corbett Top(s)',
                            rightItem:
                                refactoredEvent.corbettTops &&
                                refactoredEvent.corbettTops,
                        },
                        {
                            leftItem: refactoredEvent.grahams && 'Graham(s)',
                            rightItem:
                                refactoredEvent.grahams &&
                                refactoredEvent.grahams,
                        },
                        {
                            leftItem: refactoredEvent.subTwos && 'SubTwo(s)',
                            rightItem:
                                refactoredEvent.subTwos &&
                                refactoredEvent.subTwos,
                        },
                        {
                            leftItem: refactoredEvent.donalds && 'Donald(s)',
                            rightItem:
                                refactoredEvent.donalds &&
                                refactoredEvent.donalds,
                        },
                    ]}
                />
                {refactoredEvent.showSportEvent && (
                    <Spacing
                        mL={isMobile ? 0 : 70}
                        mR={isMobile ? 0 : 70}
                        mT={isMobile ? 7.5 : 15}
                        mB={isMobile ? 7.5 : 15}
                        pL={isMobile ? 7.5 : 150}
                        pR={isMobile ? 7.5 : 150}
                        pT={isMobile ? 7.5 : 15}
                        pB={isMobile ? 7.5 : 15}
                        backgroundColor="var(--lighter-grey)"
                        borderRadius={
                            isMobile ? 'none' : 'var(--corners-small)'
                        }
                    >
                        <>
                            <div>
                                <div className="instant-gram-tile-sport-sub-element left">
                                    <Typography
                                        type="body"
                                        content={
                                            <>
                                                {refactoredEvent.distance}
                                                &nbsp;|&nbsp;
                                                {refactoredEvent.elevation}
                                            </>
                                        }
                                        boldFace={isMobile ? false : true}
                                        inline
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
                                <div>
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
                                            type={
                                                isMobile ? 'body-light' : 'body'
                                            }
                                            content={refactoredEvent.islands}
                                            textAlign="center"
                                            inline
                                        />
                                    </div>
                                </div>
                            )}
                            {refactoredEvent.munros && (
                                <>
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
                                            type={
                                                isMobile ? 'body-light' : 'body'
                                            }
                                            content={refactoredEvent.munros}
                                            inline
                                        />
                                    </div>
                                </>
                            )}
                            {refactoredEvent.munroTops && (
                                <>
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
                                            type={
                                                isMobile ? 'body-light' : 'body'
                                            }
                                            content={refactoredEvent.munroTops}
                                            inline
                                        />
                                    </div>
                                </>
                            )}
                            {refactoredEvent.corbetts && (
                                <>
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
                                            type={
                                                isMobile ? 'body-light' : 'body'
                                            }
                                            content={refactoredEvent.corbetts}
                                            inline
                                        />
                                    </div>
                                </>
                            )}
                            {refactoredEvent.corbettTops && (
                                <>
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
                                            type={
                                                isMobile ? 'body-light' : 'body'
                                            }
                                            content={
                                                refactoredEvent.corbettTops
                                            }
                                            inline
                                        />
                                    </div>
                                </>
                            )}
                            {refactoredEvent.grahams && (
                                <>
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
                                            type={
                                                isMobile ? 'body-light' : 'body'
                                            }
                                            content={refactoredEvent.grahams}
                                            inline
                                        />
                                    </div>
                                </>
                            )}
                            {refactoredEvent.subTwos && (
                                <>
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
                                            type={
                                                isMobile ? 'body-light' : 'body'
                                            }
                                            content={refactoredEvent.subTwos}
                                            inline
                                        />
                                    </div>
                                </>
                            )}
                            {refactoredEvent.donalds && (
                                <>
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
                                            type={
                                                isMobile ? 'body-light' : 'body'
                                            }
                                            content={refactoredEvent.donalds}
                                            inline
                                        />
                                    </div>
                                </>
                            )}
                        </>
                    </Spacing>
                )}
                {refactoredEvent.youthHostels && (
                    <Spacing mL={70} mR={70} mT={15} mB={15}>
                        <Typography
                            type="body"
                            content={
                                <>
                                    <Typography
                                        type="body"
                                        content={<>Youth Hostel(s):&nbsp;</>}
                                        boldFace={isMobile ? false : true}
                                        inline
                                    />
                                    <Typography
                                        type={isMobile ? 'body-light' : 'body'}
                                        content={refactoredEvent.youthHostels}
                                        inline
                                    />
                                </>
                            }
                            textAlign="center"
                        />
                    </Spacing>
                )}
                <Spacing mL={70} mR={70} mT={15} mB={15}>
                    <DropDown
                        backgroundType="regular-clear"
                        func={() => setShowDropDown(!showDropDown)}
                        funcResp={showDropDown}
                    />
                </Spacing>
                {showDropDown && (
                    <Spacing
                        mL={isMobile ? 15 : 70}
                        mR={isMobile ? 15 : 70}
                        mT={isMobile ? 7.5 : 15}
                        mB={isMobile ? 7.5 : 15}
                    >
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
                    </Spacing>
                )}
                <Spacing
                    mL={isMobile ? 0 : 70}
                    mR={isMobile ? 0 : 70}
                    mT={isMobile ? 7.5 : 15}
                    backgroundColor={
                        isMobile ? 'var(--white)' : 'var(--lighter-grey)'
                    }
                    borderRadius={isMobile ? 'none' : 'var(--corners-small)'}
                >
                    <ImageSlider slides={refactoredEvent.images} />
                </Spacing>
            </>
        </Tile>
    )
}
