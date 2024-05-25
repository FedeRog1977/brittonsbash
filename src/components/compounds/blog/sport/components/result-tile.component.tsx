import {
    Typography,
    Tile,
    ColumnTable,
    Spacing,
    Button,
    Grid,
} from '../../../../bash-blocks'
import {
    toMiles,
    toFeet,
    toSpeed,
    useScreenWidth,
    RoadieProps,
    ProjectProps,
    MilesProps,
    fromBritishGridProjection,
    useShowElement,
    CompiledMilesProps,
    CompiledProjectProps,
    CompiledRoadieProps,
} from '../../../../../scripts'
import { FC, useState } from 'react'
import { Column } from '../../../../bash-blocks/partials/table/types/column.type'

export type ResultTileProps = {
    title: string
    subTitle: string
    description: string
    routes: Column[]
    isRoadies: boolean
    isProjects: boolean
    isMiles: boolean
    sportData: CompiledRoadieProps | CompiledProjectProps | CompiledMilesProps
    sport2024: RoadieProps[] | ProjectProps[] | MilesProps[]
    sport2023: RoadieProps[] | ProjectProps[] | MilesProps[]
    sport2022: RoadieProps[] | ProjectProps[] | MilesProps[]
    sport2021: RoadieProps[] | ProjectProps[] | MilesProps[]
    sport2020: RoadieProps[] | ProjectProps[] | MilesProps[]
}

export const ResultTile: FC<ResultTileProps> = ({
    title,
    subTitle,
    description,
    routes,
    isRoadies,
    isProjects,
    isMiles,
    sportData,
    sport2024,
    sport2023,
    sport2022,
    sport2021,
    sport2020,
}) => {
    const { isMobile } = useScreenWidth()
    const [sportYearData, setSportYearData] = useState(sport2024)

    const { showElement: showMunros, setShowElement: setShowMunros } =
        useShowElement()

    return (
        <Tile type="solid">
            <Spacing mB={isMobile ? 7.5 : 15}>
                <Typography type="t1" textAlign="center">
                    {title}
                </Typography>
            </Spacing>
            <Spacing mT={isMobile ? 7.5 : 15} mB={isMobile ? 7.5 : 15}>
                <Typography type="h4" color="mediumGrey" textAlign="center">
                    {subTitle}
                </Typography>
            </Spacing>
            <Spacing mT={isMobile ? 7.5 : 15} mB={isMobile ? 7.5 : 15}>
                <Typography type="body" textAlign="left">
                    {description}
                </Typography>
            </Spacing>
            <Spacing mT={isMobile ? 7.5 : 15} mB={isMobile ? 7.5 : 15}>
                <Typography type="h2" textAlign="left">
                    Summary
                </Typography>
            </Spacing>
            <Spacing
                mX={isMobile ? -40 : 0}
                mT={isMobile ? 7.5 : 15}
                mB={isMobile ? 7.5 : 15}
            >
                <ColumnTable
                    leftColumn={{
                        entries: [
                            'Total',
                            '2024',
                            '2023',
                            '2022',
                            '2021',
                            '2020',
                        ],
                    }}
                    rightColumns={[
                        {
                            title: 'Occurrences',
                            entries: [
                                `${sportData.number.total}`,
                                `${sportData.number[2024]}`,
                                `${sportData.number[2023]}`,
                                `${sportData.number[2022]}`,
                                `${sportData.number[2021]}`,
                                `${sportData.number[2020]}`,
                            ],
                        },
                        {
                            title: 'Distance',
                            entries: [
                                sportData.distance.total as string,
                                sportData.distance[2024] as string,
                                sportData.distance[2023] as string,
                                sportData.distance[2022] as string,
                                sportData.distance[2021] as string,
                                sportData.distance[2020] as string,
                            ],
                        },
                        {
                            title: 'Elevation',
                            entries: [
                                sportData.elevation.total as string,
                                sportData.elevation[2024] as string,
                                sportData.elevation[2023] as string,
                                sportData.elevation[2022] as string,
                                sportData.elevation[2021] as string,
                                sportData.elevation[2020] as string,
                            ],
                        },
                    ]}
                />
            </Spacing>
            <Spacing mT={isMobile ? 7.5 : 15} mB={isMobile ? 7.5 : 15}>
                <Typography type="h2" textAlign="left">
                    {isProjects ? 'Hills' : 'Routes'}
                </Typography>
            </Spacing>
            <Spacing
                mX={isMobile ? -40 : 0}
                mT={isMobile ? 7.5 : 15}
                mB={isMobile ? 7.5 : 15}
            >
                <ColumnTable
                    leftColumn={{
                        entries: [
                            isProjects ? 'Unique' : '',
                            'Total',
                            '2024',
                            '2023',
                            '2022',
                            '2021',
                            '2020',
                        ],
                    }}
                    rightColumns={routes}
                />
            </Spacing>
            <Spacing mT={isMobile ? 7.5 : 15} mB={isMobile ? 7.5 : 15}>
                <Grid alignColumns="1fr 1fr 1fr 1fr 1fr" justifyItems="center">
                    <Grid columnItem={[1, 5]}>
                        <Button
                            typeVariant="h2"
                            func={() => setSportYearData(sport2024)}
                            funcResp={Boolean(sportYearData === sport2024)}
                            content="2024"
                        />
                    </Grid>
                    <Grid columnItem={[2, 5]}>
                        <Button
                            typeVariant="h2"
                            func={() => setSportYearData(sport2023)}
                            funcResp={Boolean(sportYearData === sport2023)}
                            content="2023"
                        />
                    </Grid>
                    <Grid columnItem={[3, 5]}>
                        <Button
                            typeVariant="h2"
                            func={() => setSportYearData(sport2022)}
                            funcResp={Boolean(sportYearData === sport2022)}
                            content="2022"
                        />
                    </Grid>
                    <Grid columnItem={[4, 5]}>
                        <Button
                            typeVariant="h2"
                            func={() => setSportYearData(sport2021)}
                            funcResp={Boolean(sportYearData === sport2021)}
                            content="2021"
                        />
                    </Grid>
                    <Grid columnItem={[5, 5]}>
                        <Button
                            typeVariant="h2"
                            func={() => setSportYearData(sport2020)}
                            funcResp={Boolean(sportYearData === sport2020)}
                            content="2020"
                        />
                    </Grid>
                </Grid>
            </Spacing>
            <Spacing
                mX={isMobile ? -40 : 0}
                mT={isMobile ? 7.5 : 15}
                mB={isMobile ? 7.5 : 15}
            >
                <ColumnTable
                    leftColumn={{
                        entries: sportYearData.map(
                            ({
                                name,
                            }: RoadieProps | ProjectProps | MilesProps) => (
                                <a
                                    href="#"
                                    onClick={() => {
                                        setShowMunros(!showMunros)
                                    }}
                                >
                                    {name}
                                </a>
                            )
                        ),
                    }}
                    rightColumns={[
                        {
                            title: 'Distance',
                            entries: sportYearData.map(
                                ({
                                    distance,
                                }: RoadieProps | ProjectProps | MilesProps) =>
                                    toMiles(distance)
                            ),
                        },
                        {
                            title: 'Elevation',
                            entries: sportYearData.map(
                                ({
                                    elevation,
                                }: RoadieProps | ProjectProps | MilesProps) =>
                                    toFeet(elevation)
                            ),
                        },
                        {
                            title: 'Time',
                            entries: sportYearData.map(
                                ({
                                    time,
                                }: RoadieProps | ProjectProps | MilesProps) =>
                                    time
                            ),
                        },
                        ...(isRoadies
                            ? [
                                  {
                                      title: 'Speed',
                                      entries: sportYearData.map(
                                          ({ speed }: RoadieProps) =>
                                              speed ? (
                                                  toSpeed(speed, false)
                                              ) : (
                                                  <>&nbsp;</>
                                              )
                                      ),
                                  },
                              ]
                            : []),
                    ]}
                    scroll
                />
            </Spacing>
        </Tile>
    )
}
