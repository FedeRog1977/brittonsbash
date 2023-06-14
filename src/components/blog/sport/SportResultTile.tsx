import Typography from '../../../bashBlocks/elements/Typography'
import '../instant-gram/styles/InstantGramTile.css'
import Tile from '../../../bashBlocks/components/Tile'
import compileProjects from '../../../scripts/compilers/compileProjects'
import compileMiles from '../../../scripts/compilers/compileMiles'
import compileRoadies from '../../../scripts/compilers/compileRoadies'
import { toMiles } from '../../../scripts/formatters/toMiles'
import { toFeet } from '../../../scripts/formatters/toFeet'
import { toSpeed } from '../../../scripts/formatters/toSpeed'

const SportResultTile = () =>
    // { event, sportEvent, showSportEvent }: any
    {
        // const [showDropDown, setShowDropDown] = useState(false);

        // const handleClick = () => {
        //     if (showDropDown === false) {
        //         setShowDropDown(true);
        //     } else {
        //         setShowDropDown(false);
        //     }
        // }

        // TESTING

        const compiledRoadies = compileRoadies()

        return (
            <>
                <Tile type="solid">
                    <>
                        <Typography
                            type="body"
                            content={
                                <>
                                    <Typography
                                        type="h2"
                                        content={
                                            <>
                                                Roadies:{' '}
                                                {compiledRoadies.number.total}
                                            </>
                                        }
                                    />
                                    <Typography
                                        type="h3"
                                        content={
                                            <>
                                                {compiledRoadies.distance.total}
                                                &nbsp;&nbsp;
                                                {
                                                    compiledRoadies.elevation
                                                        .total
                                                }
                                            </>
                                        }
                                    />
                                </>
                            }
                            paragraphMargins
                        />
                        <Typography
                            type="body"
                            content={
                                <>
                                    <Typography
                                        type="h3"
                                        content={
                                            <>
                                                2023:{' '}
                                                {compiledRoadies.number[2023]}
                                            </>
                                        }
                                    />
                                    <Typography
                                        type="h4"
                                        content={
                                            <>
                                                {compiledRoadies.distance[2023]}
                                                &nbsp;&nbsp;
                                                {
                                                    compiledRoadies
                                                        .elevation[2023]
                                                }
                                            </>
                                        }
                                    />
                                </>
                            }
                            paragraphMargins
                        />
                        {compiledRoadies.roadies[2023].map(
                            ({ id, name, dist, elev, time, speed }: any) => (
                                <div key={id}>
                                    <Typography
                                        type="h4"
                                        content={<>{name}:</>}
                                        inline
                                        boldFace
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{toMiles(dist)}</>}
                                        inline
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{toFeet(elev)}</>}
                                        inline
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{time}</>}
                                        inline
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{speed && toSpeed(speed)}</>}
                                        inline
                                    />
                                </div>
                            )
                        )}
                        <Typography
                            type="body"
                            content={
                                <>
                                    <Typography
                                        type="h3"
                                        content={
                                            <>
                                                2022:{' '}
                                                {compiledRoadies.number[2022]}
                                            </>
                                        }
                                    />
                                    <Typography
                                        type="h4"
                                        content={
                                            <>
                                                {compiledRoadies.distance[2022]}
                                                &nbsp;&nbsp;
                                                {
                                                    compiledRoadies
                                                        .elevation[2022]
                                                }
                                            </>
                                        }
                                    />
                                </>
                            }
                            paragraphMargins
                        />
                        {compiledRoadies.roadies[2022].map(
                            ({ id, name, dist, elev, time }: any) => (
                                <div key={id}>
                                    <Typography
                                        type="h4"
                                        content={<>{name}:</>}
                                        inline
                                        boldFace
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{toMiles(dist)}</>}
                                        inline
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{toFeet(elev)}</>}
                                        inline
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{time}</>}
                                        inline
                                    />
                                </div>
                            )
                        )}
                        <Typography
                            type="body"
                            content={
                                <>
                                    <Typography
                                        type="h3"
                                        content={
                                            <>
                                                2021:{' '}
                                                {compiledRoadies.number[2021]}
                                            </>
                                        }
                                    />
                                    <Typography
                                        type="h4"
                                        content={
                                            <>
                                                {compiledRoadies.distance[2021]}
                                                &nbsp;&nbsp;
                                                {
                                                    compiledRoadies
                                                        .elevation[2021]
                                                }
                                            </>
                                        }
                                    />
                                </>
                            }
                            paragraphMargins
                        />
                        {compiledRoadies.roadies[2021].map(
                            ({ id, name, dist, elev, time }: any) => (
                                <div key={id}>
                                    <Typography
                                        type="h4"
                                        content={<>{name}:</>}
                                        inline
                                        boldFace
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{toMiles(dist)}</>}
                                        inline
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{toFeet(elev)}</>}
                                        inline
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{time}</>}
                                        inline
                                    />
                                </div>
                            )
                        )}
                        <Typography
                            type="body"
                            content={
                                <>
                                    <Typography
                                        type="h3"
                                        content={
                                            <>
                                                2020:{' '}
                                                {compiledRoadies.number[2020]}
                                            </>
                                        }
                                    />
                                    <Typography
                                        type="h4"
                                        content={
                                            <>
                                                {compiledRoadies.distance[2020]}
                                                &nbsp;&nbsp;
                                                {
                                                    compiledRoadies
                                                        .elevation[2020]
                                                }
                                            </>
                                        }
                                    />
                                </>
                            }
                            paragraphMargins
                        />
                        {compiledRoadies.roadies[2020].map(
                            ({ id, name, dist, elev, time }: any) => (
                                <div key={id}>
                                    <Typography
                                        type="h4"
                                        content={<>{name}:</>}
                                        inline
                                        boldFace
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{toMiles(dist)}</>}
                                        inline
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{toFeet(elev)}</>}
                                        inline
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{time}</>}
                                        inline
                                    />
                                </div>
                            )
                        )}
                    </>
                </Tile>
                {/* <Tile type="solid">
                    <>
                        <Typography
                            type="body"
                            content={
                                <>
                                    <Typography
                                        type="h2"
                                        content={
                                            <>
                                                Projects:{' '}
                                                {
                                                    compileProjects()
                                                        .projectsN[0].total
                                                }
                                            </>
                                        }
                                    />
                                    <Typography
                                        type="h3"
                                        content={
                                            <>
                                                {
                                                    compileProjects()
                                                        .projectsMiles[0].total
                                                }
                                                &nbsp;&nbsp;
                                                {
                                                    compileProjects()
                                                        .projectsElev[0].total
                                                }
                                            </>
                                        }
                                    />
                                </>
                            }
                            paragraphMargins
                        />
                        <Typography
                            type="body"
                            content={
                                <>
                                    <Typography
                                        type="h3"
                                        content={
                                            <>
                                                2023:{' '}
                                                {
                                                    compileProjects()
                                                        .projectsN[0][2023]
                                                }
                                            </>
                                        }
                                    />
                                    <Typography
                                        type="h4"
                                        content={
                                            <>
                                                {
                                                    compileProjects()
                                                        .projectsMiles[0][2023]
                                                }
                                                &nbsp;&nbsp;
                                                {
                                                    compileProjects()
                                                        .projectsElev[0][2023]
                                                }
                                            </>
                                        }
                                    />
                                </>
                            }
                            paragraphMargins
                        />
                        {compileProjects().projects[0][2023].map(
                            ({ id, name, dist, elev, time }: any) => (
                                <div key={id}>
                                    <Typography
                                        type="h4"
                                        content={<>{name}:</>}
                                        inline
                                        boldFace
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{toMiles(dist)}</>}
                                        inline
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{toFeet(elev)}</>}
                                        inline
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{time}</>}
                                        inline
                                    />
                                </div>
                            )
                        )}
                        <Typography
                            type="body"
                            content={
                                <>
                                    <Typography
                                        type="h3"
                                        content={
                                            <>
                                                2022:{' '}
                                                {
                                                    compileProjects()
                                                        .projectsN[0][2022]
                                                }
                                            </>
                                        }
                                    />
                                    <Typography
                                        type="h4"
                                        content={
                                            <>
                                                {
                                                    compileProjects()
                                                        .projectsMiles[0][2022]
                                                }
                                                &nbsp;&nbsp;
                                                {
                                                    compileProjects()
                                                        .projectsElev[0][2022]
                                                }
                                            </>
                                        }
                                    />
                                </>
                            }
                            paragraphMargins
                        />
                        {compileProjects().projects[0][2022].map(
                            ({ id, name, dist, elev, time }: any) => (
                                <div key={id}>
                                    <Typography
                                        type="h4"
                                        content={<>{name}:</>}
                                        inline
                                        boldFace
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{toMiles(dist)}</>}
                                        inline
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{toFeet(elev)}</>}
                                        inline
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{time}</>}
                                        inline
                                    />
                                </div>
                            )
                        )}
                        <Typography
                            type="body"
                            content={
                                <>
                                    <Typography
                                        type="h3"
                                        content={
                                            <>
                                                2021:{' '}
                                                {
                                                    compileProjects()
                                                        .projectsN[0][2021]
                                                }
                                            </>
                                        }
                                    />
                                    <Typography
                                        type="h4"
                                        content={
                                            <>
                                                {
                                                    compileProjects()
                                                        .projectsMiles[0][2021]
                                                }
                                                &nbsp;&nbsp;
                                                {
                                                    compileProjects()
                                                        .projectsElev[0][2021]
                                                }
                                            </>
                                        }
                                    />
                                </>
                            }
                            paragraphMargins
                        />
                        {compileProjects().projects[0][2021].map(
                            ({ id, name, dist, elev, time }: any) => (
                                <div key={id}>
                                    <Typography
                                        type="h4"
                                        content={<>{name}:</>}
                                        inline
                                        boldFace
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{toMiles(dist)}</>}
                                        inline
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{toFeet(elev)}</>}
                                        inline
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{time}</>}
                                        inline
                                    />
                                </div>
                            )
                        )}
                        <Typography
                            type="body"
                            content={
                                <>
                                    <Typography
                                        type="h3"
                                        content={
                                            <>
                                                2020:{' '}
                                                {
                                                    compileProjects()
                                                        .projectsN[0][2020]
                                                }
                                            </>
                                        }
                                    />
                                    <Typography
                                        type="h4"
                                        content={
                                            <>
                                                {
                                                    compileProjects()
                                                        .projectsMiles[0][2020]
                                                }
                                                &nbsp;&nbsp;
                                                {
                                                    compileProjects()
                                                        .projectsElev[0][2020]
                                                }
                                            </>
                                        }
                                    />
                                </>
                            }
                            paragraphMargins
                        />
                        {compileProjects().projects[0][2020].map(
                            ({ id, name, dist, elev, time }: any) => (
                                <div key={id}>
                                    <Typography
                                        type="h4"
                                        content={<>{name}:</>}
                                        inline
                                        boldFace
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{toMiles(dist)}</>}
                                        inline
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{toFeet(elev)}</>}
                                        inline
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{time}</>}
                                        inline
                                    />
                                </div>
                            )
                        )}
                    </>
                </Tile>
                <Tile type="solid">
                    <>
                        <Typography
                            type="body"
                            content={
                                <>
                                    <Typography
                                        type="h2"
                                        content={
                                            <>
                                                Miles:{' '}
                                                {compileMiles().milesN[0].total}
                                            </>
                                        }
                                    />
                                    <Typography
                                        type="h3"
                                        content={
                                            <>
                                                {
                                                    compileMiles().milesMiles[0]
                                                        .total
                                                }
                                                &nbsp;&nbsp;
                                                {
                                                    compileMiles().milesElev[0]
                                                        .total
                                                }
                                            </>
                                        }
                                    />
                                </>
                            }
                            paragraphMargins
                        />
                        <Typography
                            type="body"
                            content={
                                <>
                                    <Typography
                                        type="h3"
                                        content={
                                            <>
                                                2023:{' '}
                                                {compileMiles().milesN[0][2023]}
                                            </>
                                        }
                                    />
                                    <Typography
                                        type="h4"
                                        content={
                                            <>
                                                {
                                                    compileMiles()
                                                        .milesMiles[0][2023]
                                                }
                                                &nbsp;&nbsp;
                                                {
                                                    compileMiles()
                                                        .milesElev[0][2023]
                                                }
                                            </>
                                        }
                                    />
                                </>
                            }
                            paragraphMargins
                        />
                        {compileMiles().miles[0][2023].map(
                            ({ id, name, dist, elev, time }: any) => (
                                <div key={id}>
                                    <Typography
                                        type="h4"
                                        content={<>{name}:</>}
                                        inline
                                        boldFace
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{toMiles(dist)}</>}
                                        inline
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{toFeet(elev)}</>}
                                        inline
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{time}</>}
                                        inline
                                    />
                                </div>
                            )
                        )}
                        <Typography
                            type="body"
                            content={
                                <>
                                    <Typography
                                        type="h3"
                                        content={
                                            <>
                                                2022:{' '}
                                                {compileMiles().milesN[0][2022]}
                                            </>
                                        }
                                    />
                                    <Typography
                                        type="h4"
                                        content={
                                            <>
                                                {
                                                    compileMiles()
                                                        .milesMiles[0][2022]
                                                }
                                                &nbsp;&nbsp;
                                                {
                                                    compileMiles()
                                                        .milesElev[0][2022]
                                                }
                                            </>
                                        }
                                    />
                                </>
                            }
                            paragraphMargins
                        />
                        {compileMiles().miles[0][2022].map(
                            ({ id, name, dist, elev, time }: any) => (
                                <div key={id}>
                                    <Typography
                                        type="h4"
                                        content={<>{name}:</>}
                                        inline
                                        boldFace
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{toMiles(dist)}</>}
                                        inline
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{toFeet(elev)}</>}
                                        inline
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{time}</>}
                                        inline
                                    />
                                </div>
                            )
                        )}
                        <Typography
                            type="body"
                            content={
                                <>
                                    <Typography
                                        type="h3"
                                        content={
                                            <>
                                                2021:{' '}
                                                {compileMiles().milesN[0][2021]}
                                            </>
                                        }
                                    />
                                    <Typography
                                        type="h4"
                                        content={
                                            <>
                                                {
                                                    compileMiles()
                                                        .milesMiles[0][2021]
                                                }
                                                &nbsp;&nbsp;
                                                {
                                                    compileMiles()
                                                        .milesElev[0][2021]
                                                }
                                            </>
                                        }
                                    />
                                </>
                            }
                            paragraphMargins
                        />
                        {compileMiles().miles[0][2021].map(
                            ({ id, name, dist, elev, time }: any) => (
                                <div key={id}>
                                    <Typography
                                        type="h4"
                                        content={<>{name}:</>}
                                        inline
                                        boldFace
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{toMiles(dist)}</>}
                                        inline
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{toFeet(elev)}</>}
                                        inline
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{time}</>}
                                        inline
                                    />
                                </div>
                            )
                        )}
                        <Typography
                            type="body"
                            content={
                                <>
                                    <Typography
                                        type="h3"
                                        content={
                                            <>
                                                2020:{' '}
                                                {compileMiles().milesN[0][2020]}
                                            </>
                                        }
                                    />
                                    <Typography
                                        type="h4"
                                        content={
                                            <>
                                                {
                                                    compileMiles()
                                                        .milesMiles[0][2020]
                                                }
                                                &nbsp;&nbsp;
                                                {
                                                    compileMiles()
                                                        .milesElev[0][2020]
                                                }
                                            </>
                                        }
                                    />
                                </>
                            }
                            paragraphMargins
                        />
                        {compileMiles().miles[0][2020].map(
                            ({ id, name, dist, elev, time }: any) => (
                                <div key={id}>
                                    <Typography
                                        type="h4"
                                        content={<>{name}:</>}
                                        inline
                                        boldFace
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{toMiles(dist)}</>}
                                        inline
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{toFeet(elev)}</>}
                                        inline
                                    />{' '}
                                    <Typography
                                        type="h4"
                                        content={<>{time}</>}
                                        inline
                                    />
                                </div>
                            )
                        )}
                    </>
                </Tile> */}
            </>
        )
    }

export default SportResultTile
