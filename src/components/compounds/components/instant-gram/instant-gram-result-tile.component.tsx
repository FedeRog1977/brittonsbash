import {
    ActivityTile,
    Article,
    Button,
    ImageMatrix,
    ImageSlider,
    Modal,
    Spacing,
    Tile,
    Typography,
} from '../../../bash-blocks'
import { compileEvent, useDropDown, useScreenWidth } from '../../../../scripts'
import { AmenitiesTile, InstantGramResultTileProps } from '../..'

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
    const { showDropDown: showModal, setShowDropDown: setShowModal } =
        useDropDown()
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
                        type="t1"
                        content={`${refactoredEvent.prefix}:`}
                        textAlign="left"
                    />
                )}
                {refactoredEvent.names.length > 1 ? (
                    <>
                        {refactoredEvent.names.map(({ name, refKey }: any) => (
                            <Typography
                                type="t2"
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
                        type={refactoredEvent.prefix ? 't2' : 't1'}
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
                    type="h4"
                    content={
                        <>
                            {refactoredEvent.startDate}
                            {refactoredEvent.endDate && (
                                <>
                                    &nbsp;&#8212;&nbsp;{refactoredEvent.endDate}
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
                    <Spacing mL={isMobile ? 0 : 140} mR={isMobile ? 0 : 140}>
                        {refactoredEvent.features && (
                            <>
                                {refactoredEvent.features.cities && (
                                    <AmenitiesTile
                                        title="Cities: "
                                        content={
                                            refactoredEvent.features.cities
                                        }
                                    />
                                )}
                                {refactoredEvent.features.districts && (
                                    <AmenitiesTile
                                        title="Districts: "
                                        content={
                                            refactoredEvent.features.districts
                                        }
                                    />
                                )}
                                {refactoredEvent.features.attractions && (
                                    <AmenitiesTile
                                        title="Attractions: "
                                        content={
                                            refactoredEvent.features.attractions
                                        }
                                    />
                                )}
                                {refactoredEvent.features.youthHostels && (
                                    <AmenitiesTile
                                        title="Youth Hostels: "
                                        content={
                                            refactoredEvent.features
                                                .youthHostels
                                        }
                                    />
                                )}
                                {refactoredEvent.features.supermarkets && (
                                    <AmenitiesTile
                                        title="Supermarkets: "
                                        content={
                                            refactoredEvent.features
                                                .supermarkets
                                        }
                                    />
                                )}
                                {refactoredEvent.features.shops && (
                                    <AmenitiesTile
                                        title="Shops: "
                                        content={refactoredEvent.features.shops}
                                    />
                                )}
                                {refactoredEvent.features.foodstuffs && (
                                    <AmenitiesTile
                                        title="Foodstuffs: "
                                        content={
                                            refactoredEvent.features.foodstuffs
                                        }
                                    />
                                )}
                                {refactoredEvent.features.bakeries && (
                                    <AmenitiesTile
                                        title="Bakeries: "
                                        content={
                                            refactoredEvent.features.bakeries
                                        }
                                    />
                                )}
                                {refactoredEvent.features.gelaterias && (
                                    <AmenitiesTile
                                        title="Gelaterias: "
                                        content={
                                            refactoredEvent.features.gelaterias
                                        }
                                    />
                                )}
                                {refactoredEvent.features.restaurants && (
                                    <AmenitiesTile
                                        title="Restaurants: "
                                        content={
                                            refactoredEvent.features.restaurants
                                        }
                                    />
                                )}
                                {refactoredEvent.features.bars && (
                                    <AmenitiesTile
                                        title="Bars: "
                                        content={refactoredEvent.features.bars}
                                    />
                                )}
                            </>
                        )}
                    </Spacing>
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
            >
                <ImageMatrix items={refactoredEvent.images} columns={4} />
            </Spacing>
            <Spacing
                mL={isMobile ? 15 : 70}
                mR={isMobile ? 15 : 70}
                mT={isMobile ? 7.5 : 15}
            >
                <Button
                    buttonType="regular-clear"
                    func={() => setShowModal(!showModal)}
                    funcResp={showModal}
                    content="Show image slideshow"
                />
            </Spacing>
            {showModal && (
                <Modal
                    isOpen={showModal}
                    onClose={() => setShowModal(!showModal)}
                >
                    <ImageSlider slides={refactoredEvent.images} />
                </Modal>
            )}
        </Tile>
    )
}
