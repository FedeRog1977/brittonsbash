import {
    Article,
    Button,
    ImageSlider,
    Spacing,
    Tile,
    Typography,
} from '../../bash-blocks'
import { refactorEvent, useDropDown, useScreenWidth } from '../../../scripts'
import { ActivityTile } from '../../bash-blocks'
import { InstantGramResultTileProps } from '..'

export const InstantGramResultTile: React.FC<InstantGramResultTileProps> = ({
    ...props
}: InstantGramResultTileProps) => {
    const event = props.event
    const sportEvent = props.sportEvent
    const showSportEvent = props.showSportEvent
    const { isMobile } = useScreenWidth()
    const { showDropDown, setShowDropDown } = useDropDown()
    const refactoredEvent = refactorEvent({ event, sportEvent, showSportEvent })

    return (
        <Tile type="solid" dense={isMobile && true}>
            <Spacing
                mL={isMobile ? 15 : 70}
                mR={isMobile ? 15 : 70}
                mB={isMobile ? 7.5 : 15}
            >
                {refactoredEvent.prefix && (
                    <Typography
                        type="t2"
                        content={
                            <>
                                <Typography
                                    content={refactoredEvent.prefix}
                                    inline
                                />
                                <Typography content=":" inline />
                            </>
                        }
                        textAlign="left"
                    />
                )}
                {refactoredEvent.names.length > 1 ? (
                    <>
                        {refactoredEvent.names.map(({ name, refKey }: any) => (
                            <Typography
                                type="h1"
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
                                textAlign="left"
                            />
                        ))}
                    </>
                ) : (
                    <Typography
                        type={refactoredEvent.prefix ? 'h1' : 't2'}
                        content={refactoredEvent.names[0].name}
                        textAlign="left"
                    />
                )}
            </Spacing>
            <Spacing
                mL={isMobile ? 15 : 70}
                mR={isMobile ? 15 : 70}
                mT={isMobile ? 7.5 : 15}
                mB={isMobile ? 7.5 : 15}
            >
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
                    textAlign="left"
                />
            </Spacing>
            {refactoredEvent.showSportEvent && (
                <ActivityTile
                    title={{
                        leftItem: (
                            <>
                                {refactoredEvent.distance}
                                &nbsp;|&nbsp;
                                {refactoredEvent.elevation}
                            </>
                        ),
                        rightItems: <>[{refactoredEvent.time}]</>,
                    }}
                    entries={[
                        {
                            leftItem: 'Island(s)',
                            rightItems: refactoredEvent.islands,
                        },
                        {
                            leftItem: 'Munro(s)',
                            rightItems: refactoredEvent.munros,
                        },
                        {
                            leftItem: 'Munro Top(s)',
                            rightItems: refactoredEvent.munroTops,
                        },
                        {
                            leftItem: 'Corbett(s)',
                            rightItems: refactoredEvent.corbetts,
                        },
                        {
                            leftItem: 'Corbett Top(s)',
                            rightItems: refactoredEvent.corbettTops,
                        },
                        {
                            leftItem: 'Graham(s)',
                            rightItems: refactoredEvent.grahams,
                        },
                        {
                            leftItem: 'SubTwo(s)',
                            rightItems: refactoredEvent.subTwos,
                        },
                        {
                            leftItem: 'Donald(s)',
                            rightItems: refactoredEvent.donalds,
                        },
                    ]}
                />
            )}
            <Spacing
                mL={isMobile ? 15 : 70}
                mR={isMobile ? 15 : 70}
                mT={isMobile ? 7.5 : 15}
                mB={isMobile ? 7.5 : 15}
            >
                <Button
                    buttonType="regular-clear"
                    func={() => setShowDropDown(!showDropDown)}
                    funcResp={showDropDown}
                    textAlign="center"
                />
            </Spacing>
            {showDropDown && (
                <Spacing
                    mL={isMobile ? 15 : 70}
                    mR={isMobile ? 15 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    {refactoredEvent.youthHostels && (
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
                            paragraphMargins
                        />
                    )}
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
        </Tile>
    )
}
