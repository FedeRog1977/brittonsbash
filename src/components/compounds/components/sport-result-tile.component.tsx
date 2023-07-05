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
import { ActivityTile } from '../../elements'

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
                        rightItem: 'Statistics',
                    }}
                    entries={[
                        {
                            leftItem: (
                                <>Total&nbsp;({compiledRoadies.number.total})</>
                            ),
                            rightItem: (
                                <>
                                    {compiledRoadies.distance.total}
                                    &nbsp;|&nbsp;
                                    {compiledRoadies.elevation.total}
                                </>
                            ),
                        },
                        {
                            leftItem: (
                                <>2023&nbsp;({compiledRoadies.number[2023]})</>
                            ),
                            rightItem: (
                                <>
                                    {compiledRoadies.distance[2023]}
                                    &nbsp;|&nbsp;
                                    {compiledRoadies.elevation[2023]}
                                </>
                            ),
                        },
                        {
                            leftItem: (
                                <>2022&nbsp;({compiledRoadies.number[2022]})</>
                            ),
                            rightItem: (
                                <>
                                    {compiledRoadies.distance[2022]}
                                    &nbsp;|&nbsp;
                                    {compiledRoadies.elevation[2022]}
                                </>
                            ),
                        },
                        {
                            leftItem: (
                                <>2021&nbsp;({compiledRoadies.number[2021]})</>
                            ),
                            rightItem: (
                                <>
                                    {compiledRoadies.distance[2021]}
                                    &nbsp;|&nbsp;
                                    {compiledRoadies.elevation[2021]}
                                </>
                            ),
                        },
                        {
                            leftItem: (
                                <>2020&nbsp;({compiledRoadies.number[2020]})</>
                            ),
                            rightItem: (
                                <>
                                    {compiledRoadies.distance[2020]}
                                    &nbsp;|&nbsp;
                                    {compiledRoadies.elevation[2020]}
                                </>
                            ),
                        },
                    ]}
                />
                <ActivityTile
                    title={{
                        leftItem: (
                            <>2023&nbsp;({compiledRoadies.number[2023]})</>
                        ),
                        rightItem: (
                            <>
                                {compiledRoadies.distance[2023]}
                                &nbsp;|&nbsp;
                                {compiledRoadies.elevation[2023]}
                            </>
                        ),
                    }}
                    entries={compiledRoadies.roadies[2023].map(
                        ({ id, name, dist, elev, time, speed }: any) => ({
                            leftItem: name,
                            rightItem: (
                                <>
                                    {toMiles(dist)}&nbsp;|&nbsp;
                                    {toFeet(elev)}&nbsp;|&nbsp;{time}
                                    {speed && (
                                        <>
                                            &nbsp;|&nbsp;{toSpeed(speed, false)}
                                        </>
                                    )}
                                </>
                            ),
                        })
                    )}
                />
                <ActivityTile
                    title={{
                        leftItem: (
                            <>2022&nbsp;({compiledRoadies.number[2022]})</>
                        ),
                        rightItem: (
                            <>
                                {compiledRoadies.distance[2022]}
                                &nbsp;|&nbsp;
                                {compiledRoadies.elevation[2022]}
                            </>
                        ),
                    }}
                    entries={compiledRoadies.roadies[2022].map(
                        ({ id, name, dist, elev, time, speed }: any) => ({
                            leftItem: name,
                            rightItem: (
                                <>
                                    {toMiles(dist)}&nbsp;|&nbsp;
                                    {toFeet(elev)}&nbsp;|&nbsp;{time}
                                    {speed && (
                                        <>
                                            &nbsp;|&nbsp;{toSpeed(speed, false)}
                                        </>
                                    )}
                                </>
                            ),
                        })
                    )}
                />
                <ActivityTile
                    title={{
                        leftItem: (
                            <>2021&nbsp;({compiledRoadies.number[2021]})</>
                        ),
                        rightItem: (
                            <>
                                {compiledRoadies.distance[2021]}
                                &nbsp;|&nbsp;
                                {compiledRoadies.elevation[2021]}
                            </>
                        ),
                    }}
                    entries={compiledRoadies.roadies[2021].map(
                        ({ id, name, dist, elev, time, speed }: any) => ({
                            leftItem: name,
                            rightItem: (
                                <>
                                    {toMiles(dist)}&nbsp;|&nbsp;
                                    {toFeet(elev)}&nbsp;|&nbsp;{time}
                                    {speed && (
                                        <>
                                            &nbsp;|&nbsp;{toSpeed(speed, false)}
                                        </>
                                    )}
                                </>
                            ),
                        })
                    )}
                />
                <ActivityTile
                    title={{
                        leftItem: (
                            <>2020&nbsp;({compiledRoadies.number[2020]})</>
                        ),
                        rightItem: (
                            <>
                                {compiledRoadies.distance[2020]}
                                &nbsp;|&nbsp;
                                {compiledRoadies.elevation[2020]}
                            </>
                        ),
                    }}
                    entries={compiledRoadies.roadies[2020].map(
                        ({ id, name, dist, elev, time, speed }: any) => ({
                            leftItem: name,
                            rightItem: (
                                <>
                                    {toMiles(dist)}&nbsp;|&nbsp;
                                    {toFeet(elev)}&nbsp;|&nbsp;{time}
                                    {speed && (
                                        <>
                                            &nbsp;|&nbsp;{toSpeed(speed, false)}
                                        </>
                                    )}
                                </>
                            ),
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
                        rightItem: 'Statistics',
                    }}
                    entries={[
                        {
                            leftItem: (
                                <>
                                    Total&nbsp;({compiledProjects.number.total})
                                </>
                            ),
                            rightItem: (
                                <>
                                    {compiledProjects.distance.total}
                                    &nbsp;|&nbsp;
                                    {compiledProjects.elevation.total}
                                </>
                            ),
                        },
                        {
                            leftItem: (
                                <>2023&nbsp;({compiledProjects.number[2023]})</>
                            ),
                            rightItem: (
                                <>
                                    {compiledProjects.distance[2023]}
                                    &nbsp;|&nbsp;
                                    {compiledProjects.elevation[2023]}
                                </>
                            ),
                        },
                        {
                            leftItem: (
                                <>2022&nbsp;({compiledProjects.number[2022]})</>
                            ),
                            rightItem: (
                                <>
                                    {compiledProjects.distance[2022]}
                                    &nbsp;|&nbsp;
                                    {compiledProjects.elevation[2022]}
                                </>
                            ),
                        },
                        {
                            leftItem: (
                                <>2021&nbsp;({compiledProjects.number[2021]})</>
                            ),
                            rightItem: (
                                <>
                                    {compiledProjects.distance[2021]}
                                    &nbsp;|&nbsp;
                                    {compiledProjects.elevation[2021]}
                                </>
                            ),
                        },
                        {
                            leftItem: (
                                <>2020&nbsp;({compiledProjects.number[2020]})</>
                            ),
                            rightItem: (
                                <>
                                    {compiledProjects.distance[2020]}
                                    &nbsp;|&nbsp;
                                    {compiledProjects.elevation[2020]}
                                </>
                            ),
                        },
                    ]}
                />
                <ActivityTile
                    title={{
                        leftItem: (
                            <>2023&nbsp;({compiledProjects.number[2023]})</>
                        ),
                        rightItem: (
                            <>
                                {compiledProjects.distance[2023]}
                                &nbsp;|&nbsp;
                                {compiledProjects.elevation[2023]}
                            </>
                        ),
                    }}
                    entries={compiledProjects.projects[2023].map(
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
                        leftItem: (
                            <>2022&nbsp;({compiledProjects.number[2022]})</>
                        ),
                        rightItem: (
                            <>
                                {compiledProjects.distance[2022]}
                                &nbsp;|&nbsp;
                                {compiledProjects.elevation[2022]}
                            </>
                        ),
                    }}
                    entries={compiledProjects.projects[2022].map(
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
                        leftItem: (
                            <>2021&nbsp;({compiledProjects.number[2021]})</>
                        ),
                        rightItem: (
                            <>
                                {compiledProjects.distance[2021]}
                                &nbsp;|&nbsp;
                                {compiledProjects.elevation[2021]}
                            </>
                        ),
                    }}
                    entries={compiledProjects.projects[2021].map(
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
                        leftItem: (
                            <>2020&nbsp;({compiledProjects.number[2020]})</>
                        ),
                        rightItem: (
                            <>
                                {compiledProjects.distance[2020]}
                                &nbsp;|&nbsp;
                                {compiledProjects.elevation[2020]}
                            </>
                        ),
                    }}
                    entries={compiledProjects.projects[2020].map(
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
