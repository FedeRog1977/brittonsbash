import { Typography, Tile, Spacing } from '../../bash-blocks'
import {
    compileProjects,
    compileMiles,
    compileRoadies,
    toMiles,
    toFeet,
    toSpeed,
    useScreenWidth,
} from '../../../scripts'
import { ActivityTile } from '../../bash-blocks'

export const SportResultTile = () => {
    const { isMobile } = useScreenWidth()
    const compiledRoadies = compileRoadies()
    const compiledProjects = compileProjects()
    const compiledMiles = compileMiles()

    return (
        <>
            <Tile type="solid" top>
                <Spacing mB={isMobile ? 7.5 : 15}>
                    <Typography
                        type="h1"
                        content="Roadies"
                        textAlign="center"
                    />
                </Spacing>
                <ActivityTile
                    title={{
                        leftItem: 'Roadies',
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
                <ActivityTile
                    title={{
                        leftItem: '2023',
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
                <ActivityTile
                    title={{
                        leftItem: '2022',
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
                <ActivityTile
                    title={{
                        leftItem: '2021',
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
                <ActivityTile
                    title={{
                        leftItem: '2020',
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
                <Spacing mB={isMobile ? 7.5 : 15}>
                    <Typography
                        type="h1"
                        content="Projects"
                        textAlign="center"
                    />
                </Spacing>
                <ActivityTile
                    title={{
                        leftItem: 'Projects',
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
                <ActivityTile
                    title={{
                        leftItem: '2023',
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
                <ActivityTile
                    title={{
                        leftItem: '2022',
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
                <ActivityTile
                    title={{
                        leftItem: '2021',
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
                <ActivityTile
                    title={{
                        leftItem: '2020',
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
                <Spacing mB={isMobile ? 7.5 : 15}>
                    <Typography type="h1" content="Miles" textAlign="center" />
                </Spacing>
                <ActivityTile
                    title={{
                        leftItem: 'Miles',
                        rightItem: 'Statistics',
                    }}
                    entries={[
                        {
                            leftItem: (
                                <>Total&nbsp;({compiledMiles.number.total})</>
                            ),
                            rightItem: (
                                <>
                                    {compiledMiles.distance.total}
                                    &nbsp;|&nbsp;
                                    {compiledMiles.elevation.total}
                                </>
                            ),
                        },
                        {
                            leftItem: (
                                <>2023&nbsp;({compiledMiles.number[2023]})</>
                            ),
                            rightItem: (
                                <>
                                    {compiledMiles.distance[2023]}
                                    &nbsp;|&nbsp;
                                    {compiledMiles.elevation[2023]}
                                </>
                            ),
                        },
                        {
                            leftItem: (
                                <>2022&nbsp;({compiledMiles.number[2022]})</>
                            ),
                            rightItem: (
                                <>
                                    {compiledMiles.distance[2022]}
                                    &nbsp;|&nbsp;
                                    {compiledMiles.elevation[2022]}
                                </>
                            ),
                        },
                        {
                            leftItem: (
                                <>2021&nbsp;({compiledMiles.number[2021]})</>
                            ),
                            rightItem: (
                                <>
                                    {compiledMiles.distance[2021]}
                                    &nbsp;|&nbsp;
                                    {compiledMiles.elevation[2021]}
                                </>
                            ),
                        },
                        {
                            leftItem: (
                                <>2020&nbsp;({compiledMiles.number[2020]})</>
                            ),
                            rightItem: (
                                <>
                                    {compiledMiles.distance[2020]}
                                    &nbsp;|&nbsp;
                                    {compiledMiles.elevation[2020]}
                                </>
                            ),
                        },
                    ]}
                />
                <ActivityTile
                    title={{
                        leftItem: <>2023&nbsp;({compiledMiles.number[2023]})</>,
                        rightItem: (
                            <>
                                {compiledMiles.distance[2023]}
                                &nbsp;|&nbsp;
                                {compiledMiles.elevation[2023]}
                            </>
                        ),
                    }}
                    entries={compiledMiles.miles[2023].map(
                        ({ id, name, dist, elev, time }: any) => ({
                            leftItem: name,
                            rightItem: (
                                <>
                                    {toMiles(dist)}&nbsp;|&nbsp;
                                    {toFeet(elev)}&nbsp;|&nbsp;{time}
                                </>
                            ),
                        })
                    )}
                />
                <ActivityTile
                    title={{
                        leftItem: <>2022&nbsp;({compiledMiles.number[2022]})</>,
                        rightItem: (
                            <>
                                {compiledMiles.distance[2022]}
                                &nbsp;|&nbsp;
                                {compiledMiles.elevation[2022]}
                            </>
                        ),
                    }}
                    entries={compiledMiles.miles[2022].map(
                        ({ id, name, dist, elev, time }: any) => ({
                            leftItem: name,
                            rightItem: (
                                <>
                                    {toMiles(dist)}&nbsp;|&nbsp;
                                    {toFeet(elev)}&nbsp;|&nbsp;{time}
                                </>
                            ),
                        })
                    )}
                />
                <ActivityTile
                    title={{
                        leftItem: <>2021&nbsp;({compiledMiles.number[2021]})</>,
                        rightItem: (
                            <>
                                {compiledMiles.distance[2021]}
                                &nbsp;|&nbsp;
                                {compiledMiles.elevation[2021]}
                            </>
                        ),
                    }}
                    entries={compiledMiles.miles[2021].map(
                        ({ id, name, dist, elev, time }: any) => ({
                            leftItem: name,
                            rightItem: (
                                <>
                                    {toMiles(dist)}&nbsp;|&nbsp;
                                    {toFeet(elev)}&nbsp;|&nbsp;{time}
                                </>
                            ),
                        })
                    )}
                />
                <ActivityTile
                    title={{
                        leftItem: <>2020&nbsp;({compiledMiles.number[2020]})</>,
                        rightItem: (
                            <>
                                {compiledMiles.distance[2020]}
                                &nbsp;|&nbsp;
                                {compiledMiles.elevation[2020]}
                            </>
                        ),
                    }}
                    entries={compiledMiles.miles[2020].map(
                        ({ id, name, dist, elev, time }: any) => ({
                            leftItem: name,
                            rightItem: (
                                <>
                                    {toMiles(dist)}&nbsp;|&nbsp;
                                    {toFeet(elev)}&nbsp;|&nbsp;{time}
                                </>
                            ),
                        })
                    )}
                />
            </Tile>
        </>
    )
}

export default SportResultTile
