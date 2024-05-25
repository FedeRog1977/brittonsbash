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
    Grid,
    Anchor,
} from '../../../../bash-blocks'
import {
    compileEvent,
    useShowElement,
    useScreenWidth,
    RefactoredEventNameProps,
    generateUniqueKey,
} from '../../../../../scripts'
import { FC, useEffect } from 'react'
import { CompiledEventProps } from '../../../../../scripts'

interface ResultTileProps extends CompiledEventProps {
    url: string
}

export const ResultTile: FC<ResultTileProps> = ({
    url,
    event,
    sport,
    showSport,
}) => {
    const { isMobile } = useScreenWidth()

    const { showElement: showDescription, setShowElement: setShowDescription } =
        useShowElement()
    const { showElement: showMatrix, setShowElement: setShowMatrix } =
        useShowElement()
    const { showElement: showModal, setShowElement: setShowModal } =
        useShowElement()

    const refactoredEvent = compileEvent({ event, sport, showSport })

    useEffect(() => {
        setShowMatrix(!isMobile && true)
    }, [])

    return (
        <Tile type="solid">
            {/* <Anchor id={`${url}#result`} /> */}
            <Spacing mB={isMobile ? 7.5 : 15}>
                {refactoredEvent.prefix && (
                    <Typography type="t1" textAlign="center">
                        {refactoredEvent.prefix}:
                    </Typography>
                )}
                {refactoredEvent.names.length > 1 ? (
                    <Grid alignColumns="auto auto">
                        {refactoredEvent.names.map(
                            ({ name, refKey }, index) => (
                                <>
                                    <Grid
                                        columnItem={[1, 2]}
                                        rowItem={[
                                            index + 1,
                                            refactoredEvent.names.length + 1,
                                        ]}
                                        textAlign="right"
                                    >
                                        <Typography
                                            type="t2"
                                            color="mediumGrey"
                                        >
                                            Part&nbsp;
                                            {refKey}&nbsp;
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        columnItem={[2, 2]}
                                        rowItem={[
                                            index + 1,
                                            refactoredEvent.names.length + 1,
                                        ]}
                                        textAlign="left"
                                    >
                                        <Typography type="t2">
                                            {name}
                                        </Typography>
                                    </Grid>
                                </>
                            )
                        )}
                    </Grid>
                ) : (
                    <Typography
                        type={refactoredEvent.prefix ? 't2' : 't1'}
                        textAlign="center"
                    >
                        {refactoredEvent.names[0].name}
                    </Typography>
                )}
            </Spacing>
            <Spacing mT={isMobile ? 7.5 : 15} mB={isMobile ? 7.5 : 15}>
                <Typography
                    type="h4"
                    color="mediumGrey"
                    textAlign="center"
                    paragraphMargins
                >
                    {refactoredEvent.startDate}
                    {refactoredEvent.endDate && (
                        <>&nbsp;&#8212;&nbsp;{refactoredEvent.endDate}</>
                    )}
                </Typography>
            </Spacing>
            {refactoredEvent.showSport && (
                <Spacing
                    mX={isMobile ? -20 : 0}
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
            <Spacing mT={isMobile ? 7.5 : 15} mB={isMobile ? 7.5 : 15}>
                <Button
                    fill
                    transition
                    func={() => setShowDescription(!showDescription)}
                    funcResp={showDescription}
                />
            </Spacing>
            {showDescription && (
                <Spacing mT={isMobile ? 7.5 : 15} mB={isMobile ? 7.5 : 15}>
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
                                    ...(refactoredEvent.features.cafes
                                        ? [
                                              {
                                                  title: 'Cafés:',
                                                  content:
                                                      refactoredEvent.features
                                                          .cafes,
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
                        <Typography type="body" textAlign="justify">
                            {refactoredEvent.description}
                        </Typography>
                    )}
                </Spacing>
            )}
            {isMobile ? (
                <Spacing
                    mX={isMobile ? -20 : 0}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <ImageSlider slides={refactoredEvent.images} />
                </Spacing>
            ) : (
                <Spacing mT={isMobile ? 7.5 : 15} mB={isMobile ? 7.5 : 15}>
                    <Grid alignColumns="auto auto" justifyItems="center">
                        <Grid columnItem={[1, 2]}>
                            <Button
                                func={() => setShowMatrix(!showMatrix)}
                                funcResp={showMatrix}
                                content="Image matrix"
                            />
                        </Grid>
                        <Grid columnItem={[2, 2]}>
                            <Button
                                func={() => setShowModal(!showModal)}
                                funcResp={showModal}
                                content="Image slideshow"
                            />
                        </Grid>
                    </Grid>
                </Spacing>
            )}
            {showMatrix && (
                <Spacing mT={isMobile ? 7.5 : 15} mB={isMobile ? 7.5 : 15}>
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