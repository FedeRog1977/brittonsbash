import {
    Typography,
    Tile,
    ColumnTable,
    Spacing,
    Button,
} from '../../../bash-blocks'
import {
    compileProjects,
    compileMiles,
    compileRoadies,
    toMiles,
    toFeet,
    toSpeed,
    useScreenWidth,
    RoadieProps,
    ProjectProps,
    MilesProps,
} from '../../../../scripts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBiking,
    faMountainSun,
    faWalking,
    faTrophy,
} from '@fortawesome/free-solid-svg-icons'

export const SportResultTile = () => {
    const { isMobile } = useScreenWidth()
    const compiledRoadies = compileRoadies()
    const compiledProjects = compileProjects()
    const compiledMiles = compileMiles()

    return (
        <>
            <Tile type="solid" top>
                <Spacing
                    mL={isMobile ? 0 : 70}
                    mR={isMobile ? 0 : 70}
                    textAlign="center"
                >
                    <Button
                        typeType="t2"
                        buttonType="dense-clear"
                        func={() => {}}
                        funcResp={false}
                        content={<FontAwesomeIcon icon={faBiking} />}
                        subContent="Roadies"
                        color="darkerGrey"
                    />
                    <Button
                        typeType="t2"
                        buttonType="dense-clear"
                        func={() => {}}
                        funcResp={false}
                        content={<FontAwesomeIcon icon={faMountainSun} />}
                        subContent="Projects"
                        color="darkerGrey"
                    />
                    <Button
                        typeType="t2"
                        buttonType="dense-clear"
                        func={() => {}}
                        funcResp={false}
                        content={<FontAwesomeIcon icon={faWalking} />}
                        subContent="Miles"
                        color="darkerGrey"
                    />
                    <Button
                        typeType="t2"
                        buttonType="dense-clear"
                        func={() => {}}
                        funcResp={false}
                        content={<FontAwesomeIcon icon={faTrophy} />}
                        subContent="Tennis"
                        color="darkerGrey"
                    />
                </Spacing>
            </Tile>
            <Tile type="solid" dense={isMobile}>
                <Spacing
                    mL={isMobile ? 15 : 70}
                    mR={isMobile ? 15 : 70}
                    mB={isMobile ? 7.5 : 15}
                >
                    <Typography
                        type="h1"
                        content={<>Road Cycling &nbsp;&#8212;&nbsp; Roadies</>}
                        textAlign="left"
                    />
                </Spacing>
                <Spacing
                    mL={isMobile ? 15 : 70}
                    mR={isMobile ? 15 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <Typography type="h2" content="Summary" textAlign="left" />
                </Spacing>
                <Spacing
                    mL={isMobile ? 0 : 70}
                    mR={isMobile ? 0 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <ColumnTable
                        leftColumn={{
                            entries: ['Total', '2023', '2022', '2021', '2020'],
                        }}
                        rightColumns={[
                            {
                                title: 'Occurrences',
                                entries: [
                                    `${compiledRoadies.number.total}`,
                                    `${compiledRoadies.number[2023]}`,
                                    `${compiledRoadies.number[2022]}`,
                                    `${compiledRoadies.number[2021]}`,
                                    `${compiledRoadies.number[2020]}`,
                                ],
                            },
                            {
                                title: 'Distance',
                                entries: [
                                    compiledRoadies.distance.total as string,
                                    compiledRoadies.distance[2023] as string,
                                    compiledRoadies.distance[2022] as string,
                                    compiledRoadies.distance[2021] as string,
                                    compiledRoadies.distance[2020] as string,
                                ],
                            },
                            {
                                title: 'Elevation',
                                entries: [
                                    compiledRoadies.elevation.total as string,
                                    compiledRoadies.elevation[2023] as string,
                                    compiledRoadies.elevation[2022] as string,
                                    compiledRoadies.elevation[2021] as string,
                                    compiledRoadies.elevation[2020] as string,
                                ],
                            },
                        ]}
                    />
                </Spacing>
                <Spacing
                    mL={isMobile ? 15 : 70}
                    mR={isMobile ? 15 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <Typography type="h2" content="Routes" textAlign="left" />
                </Spacing>
                <Spacing
                    mL={isMobile ? 0 : 70}
                    mR={isMobile ? 0 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <ColumnTable
                        leftColumn={{
                            entries: ['Total', '2023', '2022', '2021', '2020'],
                        }}
                        rightColumns={[
                            {
                                title: 'Centuries',
                                entries: [
                                    `${compiledRoadies.centuries.total}`,
                                    `${compiledRoadies.centuries[2023]}`,
                                    `${compiledRoadies.centuries[2022]}`,
                                    `${compiledRoadies.centuries[2021]}`,
                                    `${compiledRoadies.centuries[2020]}`,
                                ],
                            },
                            {
                                title: 'Strathavens',
                                entries: [
                                    `${compiledRoadies.strathavens.total}`,
                                    `${compiledRoadies.strathavens[2023]}`,
                                    `${compiledRoadies.strathavens[2022]}`,
                                    `${compiledRoadies.strathavens[2021]}`,
                                    `${compiledRoadies.strathavens[2020]}`,
                                ],
                            },
                            {
                                title: 'Fenwick + Wind Farms',
                                entries: [
                                    `${compiledRoadies.fenwickWindfarms.total}`,
                                    `${compiledRoadies.fenwickWindfarms[2023]}`,
                                    `${compiledRoadies.fenwickWindfarms[2022]}`,
                                    `${compiledRoadies.fenwickWindfarms[2021]}`,
                                    `${compiledRoadies.fenwickWindfarms[2020]}`,
                                ],
                            },
                            {
                                title: 'Fenwicks',
                                entries: [
                                    `${compiledRoadies.fenwicks.total}`,
                                    `${compiledRoadies.fenwicks[2023]}`,
                                    `${compiledRoadies.fenwicks[2022]}`,
                                    `${compiledRoadies.fenwicks[2021]}`,
                                    `${compiledRoadies.fenwicks[2020]}`,
                                ],
                            },
                            {
                                title: 'Wind Farms',
                                entries: [
                                    `${compiledRoadies.windfarms.total}`,
                                    `${compiledRoadies.windfarms[2023]}`,
                                    `${compiledRoadies.windfarms[2022]}`,
                                    `${compiledRoadies.windfarms[2021]}`,
                                    `${compiledRoadies.windfarms[2020]}`,
                                ],
                            },
                            {
                                title: 'Thorntonhalls',
                                entries: [
                                    `${compiledRoadies.thorntonhalls.total}`,
                                    `${compiledRoadies.thorntonhalls[2023]}`,
                                    `${compiledRoadies.thorntonhalls[2022]}`,
                                    `${compiledRoadies.thorntonhalls[2021]}`,
                                    `${compiledRoadies.thorntonhalls[2020]}`,
                                ],
                            },
                        ]}
                    />
                </Spacing>
                <Spacing
                    mL={isMobile ? 15 : 70}
                    mR={isMobile ? 15 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <Typography type="h2" content="2023" textAlign="left" />
                </Spacing>
                <Spacing
                    mL={isMobile ? 0 : 70}
                    mR={isMobile ? 0 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <ColumnTable
                        leftColumn={{
                            entries: compiledRoadies.roadies[2023].map(
                                ({ name }: RoadieProps) => name
                            ),
                        }}
                        rightColumns={[
                            {
                                title: 'Distance',
                                entries: compiledRoadies.roadies[2023].map(
                                    ({ distance }: RoadieProps) =>
                                        toMiles(distance)
                                ),
                            },
                            {
                                title: 'Elevation',
                                entries: compiledRoadies.roadies[2023].map(
                                    ({ elevation }: RoadieProps) =>
                                        toFeet(elevation)
                                ),
                            },
                            {
                                title: 'Time',
                                entries: compiledRoadies.roadies[2023].map(
                                    ({ time }: RoadieProps) => time
                                ),
                            },
                            {
                                title: 'Speed',
                                entries: compiledRoadies.roadies[2023].map(
                                    ({ speed }: RoadieProps) =>
                                        speed ? (
                                            toSpeed(speed, false)
                                        ) : (
                                            <>&nbsp;</>
                                        )
                                ),
                            },
                        ]}
                        scroll
                    />
                </Spacing>
                <Spacing
                    mL={isMobile ? 15 : 70}
                    mR={isMobile ? 15 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <Typography type="h2" content="2022" textAlign="left" />
                </Spacing>
                <Spacing
                    mL={isMobile ? 0 : 70}
                    mR={isMobile ? 0 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <ColumnTable
                        leftColumn={{
                            entries: compiledRoadies.roadies[2022].map(
                                ({ name }: RoadieProps) => name
                            ),
                        }}
                        rightColumns={[
                            {
                                title: 'Distance',
                                entries: compiledRoadies.roadies[2022].map(
                                    ({ distance }: RoadieProps) =>
                                        toMiles(distance)
                                ),
                            },
                            {
                                title: 'Elevation',
                                entries: compiledRoadies.roadies[2022].map(
                                    ({ elevation }: RoadieProps) =>
                                        toFeet(elevation)
                                ),
                            },
                            {
                                title: 'Time',
                                entries: compiledRoadies.roadies[2022].map(
                                    ({ time }: RoadieProps) => time
                                ),
                            },
                            {
                                title: 'Speed',
                                entries: compiledRoadies.roadies[2022].map(
                                    ({ speed }: RoadieProps) =>
                                        speed ? (
                                            toSpeed(speed, false)
                                        ) : (
                                            <>&nbsp;</>
                                        )
                                ),
                            },
                        ]}
                        scroll
                    />
                </Spacing>
                <Spacing
                    mL={isMobile ? 15 : 70}
                    mR={isMobile ? 15 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <Typography type="h2" content="2021" textAlign="left" />
                </Spacing>
                <Spacing
                    mL={isMobile ? 0 : 70}
                    mR={isMobile ? 0 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <ColumnTable
                        leftColumn={{
                            entries: compiledRoadies.roadies[2021].map(
                                ({ name }: RoadieProps) => name
                            ),
                        }}
                        rightColumns={[
                            {
                                title: 'Distance',
                                entries: compiledRoadies.roadies[2021].map(
                                    ({ distance }: RoadieProps) =>
                                        toMiles(distance)
                                ),
                            },
                            {
                                title: 'Elevation',
                                entries: compiledRoadies.roadies[2021].map(
                                    ({ elevation }: RoadieProps) =>
                                        toFeet(elevation)
                                ),
                            },
                            {
                                title: 'Time',
                                entries: compiledRoadies.roadies[2021].map(
                                    ({ time }: RoadieProps) => time
                                ),
                            },
                            {
                                title: 'Speed',
                                entries: compiledRoadies.roadies[2021].map(
                                    ({ speed }: RoadieProps) =>
                                        speed ? (
                                            toSpeed(speed, false)
                                        ) : (
                                            <>&nbsp;</>
                                        )
                                ),
                            },
                        ]}
                        scroll
                    />
                </Spacing>
                <Spacing
                    mL={isMobile ? 15 : 70}
                    mR={isMobile ? 15 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <Typography type="h2" content="2020" textAlign="left" />
                </Spacing>
                <Spacing
                    mL={isMobile ? 0 : 70}
                    mR={isMobile ? 0 : 70}
                    mT={isMobile ? 7.5 : 15}
                >
                    <ColumnTable
                        leftColumn={{
                            entries: compiledRoadies.roadies[2020].map(
                                ({ name }: RoadieProps) => name
                            ),
                        }}
                        rightColumns={[
                            {
                                title: 'Distance',
                                entries: compiledRoadies.roadies[2020].map(
                                    ({ distance }: RoadieProps) =>
                                        toMiles(distance)
                                ),
                            },
                            {
                                title: 'Elevation',
                                entries: compiledRoadies.roadies[2020].map(
                                    ({ elevation }: RoadieProps) =>
                                        toFeet(elevation)
                                ),
                            },
                            {
                                title: 'Time',
                                entries: compiledRoadies.roadies[2020].map(
                                    ({ time }: RoadieProps) => time
                                ),
                            },
                            {
                                title: 'Speed',
                                entries: compiledRoadies.roadies[2020].map(
                                    ({ speed }: RoadieProps) =>
                                        speed ? (
                                            toSpeed(speed, false)
                                        ) : (
                                            <>&nbsp;</>
                                        )
                                ),
                            },
                        ]}
                        scroll
                    />
                </Spacing>
            </Tile>
            <Tile type="solid" dense={isMobile}>
                <Spacing
                    mL={isMobile ? 15 : 70}
                    mR={isMobile ? 15 : 70}
                    mB={isMobile ? 7.5 : 15}
                >
                    <Typography
                        type="h1"
                        content={<>Hiking &nbsp;&#8212;&nbsp; Projects</>}
                        textAlign="left"
                    />
                </Spacing>
                <Spacing
                    mL={isMobile ? 15 : 70}
                    mR={isMobile ? 15 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <Typography type="h2" content="Summary" textAlign="left" />
                </Spacing>
                <Spacing
                    mL={isMobile ? 0 : 70}
                    mR={isMobile ? 0 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <ColumnTable
                        leftColumn={{
                            entries: ['Total', '2023', '2022', '2021', '2020'],
                        }}
                        rightColumns={[
                            {
                                title: 'Occurrences',
                                entries: [
                                    `${compiledProjects.number.total}`,
                                    `${compiledProjects.number[2023]}`,
                                    `${compiledProjects.number[2022]}`,
                                    `${compiledProjects.number[2021]}`,
                                    `${compiledProjects.number[2020]}`,
                                ],
                            },
                            {
                                title: 'Distance',
                                entries: [
                                    compiledProjects.distance.total as string,
                                    compiledProjects.distance[2023] as string,
                                    compiledProjects.distance[2022] as string,
                                    compiledProjects.distance[2021] as string,
                                    compiledProjects.distance[2020] as string,
                                ],
                            },
                            {
                                title: 'Elevation',
                                entries: [
                                    compiledProjects.elevation.total as string,
                                    compiledProjects.elevation[2023] as string,
                                    compiledProjects.elevation[2022] as string,
                                    compiledProjects.elevation[2021] as string,
                                    compiledProjects.elevation[2020] as string,
                                ],
                            },
                        ]}
                    />
                </Spacing>
                <Spacing
                    mL={isMobile ? 15 : 70}
                    mR={isMobile ? 15 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <Typography type="h2" content="Hills" textAlign="left" />
                </Spacing>
                <Spacing
                    mL={isMobile ? 15 : 70}
                    mR={isMobile ? 15 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <ColumnTable
                        leftColumn={{
                            entries: [
                                'Unique',
                                'Total',
                                '2023',
                                '2022',
                                '2021',
                                '2020',
                            ],
                        }}
                        rightColumns={[
                            {
                                title: 'Islands',
                                entries: [
                                    `${compiledProjects.islands.number.unique}`,
                                    `${compiledProjects.islands.number.total}`,
                                    `${compiledProjects.islands.number[2023]}`,
                                    `${compiledProjects.islands.number[2022]}`,
                                    `${compiledProjects.islands.number[2021]}`,
                                    `${compiledProjects.islands.number[2020]}`,
                                ],
                            },
                            {
                                title: 'Munros',
                                entries: [
                                    `${compiledProjects.munros.number.unique}`,
                                    `${compiledProjects.munros.number.total}`,
                                    `${compiledProjects.munros.number[2023]}`,
                                    `${compiledProjects.munros.number[2022]}`,
                                    `${compiledProjects.munros.number[2021]}`,
                                    `${compiledProjects.munros.number[2020]}`,
                                ],
                            },
                            {
                                title: 'Munro Tops',
                                entries: [
                                    `${compiledProjects.munroTops.number.unique}`,
                                    `${compiledProjects.munroTops.number.total}`,
                                    `${compiledProjects.munroTops.number[2023]}`,
                                    `${compiledProjects.munroTops.number[2022]}`,
                                    `${compiledProjects.munroTops.number[2021]}`,
                                    `${compiledProjects.munroTops.number[2020]}`,
                                ],
                            },
                            {
                                title: 'Corbetts',
                                entries: [
                                    `${compiledProjects.corbetts.number.unique}`,
                                    `${compiledProjects.corbetts.number.total}`,
                                    `${compiledProjects.corbetts.number[2023]}`,
                                    `${compiledProjects.corbetts.number[2022]}`,
                                    `${compiledProjects.corbetts.number[2021]}`,
                                    `${compiledProjects.corbetts.number[2020]}`,
                                ],
                            },
                            {
                                title: 'Corbett Tops',
                                entries: [
                                    `${compiledProjects.corbettTops.number.unique}`,
                                    `${compiledProjects.corbettTops.number.total}`,
                                    `${compiledProjects.corbettTops.number[2023]}`,
                                    `${compiledProjects.corbettTops.number[2022]}`,
                                    `${compiledProjects.corbettTops.number[2021]}`,
                                    `${compiledProjects.corbettTops.number[2020]}`,
                                ],
                            },
                            {
                                title: 'Grahams',
                                entries: [
                                    `${compiledProjects.grahams.number.unique}`,
                                    `${compiledProjects.grahams.number.total}`,
                                    `${compiledProjects.grahams.number[2023]}`,
                                    `${compiledProjects.grahams.number[2022]}`,
                                    `${compiledProjects.grahams.number[2021]}`,
                                    `${compiledProjects.grahams.number[2020]}`,
                                ],
                            },
                            {
                                title: 'Sub2000s',
                                entries: [
                                    `${compiledProjects.subTwos.number.unique}`,
                                    `${compiledProjects.subTwos.number.total}`,
                                    `${compiledProjects.subTwos.number[2023]}`,
                                    `${compiledProjects.subTwos.number[2022]}`,
                                    `${compiledProjects.subTwos.number[2021]}`,
                                    `${compiledProjects.subTwos.number[2020]}`,
                                ],
                            },
                            {
                                title: 'Donalds',
                                entries: [
                                    `${compiledProjects.donalds.number.unique}`,
                                    `${compiledProjects.donalds.number.total}`,
                                    `${compiledProjects.donalds.number[2023]}`,
                                    `${compiledProjects.donalds.number[2022]}`,
                                    `${compiledProjects.donalds.number[2021]}`,
                                    `${compiledProjects.donalds.number[2020]}`,
                                ],
                            },
                        ]}
                    />
                </Spacing>
                <Spacing
                    mL={isMobile ? 15 : 70}
                    mR={isMobile ? 15 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <Typography type="h2" content="2023" textAlign="left" />
                </Spacing>
                <Spacing
                    mL={isMobile ? 0 : 70}
                    mR={isMobile ? 0 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <ColumnTable
                        leftColumn={{
                            entries: compiledProjects.projects[2023].map(
                                ({ name }: ProjectProps) => name
                            ),
                        }}
                        rightColumns={[
                            {
                                title: 'Distance',
                                entries: compiledProjects.projects[2023].map(
                                    ({ distance }: ProjectProps) =>
                                        toMiles(distance)
                                ),
                            },
                            {
                                title: 'Elevation',
                                entries: compiledProjects.projects[2023].map(
                                    ({ elevation }: ProjectProps) =>
                                        toFeet(elevation)
                                ),
                            },
                            {
                                title: 'Time',
                                entries: compiledProjects.projects[2023].map(
                                    ({ time }: ProjectProps) => time
                                ),
                            },
                        ]}
                        scroll
                    />
                </Spacing>
                <Spacing
                    mL={isMobile ? 15 : 70}
                    mR={isMobile ? 15 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <Typography type="h2" content="2022" textAlign="left" />
                </Spacing>
                <Spacing
                    mL={isMobile ? 0 : 70}
                    mR={isMobile ? 0 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <ColumnTable
                        leftColumn={{
                            entries: compiledProjects.projects[2022].map(
                                ({ name }: ProjectProps) => name
                            ),
                        }}
                        rightColumns={[
                            {
                                title: 'Distance',
                                entries: compiledProjects.projects[2022].map(
                                    ({ distance }: ProjectProps) =>
                                        toMiles(distance)
                                ),
                            },
                            {
                                title: 'Elevation',
                                entries: compiledProjects.projects[2022].map(
                                    ({ elevation }: ProjectProps) =>
                                        toFeet(elevation)
                                ),
                            },
                            {
                                title: 'Time',
                                entries: compiledProjects.projects[2022].map(
                                    ({ time }: ProjectProps) => time
                                ),
                            },
                        ]}
                        scroll
                    />
                </Spacing>
                <Spacing
                    mL={isMobile ? 15 : 70}
                    mR={isMobile ? 15 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <Typography type="h2" content="2021" textAlign="left" />
                </Spacing>
                <Spacing
                    mL={isMobile ? 0 : 70}
                    mR={isMobile ? 0 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <ColumnTable
                        leftColumn={{
                            entries: compiledProjects.projects[2021].map(
                                ({ name }: ProjectProps) => name
                            ),
                        }}
                        rightColumns={[
                            {
                                title: 'Distance',
                                entries: compiledProjects.projects[2021].map(
                                    ({ distance }: ProjectProps) =>
                                        toMiles(distance)
                                ),
                            },
                            {
                                title: 'Elevation',
                                entries: compiledProjects.projects[2021].map(
                                    ({ elevation }: ProjectProps) =>
                                        toFeet(elevation)
                                ),
                            },
                            {
                                title: 'Time',
                                entries: compiledProjects.projects[2021].map(
                                    ({ time }: ProjectProps) => time
                                ),
                            },
                        ]}
                        scroll
                    />
                </Spacing>
                <Spacing
                    mL={isMobile ? 15 : 70}
                    mR={isMobile ? 15 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <Typography type="h2" content="2020" textAlign="left" />
                </Spacing>
                <Spacing
                    mL={isMobile ? 0 : 70}
                    mR={isMobile ? 0 : 70}
                    mT={isMobile ? 7.5 : 15}
                >
                    <ColumnTable
                        leftColumn={{
                            entries: compiledProjects.projects[2020].map(
                                ({ name }: ProjectProps) => name
                            ),
                        }}
                        rightColumns={[
                            {
                                title: 'Distance',
                                entries: compiledProjects.projects[2020].map(
                                    ({ distance }: ProjectProps) =>
                                        toMiles(distance)
                                ),
                            },
                            {
                                title: 'Elevation',
                                entries: compiledProjects.projects[2020].map(
                                    ({ elevation }: ProjectProps) =>
                                        toFeet(elevation)
                                ),
                            },
                            {
                                title: 'Time',
                                entries: compiledProjects.projects[2020].map(
                                    ({ time }: ProjectProps) => time
                                ),
                            },
                        ]}
                        scroll
                    />
                </Spacing>
            </Tile>
            <Tile type="solid" dense={isMobile}>
                <Spacing
                    mL={isMobile ? 15 : 70}
                    mR={isMobile ? 15 : 70}
                    mB={isMobile ? 7.5 : 15}
                >
                    <Typography
                        type="h1"
                        content={<>Walking &nbsp;&#8212;&nbsp; Miles</>}
                        textAlign="left"
                    />
                </Spacing>
                <Spacing
                    mL={isMobile ? 15 : 70}
                    mR={isMobile ? 15 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <Typography type="h2" content="Summary" textAlign="left" />
                </Spacing>
                <Spacing
                    mL={isMobile ? 0 : 70}
                    mR={isMobile ? 0 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <ColumnTable
                        leftColumn={{
                            entries: ['Total', '2023', '2022', '2021', '2020'],
                        }}
                        rightColumns={[
                            {
                                title: 'Occurrences',
                                entries: [
                                    `${compiledMiles.number.total}`,
                                    `${compiledMiles.number[2023]}`,
                                    `${compiledMiles.number[2022]}`,
                                    `${compiledMiles.number[2021]}`,
                                    `${compiledMiles.number[2020]}`,
                                ],
                            },
                            {
                                title: 'Distance',
                                entries: [
                                    compiledMiles.distance.total as string,
                                    compiledMiles.distance[2023] as string,
                                    compiledMiles.distance[2022] as string,
                                    compiledMiles.distance[2021] as string,
                                    compiledMiles.distance[2020] as string,
                                ],
                            },
                            {
                                title: 'Elevation',
                                entries: [
                                    compiledMiles.elevation.total as string,
                                    compiledMiles.elevation[2023] as string,
                                    compiledMiles.elevation[2022] as string,
                                    compiledMiles.elevation[2021] as string,
                                    compiledMiles.elevation[2020] as string,
                                ],
                            },
                        ]}
                    />
                </Spacing>
                <Spacing
                    mL={isMobile ? 15 : 70}
                    mR={isMobile ? 15 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <Typography type="h2" content="Routes" textAlign="left" />
                </Spacing>
                <Spacing
                    mL={isMobile ? 0 : 70}
                    mR={isMobile ? 0 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <ColumnTable
                        leftColumn={{
                            entries: ['Total', '2023', '2022', '2021', '2020'],
                        }}
                        rightColumns={[
                            {
                                title: 'Wind Farms',
                                entries: [
                                    `${compiledMiles.windfarms.total}`,
                                    `${compiledMiles.windfarms[2023]}`,
                                    `${compiledMiles.windfarms[2022]}`,
                                    `${compiledMiles.windfarms[2021]}`,
                                    `${compiledMiles.windfarms[2020]}`,
                                ],
                            },
                            {
                                title: 'Thorntonhalls',
                                entries: [
                                    `${compiledMiles.thorntonhalls.total}`,
                                    `${compiledMiles.thorntonhalls[2023]}`,
                                    `${compiledMiles.thorntonhalls[2022]}`,
                                    `${compiledMiles.thorntonhalls[2021]}`,
                                    `${compiledMiles.thorntonhalls[2020]}`,
                                ],
                            },
                            {
                                title: 'Waterfoots',
                                entries: [
                                    `${compiledMiles.waterfoots.total}`,
                                    `${compiledMiles.waterfoots[2023]}`,
                                    `${compiledMiles.waterfoots[2022]}`,
                                    `${compiledMiles.waterfoots[2021]}`,
                                    `${compiledMiles.waterfoots[2020]}`,
                                ],
                            },
                        ]}
                    />
                </Spacing>
                <Spacing
                    mL={isMobile ? 15 : 70}
                    mR={isMobile ? 15 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <Typography type="h2" content="2023" textAlign="left" />
                </Spacing>
                <Spacing
                    mL={isMobile ? 15 : 70}
                    mR={isMobile ? 15 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <ColumnTable
                        leftColumn={{
                            entries: compiledMiles.miles[2023].map(
                                ({ name }: MilesProps) => name
                            ),
                        }}
                        rightColumns={[
                            {
                                title: 'Distance',
                                entries: compiledMiles.miles[2023].map(
                                    ({ distance }: MilesProps) =>
                                        toMiles(distance)
                                ),
                            },
                            {
                                title: 'Elevation',
                                entries: compiledMiles.miles[2023].map(
                                    ({ elevation }: MilesProps) =>
                                        toFeet(elevation)
                                ),
                            },
                            {
                                title: 'Time',
                                entries: compiledMiles.miles[2023].map(
                                    ({ time }: MilesProps) => time
                                ),
                            },
                        ]}
                        scroll
                    />
                </Spacing>
                <Spacing
                    mL={isMobile ? 15 : 70}
                    mR={isMobile ? 15 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <Typography type="h2" content="2022" textAlign="left" />
                </Spacing>
                <Spacing
                    mL={isMobile ? 15 : 70}
                    mR={isMobile ? 15 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <ColumnTable
                        leftColumn={{
                            entries: compiledMiles.miles[2022].map(
                                ({ name }: MilesProps) => name
                            ),
                        }}
                        rightColumns={[
                            {
                                title: 'Distance',
                                entries: compiledMiles.miles[2022].map(
                                    ({ distance }: MilesProps) =>
                                        toMiles(distance)
                                ),
                            },
                            {
                                title: 'Elevation',
                                entries: compiledMiles.miles[2022].map(
                                    ({ elevation }: MilesProps) =>
                                        toFeet(elevation)
                                ),
                            },
                            {
                                title: 'Time',
                                entries: compiledMiles.miles[2022].map(
                                    ({ time }: MilesProps) => time
                                ),
                            },
                        ]}
                        scroll
                    />
                </Spacing>
                <Spacing
                    mL={isMobile ? 15 : 70}
                    mR={isMobile ? 15 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <Typography type="h2" content="2021" textAlign="left" />
                </Spacing>
                <Spacing
                    mL={isMobile ? 0 : 70}
                    mR={isMobile ? 0 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <ColumnTable
                        leftColumn={{
                            entries: compiledMiles.miles[2021].map(
                                ({ name }: MilesProps) => name
                            ),
                        }}
                        rightColumns={[
                            {
                                title: 'Distance',
                                entries: compiledMiles.miles[2021].map(
                                    ({ distance }: MilesProps) =>
                                        toMiles(distance)
                                ),
                            },
                            {
                                title: 'Elevation',
                                entries: compiledMiles.miles[2021].map(
                                    ({ elevation }: MilesProps) =>
                                        toFeet(elevation)
                                ),
                            },
                            {
                                title: 'Time',
                                entries: compiledMiles.miles[2021].map(
                                    ({ time }: MilesProps) => time
                                ),
                            },
                        ]}
                        scroll
                    />
                </Spacing>
                <Spacing
                    mL={isMobile ? 15 : 70}
                    mR={isMobile ? 15 : 70}
                    mT={isMobile ? 7.5 : 15}
                    mB={isMobile ? 7.5 : 15}
                >
                    <Typography type="h2" content="2020" textAlign="left" />
                </Spacing>
                <Spacing
                    mL={isMobile ? 0 : 70}
                    mR={isMobile ? 0 : 70}
                    mT={isMobile ? 7.5 : 15}
                >
                    <ColumnTable
                        leftColumn={{
                            entries: compiledMiles.miles[2020].map(
                                ({ name }: MilesProps) => name
                            ),
                        }}
                        rightColumns={[
                            {
                                title: 'Distance',
                                entries: compiledMiles.miles[2020].map(
                                    ({ distance }: MilesProps) =>
                                        toMiles(distance)
                                ),
                            },
                            {
                                title: 'Elevation',
                                entries: compiledMiles.miles[2020].map(
                                    ({ elevation }: MilesProps) =>
                                        toFeet(elevation)
                                ),
                            },
                            {
                                title: 'Time',
                                entries: compiledMiles.miles[2020].map(
                                    ({ time }: MilesProps) => time
                                ),
                            },
                        ]}
                        scroll
                    />
                </Spacing>
            </Tile>
        </>
    )
}

export default SportResultTile
