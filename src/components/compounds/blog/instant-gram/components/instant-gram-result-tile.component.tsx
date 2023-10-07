import {
    Article,
    ArticlePreface,
    Button,
    ImageMatrix,
    ImageSlider,
    Modal,
    Spacing,
    Tile,
    Typography,
    RowTable,
} from '../../../../bash-blocks'
import {
    compileEvent,
    useShowElement,
    useScreenWidth,
    RefactoredEventNameProps,
} from '../../../../../scripts'
import { InstantGramResultTileProps } from '..'
import { useEffect } from 'react'

export const InstantGramResultTile: React.FC<InstantGramResultTileProps> = ({
    ...props
}: InstantGramResultTileProps) => {
    const event = props.event
    const sportEvent = props.sportEvent
    const showSportEvent = props.showSportEvent

    const { isMobile } = useScreenWidth()

    const { showElement: showDescription, setShowElement: setShowDescription } =
        useShowElement()
    const { showElement: showMatrix, setShowElement: setShowMatrix } =
        useShowElement()
    const { showElement: showModal, setShowElement: setShowModal } =
        useShowElement()

    const refactoredEvent = compileEvent({ event, sportEvent, showSportEvent })

    useEffect(() => {
        setShowMatrix(true)
    }, [])

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
                        {refactoredEvent.names.map(
                            ({ name, refKey }: RefactoredEventNameProps) => (
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
                            )
                        )}
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
                <Spacing
                    mL={isMobile ? 0 : 70}
                    mR={isMobile ? 0 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <RowTable
                        titleRow={{
                            leftItem: `${refactoredEvent.distance} | ${refactoredEvent.elevation}`,
                            rightItem: refactoredEvent.time,
                        }}
                        rows={[
                            {
                                leftItem: refactoredEvent.islands && 'Islands',
                                rightItem:
                                    refactoredEvent.islands &&
                                    refactoredEvent.islands,
                            },
                            {
                                leftItem: refactoredEvent.munros && 'Munros',
                                rightItem:
                                    refactoredEvent.munros &&
                                    refactoredEvent.munros,
                            },
                            {
                                leftItem:
                                    refactoredEvent.munroTops && 'Munro Tops',
                                rightItem:
                                    refactoredEvent.munroTops &&
                                    refactoredEvent.munroTops,
                            },
                            {
                                leftItem:
                                    refactoredEvent.corbetts && 'Corbetts',
                                rightItem:
                                    refactoredEvent.corbetts &&
                                    refactoredEvent.corbetts,
                            },
                            {
                                leftItem:
                                    refactoredEvent.corbettTops &&
                                    'Corbett Tops',
                                rightItem:
                                    refactoredEvent.corbettTops &&
                                    refactoredEvent.corbettTops,
                            },
                            {
                                leftItem: refactoredEvent.grahams && 'Grahams',
                                rightItem:
                                    refactoredEvent.grahams &&
                                    refactoredEvent.grahams,
                            },
                            {
                                leftItem: refactoredEvent.subTwos && 'SubTwos',
                                rightItem:
                                    refactoredEvent.subTwos &&
                                    refactoredEvent.subTwos,
                            },
                            {
                                leftItem: refactoredEvent.donalds && 'Donalds',
                                rightItem:
                                    refactoredEvent.donalds &&
                                    refactoredEvent.donalds,
                            },
                        ]}
                    />
                </Spacing>
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
                    {refactoredEvent.features && (
                        <Spacing
                            mL={isMobile ? 0 : 280}
                            mR={isMobile ? 0 : 280}
                        >
                            <ArticlePreface
                                entries={[
                                    ...(refactoredEvent.features.cities
                                        ? [
                                              {
                                                  title: 'Cities:',
                                                  content:
                                                      refactoredEvent.features
                                                          .cities,
                                              },
                                          ]
                                        : [{}]),
                                    ...(refactoredEvent.features.districts
                                        ? [
                                              {
                                                  title: 'Districts:',
                                                  content:
                                                      refactoredEvent.features
                                                          .districts,
                                              },
                                          ]
                                        : [{}]),
                                    ...(refactoredEvent.features.attractions
                                        ? [
                                              {
                                                  title: 'Attractions:',
                                                  content:
                                                      refactoredEvent.features
                                                          .attractions,
                                              },
                                          ]
                                        : [{}]),
                                    ...(refactoredEvent.features.youthHostels
                                        ? [
                                              {
                                                  title: 'Youth Hostels:',
                                                  content:
                                                      refactoredEvent.features
                                                          .youthHostels,
                                              },
                                          ]
                                        : [{}]),
                                    ...(refactoredEvent.features.supermarkets
                                        ? [
                                              {
                                                  title: 'Supermarkets:',
                                                  content:
                                                      refactoredEvent.features
                                                          .supermarkets,
                                              },
                                          ]
                                        : [{}]),
                                    ...(refactoredEvent.features.shops
                                        ? [
                                              {
                                                  title: 'Shops:',
                                                  content:
                                                      refactoredEvent.features
                                                          .shops,
                                              },
                                          ]
                                        : [{}]),
                                    ...(refactoredEvent.features.foodstuffs
                                        ? [
                                              {
                                                  title: 'Foodstuffs:',
                                                  content:
                                                      refactoredEvent.features
                                                          .foodstuffs,
                                              },
                                          ]
                                        : [{}]),
                                    ...(refactoredEvent.features.bakeries
                                        ? [
                                              {
                                                  title: 'Bakeries:',
                                                  content:
                                                      refactoredEvent.features
                                                          .bakeries,
                                              },
                                          ]
                                        : [{}]),
                                    ...(refactoredEvent.features.gelaterias
                                        ? [
                                              {
                                                  title: 'Gelaterias:',
                                                  content:
                                                      refactoredEvent.features
                                                          .gelaterias,
                                              },
                                          ]
                                        : [{}]),
                                    ...(refactoredEvent.features.restaurants
                                        ? [
                                              {
                                                  title: 'Restaurants:',
                                                  content:
                                                      refactoredEvent.features
                                                          .restaurants,
                                              },
                                          ]
                                        : [{}]),
                                    ...(refactoredEvent.features.bars
                                        ? [
                                              {
                                                  title: 'Bars:',
                                                  content:
                                                      refactoredEvent.features
                                                          .bars,
                                              },
                                          ]
                                        : [{}]),
                                    ...(refactoredEvent.features
                                        .filmingLocations
                                        ? [
                                              {
                                                  title: 'Filming Locations:',
                                                  content:
                                                      refactoredEvent.features
                                                          .filmingLocations,
                                              },
                                          ]
                                        : [{}]),
                                ]}
                            />
                        </Spacing>
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
                mL={isMobile ? 15 : 70}
                mR={isMobile ? 15 : 70}
                mT={isMobile ? 7.5 : 15}
                textAlign="center"
            >
                <Button
                    buttonType="regular-clear"
                    func={() => setShowMatrix(!showMatrix)}
                    funcResp={showMatrix}
                    content="Image matrix"
                    dense
                />
                <Button
                    buttonType="regular-clear"
                    func={() => setShowModal(!showModal)}
                    funcResp={showModal}
                    content="Image slideshow"
                    dense
                />
            </Spacing>
            {showMatrix && (
                <Spacing
                    mL={isMobile ? 0 : 70}
                    mR={isMobile ? 0 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <ImageMatrix items={refactoredEvent.images} columns={4} />
                </Spacing>
            )}
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