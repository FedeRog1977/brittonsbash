import {
    ActivityTile,
    Article,
    Button,
    ImageMatrix,
    ImageSlider,
    Spacing,
    Tile,
    Typography,
} from '../../../bash-blocks'
import { compileEvent, useDropDown, useScreenWidth } from '../../../../scripts'
import { InstantGramResultTileProps } from '../..'

export const InstantGramResultTile: React.FC<InstantGramResultTileProps> = ({
    ...props
}: InstantGramResultTileProps) => {
    const event = props.event
    const sportEvent = props.sportEvent
    const showSportEvent = props.showSportEvent
    const { isMobile } = useScreenWidth()
    const {
        showDropDown: showDescription,
        setShowDropDown: setShowDescription,
    } = useDropDown()
    const {
        showDropDown: showImageMatrix,
        setShowDropDown: setShowImageMatrix,
    } = useDropDown()
    const refactoredEvent = compileEvent({ event, sportEvent, showSportEvent })

    return (
        <Tile type="solid" dense={isMobile}>
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
                                            color="mediumGrey"
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
                    color="mediumGrey"
                    textAlign="left"
                />
            </Spacing>
            {refactoredEvent.showSportEvent && (
                <ActivityTile
                    leftColumn={{
                        title: `${refactoredEvent.distance} | ${refactoredEvent.elevation}`,
                        entries: [
                            refactoredEvent.islands && 'Island(s)',
                            refactoredEvent.munros && 'Munro(s)',
                            refactoredEvent.munroTops && 'Munro Top(s)',
                            refactoredEvent.corbetts && 'Corbett(s)',
                            refactoredEvent.corbettTops && 'Corbett Top(s)',
                            refactoredEvent.grahams && 'Graham(s)',
                            refactoredEvent.subTwos && 'SubTwo(s)',
                            refactoredEvent.donalds && 'Donald(s)',
                        ],
                    }}
                    rightColumns={[
                        {
                            title: refactoredEvent.time,
                            entries: [
                                refactoredEvent.islands &&
                                    refactoredEvent.islands,
                                refactoredEvent.munros &&
                                    refactoredEvent.munros,
                                refactoredEvent.munroTops &&
                                    refactoredEvent.munroTops,
                                refactoredEvent.corbetts &&
                                    refactoredEvent.corbetts,
                                refactoredEvent.corbettTops &&
                                    refactoredEvent.corbettTops,
                                refactoredEvent.grahams &&
                                    refactoredEvent.grahams,
                                refactoredEvent.subTwos &&
                                    refactoredEvent.subTwos,
                                refactoredEvent.donalds &&
                                    refactoredEvent.donalds,
                            ],
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
                    func={() => setShowDescription(!showDescription)}
                    funcResp={showDescription}
                />
            </Spacing>
            {showDescription && (
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
                mB={isMobile ? 7.5 : 15}
                backgroundColor={
                    isMobile ? 'var(--white)' : 'var(--lighter-grey)'
                }
                borderRadius={isMobile ? 'none' : 'var(--corners-small)'}
            >
                <ImageSlider slides={refactoredEvent.images} />
            </Spacing>
            <Spacing
                mL={isMobile ? 15 : 70}
                mR={isMobile ? 15 : 70}
                mT={isMobile ? 7.5 : 15}
                mB={isMobile ? 7.5 : 15}
            >
                <Button
                    buttonType="regular-clear"
                    func={() => setShowImageMatrix(!showImageMatrix)}
                    funcResp={showImageMatrix}
                    content="Show images in matrix form"
                />
            </Spacing>
            {showImageMatrix && (
                <Spacing
                    mL={isMobile ? 0 : 70}
                    mR={isMobile ? 0 : 70}
                    mT={isMobile ? 15 : 30}
                >
                    <ImageMatrix items={refactoredEvent.images} columns={4} />
                </Spacing>
            )}
        </Tile>
    )
}
