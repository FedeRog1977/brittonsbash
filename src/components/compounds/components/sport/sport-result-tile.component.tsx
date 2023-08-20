import { Typography, Tile } from '../../../bash-blocks'
import {
    compileProjects,
    compileMiles,
    compileRoadies,
    toMiles,
    toFeet,
    toSpeed,
    useScreenWidth,
} from '../../../../scripts'
import { ActivityTile } from '../../../bash-blocks'

export const SportResultTile = () => {
    const { isMobile } = useScreenWidth()
    const compiledRoadies = compileRoadies()
    const compiledProjects = compileProjects()
    const compiledMiles = compileMiles()

    return (
        <>
            <Tile type="solid" dense={isMobile ? true : false} top>
                <Typography type="h1" content="Roadies" textAlign="center" />
                <Typography type="h2" content="Roadies" textAlign="center" />
                <ActivityTile
                    title={{
                        rightItems: ['Occurences', 'Distance', 'Elevation'],
                    }}
                    entries={[
                        {
                            leftItem: 'Total',
                            rightItems: [
                                `${compiledRoadies.number.total}`,
                                compiledRoadies.distance.total,
                                compiledRoadies.elevation.total,
                            ],
                        },
                        {
                            leftItem: '2023',
                            rightItems: [
                                `${compiledRoadies.number[2023]}`,
                                compiledRoadies.distance[2023],
                                compiledRoadies.elevation[2023],
                            ],
                        },
                        {
                            leftItem: '2022',
                            rightItems: [
                                `${compiledRoadies.number[2022]}`,
                                compiledRoadies.distance[2022],
                                compiledRoadies.elevation[2022],
                            ],
                        },
                        {
                            leftItem: '2021',
                            rightItems: [
                                `${compiledRoadies.number[2021]}`,
                                compiledRoadies.distance[2021],
                                compiledRoadies.elevation[2021],
                            ],
                        },
                        {
                            leftItem: '2020',
                            rightItems: [
                                `${compiledRoadies.number[2020]}`,
                                compiledRoadies.distance[2020],
                                compiledRoadies.elevation[2020],
                            ],
                        },
                    ]}
                />
                <Typography type="h2" content="Routes" textAlign="center" />
                <ActivityTile
                    title={{
                        rightItems: [
                            'Centuries',
                            'Strathavens',
                            'Fenwick + WF’s',
                            'Fenwicks',
                            'Wind Farms',
                            'Thorntonhalls',
                        ],
                    }}
                    entries={[
                        {
                            leftItem: 'Total',
                            rightItems: [
                                `${compiledRoadies.centuries.total}`,
                                `${compiledRoadies.strathavens.total}`,
                                `${compiledRoadies.fenwickWindfarms.total}`,
                                `${compiledRoadies.fenwicks.total}`,
                                `${compiledRoadies.windfarms.total}`,
                                `${compiledRoadies.thorntonhalls.total}`,
                            ],
                        },
                        {
                            leftItem: '2023',
                            rightItems: [
                                `${compiledRoadies.centuries[2023]}`,
                                `${compiledRoadies.strathavens[2023]}`,
                                `${compiledRoadies.fenwickWindfarms[2023]}`,
                                `${compiledRoadies.fenwicks[2023]}`,
                                `${compiledRoadies.windfarms[2023]}`,
                                `${compiledRoadies.thorntonhalls[2023]}`,
                            ],
                        },
                        {
                            leftItem: '2022',
                            rightItems: [
                                `${compiledRoadies.centuries[2022]}`,
                                `${compiledRoadies.strathavens[2022]}`,
                                `${compiledRoadies.fenwickWindfarms[2022]}`,
                                `${compiledRoadies.fenwicks[2022]}`,
                                `${compiledRoadies.windfarms[2022]}`,
                                `${compiledRoadies.thorntonhalls[2022]}`,
                            ],
                        },
                        {
                            leftItem: '2021',
                            rightItems: [
                                `${compiledRoadies.centuries[2021]}`,
                                `${compiledRoadies.strathavens[2021]}`,
                                `${compiledRoadies.fenwickWindfarms[2021]}`,
                                `${compiledRoadies.fenwicks[2021]}`,
                                `${compiledRoadies.windfarms[2021]}`,
                                `${compiledRoadies.thorntonhalls[2021]}`,
                            ],
                        },
                        {
                            leftItem: '2020',
                            rightItems: [
                                `${compiledRoadies.centuries[2020]}`,
                                `${compiledRoadies.strathavens[2020]}`,
                                `${compiledRoadies.fenwickWindfarms[2020]}`,
                                `${compiledRoadies.fenwicks[2020]}`,
                                `${compiledRoadies.windfarms[2020]}`,
                                `${compiledRoadies.thorntonhalls[2020]}`,
                            ],
                        },
                    ]}
                />
                <Typography type="h2" content="2023" textAlign="center" />
                <ActivityTile
                    title={{
                        rightItems: ['Distance', 'Elevation', 'Time', 'Speed'],
                    }}
                    entries={compiledRoadies.roadies[2023].map(
                        ({ id, name, dist, elev, time, speed }: any) => ({
                            leftItem: name,
                            rightItems: [
                                `${toMiles(dist)}`,
                                `${toFeet(elev)}`,
                                `${time}`,
                                <>
                                    {Boolean(!isMobile && speed) ? (
                                        <>{toSpeed(speed, false)}</>
                                    ) : (
                                        ''
                                    )}
                                </>,
                            ],
                        })
                    )}
                />
                <Typography type="h2" content="2022" textAlign="center" />
                <ActivityTile
                    title={{
                        rightItems: ['Distance', 'Elevation', 'Time', 'Speed'],
                    }}
                    entries={compiledRoadies.roadies[2022].map(
                        ({ id, name, dist, elev, time, speed }: any) => ({
                            leftItem: name,
                            rightItems: [
                                `${toMiles(dist)}`,
                                `${toFeet(elev)}`,
                                `${time}`,
                                <>
                                    {Boolean(!isMobile && speed) ? (
                                        <>{toSpeed(speed, false)}</>
                                    ) : (
                                        ''
                                    )}
                                </>,
                            ],
                        })
                    )}
                />
                <Typography type="h2" content="2021" textAlign="center" />
                <ActivityTile
                    title={{
                        rightItems: ['Distance', 'Elevation', 'Time', 'Speed'],
                    }}
                    entries={compiledRoadies.roadies[2021].map(
                        ({ id, name, dist, elev, time, speed }: any) => ({
                            leftItem: name,
                            rightItems: [
                                `${toMiles(dist)}`,
                                `${toFeet(elev)}`,
                                `${time}`,
                                <>
                                    {Boolean(!isMobile && speed) ? (
                                        <>{toSpeed(speed, false)}</>
                                    ) : (
                                        ''
                                    )}
                                </>,
                            ],
                        })
                    )}
                />
                <Typography type="h2" content="2020" textAlign="center" />
                <ActivityTile
                    title={{
                        rightItems: ['Distance', 'Elevation', 'Time', 'Speed'],
                    }}
                    entries={compiledRoadies.roadies[2020].map(
                        ({ id, name, dist, elev, time, speed }: any) => ({
                            leftItem: name,
                            rightItems: [
                                `${toMiles(dist)}`,
                                `${toFeet(elev)}`,
                                `${time}`,
                                <>
                                    {Boolean(!isMobile && speed) ? (
                                        <>{toSpeed(speed, false)}</>
                                    ) : (
                                        ''
                                    )}
                                </>,
                            ],
                        })
                    )}
                />
            </Tile>
            <Tile type="solid">
                <Typography type="h1" content="Projects" textAlign="center" />
                <Typography type="h2" content="Projects" textAlign="center" />
                <ActivityTile
                    title={{
                        rightItems: ['Occurences', 'Distance', 'Elevation'],
                    }}
                    entries={[
                        {
                            leftItem: 'Total',
                            rightItems: [
                                `${compiledProjects.number.total}`,
                                compiledProjects.distance.total,
                                compiledProjects.elevation.total,
                            ],
                        },
                        {
                            leftItem: '2023',
                            rightItems: [
                                `${compiledProjects.number[2023]}`,
                                compiledProjects.distance[2023],
                                compiledProjects.elevation[2023],
                            ],
                        },
                        {
                            leftItem: '2022',
                            rightItems: [
                                `${compiledProjects.number[2022]}`,
                                compiledProjects.distance[2022],
                                compiledProjects.elevation[2022],
                            ],
                        },
                        {
                            leftItem: '2021',
                            rightItems: [
                                `${compiledProjects.number[2021]}`,
                                compiledProjects.distance[2021],
                                compiledProjects.elevation[2021],
                            ],
                        },
                        {
                            leftItem: '2020',
                            rightItems: [
                                `${compiledProjects.number[2020]}`,
                                compiledProjects.distance[2020],
                                compiledProjects.elevation[2020],
                            ],
                        },
                    ]}
                />
                <Typography type="h2" content="Hills" textAlign="center" />
                <ActivityTile
                    title={{
                        rightItems: [
                            'Munros',
                            'Munro Tops',
                            'Corbetts',
                            'Corbett Tops',
                            'Grahams',
                            'Sub2000s',
                            'Donalds',
                        ],
                    }}
                    entries={[
                        {
                            leftItem: 'Unique',
                            rightItems: [
                                `${compiledProjects.munros.number.unique}`,
                                `${compiledProjects.munroTops.number.unique}`,
                                `${compiledProjects.corbetts.number.unique}`,
                                `${compiledProjects.corbettTops.number.unique}`,
                                `${compiledProjects.grahams.number.unique}`,
                                `${compiledProjects.subTwos.number.unique}`,
                                `${compiledProjects.donalds.number.unique}`,
                            ],
                        },
                        {
                            leftItem: 'Total',
                            rightItems: [
                                `${compiledProjects.munros.number.total}`,
                                `${compiledProjects.munroTops.number.total}`,
                                `${compiledProjects.corbetts.number.total}`,
                                `${compiledProjects.corbettTops.number.total}`,
                                `${compiledProjects.grahams.number.total}`,
                                `${compiledProjects.subTwos.number.total}`,
                                `${compiledProjects.donalds.number.total}`,
                            ],
                        },
                        {
                            leftItem: '2023',
                            rightItems: [
                                `${compiledProjects.munros.number[2023]}`,
                                `${compiledProjects.munroTops.number[2023]}`,
                                `${compiledProjects.corbetts.number[2023]}`,
                                `${compiledProjects.corbettTops.number[2023]}`,
                                `${compiledProjects.grahams.number[2023]}`,
                                `${compiledProjects.subTwos.number[2023]}`,
                                `${compiledProjects.donalds.number[2023]}`,
                            ],
                        },
                        {
                            leftItem: '2022',
                            rightItems: [
                                `${compiledProjects.munros.number[2022]}`,
                                `${compiledProjects.munroTops.number[2022]}`,
                                `${compiledProjects.corbetts.number[2022]}`,
                                `${compiledProjects.corbettTops.number[2022]}`,
                                `${compiledProjects.grahams.number[2022]}`,
                                `${compiledProjects.subTwos.number[2022]}`,
                                `${compiledProjects.donalds.number[2022]}`,
                            ],
                        },
                        {
                            leftItem: '2021',
                            rightItems: [
                                `${compiledProjects.munros.number[2021]}`,
                                `${compiledProjects.munroTops.number[2021]}`,
                                `${compiledProjects.corbetts.number[2021]}`,
                                `${compiledProjects.corbettTops.number[2021]}`,
                                `${compiledProjects.grahams.number[2021]}`,
                                `${compiledProjects.subTwos.number[2021]}`,
                                `${compiledProjects.donalds.number[2021]}`,
                            ],
                        },
                        {
                            leftItem: '2020',
                            rightItems: [
                                `${compiledProjects.munros.number[2020]}`,
                                `${compiledProjects.munroTops.number[2020]}`,
                                `${compiledProjects.corbetts.number[2020]}`,
                                `${compiledProjects.corbettTops.number[2020]}`,
                                `${compiledProjects.grahams.number[2020]}`,
                                `${compiledProjects.subTwos.number[2020]}`,
                                `${compiledProjects.donalds.number[2020]}`,
                            ],
                        },
                    ]}
                />
                <Typography type="h2" content="2023" textAlign="center" />
                <ActivityTile
                    title={{
                        rightItems: ['Distance', 'Elevation', 'Time'],
                    }}
                    entries={compiledProjects.projects[2023].map(
                        ({ id, name, dist, elev, time, speed }: any) => ({
                            leftItem: name,
                            rightItems: [
                                `${toMiles(dist)}`,
                                `${toFeet(elev)}`,
                                `${time}`,
                            ],
                        })
                    )}
                />
                <Typography type="h2" content="2022" textAlign="center" />
                <ActivityTile
                    title={{
                        rightItems: ['Distance', 'Elevation', 'Time'],
                    }}
                    entries={compiledProjects.projects[2022].map(
                        ({ id, name, dist, elev, time, speed }: any) => ({
                            leftItem: name,
                            rightItems: [
                                `${toMiles(dist)}`,
                                `${toFeet(elev)}`,
                                `${time}`,
                            ],
                        })
                    )}
                />
                <Typography type="h2" content="2021" textAlign="center" />
                <ActivityTile
                    title={{
                        rightItems: ['Distance', 'Elevation', 'Time'],
                    }}
                    entries={compiledProjects.projects[2021].map(
                        ({ id, name, dist, elev, time, speed }: any) => ({
                            leftItem: name,
                            rightItems: [
                                `${toMiles(dist)}`,
                                `${toFeet(elev)}`,
                                `${time}`,
                            ],
                        })
                    )}
                />
                <Typography type="h2" content="2020" textAlign="center" />
                <ActivityTile
                    title={{
                        rightItems: ['Distance', 'Elevation', 'Time'],
                    }}
                    entries={compiledProjects.projects[2020].map(
                        ({ id, name, dist, elev, time, speed }: any) => ({
                            leftItem: name,
                            rightItems: [
                                `${toMiles(dist)}`,
                                `${toFeet(elev)}`,
                                `${time}`,
                            ],
                        })
                    )}
                />
            </Tile>
            <Tile type="solid">
                <Typography type="h1" content="Miles" textAlign="center" />
                <Typography type="h2" content="Miles" textAlign="center" />
                <ActivityTile
                    title={{
                        rightItems: ['Occurences', 'Distance', 'Elevation'],
                    }}
                    entries={[
                        {
                            leftItem: 'Total',
                            rightItems: [
                                `${compiledMiles.number.total}`,
                                compiledMiles.distance.total,
                                compiledMiles.elevation.total,
                            ],
                        },
                        {
                            leftItem: '2023',
                            rightItems: [
                                `${compiledMiles.number[2023]}`,
                                compiledMiles.distance[2023],
                                compiledMiles.elevation[2023],
                            ],
                        },
                        {
                            leftItem: '2022',
                            rightItems: [
                                `${compiledMiles.number[2022]}`,
                                compiledMiles.distance[2022],
                                compiledMiles.elevation[2022],
                            ],
                        },
                        {
                            leftItem: '2021',
                            rightItems: [
                                `${compiledMiles.number[2021]}`,
                                compiledMiles.distance[2021],
                                compiledMiles.elevation[2021],
                            ],
                        },
                        {
                            leftItem: '2020',
                            rightItems: [
                                `${compiledMiles.number[2020]}`,
                                compiledMiles.distance[2020],
                                compiledMiles.elevation[2020],
                            ],
                        },
                    ]}
                />
                <Typography type="h2" content="Routes" textAlign="center" />
                <ActivityTile
                    title={{
                        rightItems: [
                            'Wind Farms',
                            'Thorntonhalls',
                            'Waterfoots',
                        ],
                    }}
                    entries={[
                        {
                            leftItem: 'Total',
                            rightItems: [
                                `${compiledMiles.windfarms.total}`,
                                `${compiledMiles.thorntonhalls.total}`,
                                `${compiledMiles.waterfoots.total}`,
                            ],
                        },
                        {
                            leftItem: '2023',
                            rightItems: [
                                `${compiledMiles.windfarms[2023]}`,
                                `${compiledMiles.thorntonhalls[2023]}`,
                                `${compiledMiles.waterfoots[2023]}`,
                            ],
                        },
                        {
                            leftItem: '2022',
                            rightItems: [
                                `${compiledMiles.windfarms[2022]}`,
                                `${compiledMiles.thorntonhalls[2022]}`,
                                `${compiledMiles.waterfoots[2022]}`,
                            ],
                        },
                        {
                            leftItem: '2021',
                            rightItems: [
                                `${compiledMiles.windfarms[2021]}`,
                                `${compiledMiles.thorntonhalls[2021]}`,
                                `${compiledMiles.waterfoots[2021]}`,
                            ],
                        },
                        {
                            leftItem: '2020',
                            rightItems: [
                                `${compiledMiles.windfarms[2020]}`,
                                `${compiledMiles.thorntonhalls[2020]}`,
                                `${compiledMiles.waterfoots[2020]}`,
                            ],
                        },
                    ]}
                />
                <Typography type="h2" content="2023" textAlign="center" />
                <ActivityTile
                    title={{
                        rightItems: ['Distance', 'Elevation', 'Time'],
                    }}
                    entries={compiledMiles.miles[2023].map(
                        ({ id, name, dist, elev, time, speed }: any) => ({
                            leftItem: name,
                            rightItems: [
                                `${toMiles(dist)}`,
                                `${toFeet(elev)}`,
                                `${time}`,
                            ],
                        })
                    )}
                />
                <Typography type="h2" content="2022" textAlign="center" />
                <ActivityTile
                    title={{
                        rightItems: ['Distance', 'Elevation', 'Time'],
                    }}
                    entries={compiledMiles.miles[2022].map(
                        ({ id, name, dist, elev, time, speed }: any) => ({
                            leftItem: name,
                            rightItems: [
                                `${toMiles(dist)}`,
                                `${toFeet(elev)}`,
                                `${time}`,
                            ],
                        })
                    )}
                />
                <Typography type="h2" content="2021" textAlign="center" />
                <ActivityTile
                    title={{
                        rightItems: ['Distance', 'Elevation', 'Time'],
                    }}
                    entries={compiledMiles.miles[2021].map(
                        ({ id, name, dist, elev, time, speed }: any) => ({
                            leftItem: name,
                            rightItems: [
                                `${toMiles(dist)}`,
                                `${toFeet(elev)}`,
                                `${time}`,
                            ],
                        })
                    )}
                />
                <Typography type="h2" content="2020" textAlign="center" />
                <ActivityTile
                    title={{
                        rightItems: ['Distance', 'Elevation', 'Time'],
                    }}
                    entries={compiledMiles.miles[2020].map(
                        ({ id, name, dist, elev, time, speed }: any) => ({
                            leftItem: name,
                            rightItems: [
                                `${toMiles(dist)}`,
                                `${toFeet(elev)}`,
                                `${time}`,
                            ],
                        })
                    )}
                />
            </Tile>
        </>
    )
}

export default SportResultTile
