import Typography from "../../../bashBlocks/elements/Typography";
import "../instant-gram/styles/InstantGramTile.css";
import Tile from "../../../bashBlocks/components/Tile";
import compileProjects from "../../../scripts/compilers/compileProjects";
import compileMiles from "../../../scripts/compilers/compileMiles";
import compileRoadies from "../../../scripts/compilers/compileRoadies";

const SportResultTile = (
    // { event, sportEvent, showSportEvent }: any
) => {
    // const [showDropDown, setShowDropDown] = useState(false);

    // const handleClick = () => {
    //     if (showDropDown === false) {
    //         setShowDropDown(true);
    //     } else {
    //         setShowDropDown(false);
    //     }
    // }

    // TESTING

    return (
        <>
            <Tile
                type='solid'
                content={
                    <>
                        <Typography
                            type='body'
                            content={
                                <>
                                    <Typography
                                        type='h2'
                                        content={
                                            <>
                                                Roadies: {compileRoadies().roadiesN[0].total}
                                            </>
                                        }
                                    />
                                    <Typography
                                        type='h3'
                                        content={
                                            <>
                                                {compileRoadies().roadiesMiles[0].total}&nbsp;&nbsp;{compileRoadies().roadiesElev[0].total}
                                            </>
                                        }
                                    />
                                </>
                            }
                            paragraphMargins
                        />
                        <Typography
                            type='body'
                            content={
                                <>
                                    <Typography
                                        type='h3'
                                        content={<>2023: {compileRoadies().roadiesN[0][2023]}</>}
                                    />
                                    <Typography
                                        type='h4'
                                        content={<>{compileRoadies().roadiesMiles[0][2023]}&nbsp;&nbsp;{compileRoadies().roadiesElev[0][2023]}</>}
                                    />
                                </>
                            }
                            paragraphMargins
                        />
                        {compileRoadies().roadies[0][2023].map(
                            ({ id, name, dist, elev, time }: any) => (
                                <div key={id}>
                                    <Typography type='h4' content={<>{name}:</>} inline boldFace />{' '}
                                    <Typography type='h4' content={<>{dist}mi</>} inline />{' '}
                                    <Typography type='h4' content={<>{elev.toLocaleString()}ft</>} inline />{' '}
                                    <Typography type='h4' content={<>{time}</>} inline />
                                </div>
                            )
                        )}
                        <Typography
                            type='body'
                            content={
                                <>
                                    <Typography
                                        type='h3'
                                        content={<>2022: {compileRoadies().roadiesN[0][2022]}</>}
                                    />
                                    <Typography
                                        type='h4'
                                        content={<>{compileRoadies().roadiesMiles[0][2022]}&nbsp;&nbsp;{compileRoadies().roadiesElev[0][2022]}</>}
                                    />
                                </>
                            }
                            paragraphMargins
                        />
                        {compileRoadies().roadies[0][2022].map(
                            ({ id, name, dist, elev, time }: any) => (
                                <div key={id}>
                                    <Typography type='h4' content={<>{name}:</>} inline boldFace />{' '}
                                    <Typography type='h4' content={<>{dist}mi</>} inline />{' '}
                                    <Typography type='h4' content={<>{elev.toLocaleString()}ft</>} inline />{' '}
                                    <Typography type='h4' content={<>{time}</>} inline />
                                </div>
                            )
                        )}
                        <Typography
                            type='body'
                            content={
                                <>
                                    <Typography
                                        type='h3'
                                        content={<>2021: {compileRoadies().roadiesN[0][2021]}</>}
                                    />
                                    <Typography
                                        type='h4'
                                        content={<>{compileRoadies().roadiesMiles[0][2021]}&nbsp;&nbsp;{compileRoadies().roadiesElev[0][2021]}</>}
                                    />
                                </>
                            }
                            paragraphMargins
                        />
                        {compileRoadies().roadies[0][2021].map(
                            ({ id, name, dist, elev, time }: any) => (
                                <div key={id}>
                                    <Typography type='h4' content={<>{name}:</>} inline boldFace />{' '}
                                    <Typography type='h4' content={<>{dist}mi</>} inline />{' '}
                                    <Typography type='h4' content={<>{elev.toLocaleString()}ft</>} inline />{' '}
                                    <Typography type='h4' content={<>{time}</>} inline />
                                </div>
                            )
                        )}
                        <Typography
                            type='body'
                            content={
                                <>
                                    <Typography
                                        type='h3'
                                        content={<>2020: {compileRoadies().roadiesN[0][2020]}</>}
                                    />
                                    <Typography
                                        type='h4'
                                        content={<>{compileRoadies().roadiesMiles[0][2020]}&nbsp;&nbsp;{compileRoadies().roadiesElev[0][2020]}</>}
                                    />
                                </>
                            }
                            paragraphMargins
                        />
                        {compileRoadies().roadies[0][2020].map(
                            ({ id, name, dist, elev, time }: any) => (
                                <div key={id}>
                                    <Typography type='h4' content={<>{name}:</>} inline boldFace />{' '}
                                    <Typography type='h4' content={<>{dist}mi</>} inline />{' '}
                                    <Typography type='h4' content={<>{elev.toLocaleString()}ft</>} inline />{' '}
                                    <Typography type='h4' content={<>{time}</>} inline />
                                </div>
                            )
                        )}
                    </>
                }
            />
            <Tile
                type='solid'
                content={
                    <>
                        <Typography
                            type='body'
                            content={
                                <>
                                    <Typography
                                        type='h2'
                                        content={
                                            <>
                                                Projects: {compileProjects().projectsN[0].total}
                                            </>
                                        }
                                    />
                                    <Typography
                                        type='h3'
                                        content={
                                            <>
                                                {compileProjects().projectsMiles[0].total}&nbsp;&nbsp;{compileProjects().projectsElev[0].total}
                                            </>
                                        }
                                    />
                                </>
                            }
                            paragraphMargins
                        />
                        <Typography
                            type='body'
                            content={
                                <>
                                    <Typography
                                        type='h3'
                                        content={<>2023: {compileProjects().projectsN[0][2023]}</>}
                                    />
                                    <Typography
                                        type='h4'
                                        content={<>{compileProjects().projectsMiles[0][2023]}&nbsp;&nbsp;{compileProjects().projectsElev[0][2023]}</>}
                                    />
                                </>
                            }
                            paragraphMargins
                        />
                        {compileProjects().projects[0][2023].map(
                            ({ id, name, dist, elev, time }: any) => (
                                <div key={id}>
                                    <Typography type='h4' content={<>{name}:</>} inline boldFace />{' '}
                                    <Typography type='h4' content={<>{dist}mi</>} inline />{' '}
                                    <Typography type='h4' content={<>{elev.toLocaleString()}ft</>} inline />{' '}
                                    <Typography type='h4' content={<>{time}</>} inline />
                                </div>
                            )
                        )}
                        <Typography
                            type='body'
                            content={
                                <>
                                    <Typography
                                        type='h3'
                                        content={<>2022: {compileProjects().projectsN[0][2022]}</>}
                                    />
                                    <Typography
                                        type='h4'
                                        content={<>{compileProjects().projectsMiles[0][2022]}&nbsp;&nbsp;{compileProjects().projectsElev[0][2022]}</>}
                                    />
                                </>
                            }
                            paragraphMargins
                        />
                        {compileProjects().projects[0][2022].map(
                            ({ id, name, dist, elev, time }: any) => (
                                <div key={id}>
                                    <Typography type='h4' content={<>{name}:</>} inline boldFace />{' '}
                                    <Typography type='h4' content={<>{dist}mi</>} inline />{' '}
                                    <Typography type='h4' content={<>{elev.toLocaleString()}ft</>} inline />{' '}
                                    <Typography type='h4' content={<>{time}</>} inline />
                                </div>
                            )
                        )}
                        <Typography
                            type='body'
                            content={
                                <>
                                    <Typography
                                        type='h3'
                                        content={<>2021: {compileProjects().projectsN[0][2021]}</>}
                                    />
                                    <Typography
                                        type='h4'
                                        content={<>{compileProjects().projectsMiles[0][2021]}&nbsp;&nbsp;{compileProjects().projectsElev[0][2021]}</>}
                                    />
                                </>
                            }
                            paragraphMargins
                        />
                        {compileProjects().projects[0][2021].map(
                            ({ id, name, dist, elev, time }: any) => (
                                <div key={id}>
                                    <Typography type='h4' content={<>{name}:</>} inline boldFace />{' '}
                                    <Typography type='h4' content={<>{dist}mi</>} inline />{' '}
                                    <Typography type='h4' content={<>{elev.toLocaleString()}ft</>} inline />{' '}
                                    <Typography type='h4' content={<>{time}</>} inline />
                                </div>
                            )
                        )}
                        <Typography
                            type='body'
                            content={
                                <>
                                    <Typography
                                        type='h3'
                                        content={<>2020: {compileProjects().projectsN[0][2020]}</>}
                                    />
                                    <Typography
                                        type='h4'
                                        content={<>{compileProjects().projectsMiles[0][2020]}&nbsp;&nbsp;{compileProjects().projectsElev[0][2020]}</>}
                                    />
                                </>
                            }
                            paragraphMargins
                        />
                        {compileProjects().projects[0][2020].map(
                            ({ id, name, dist, elev, time }: any) => (
                                <div key={id}>
                                    <Typography type='h4' content={<>{name}:</>} inline boldFace />{' '}
                                    <Typography type='h4' content={<>{dist}mi</>} inline />{' '}
                                    <Typography type='h4' content={<>{elev.toLocaleString()}ft</>} inline />{' '}
                                    <Typography type='h4' content={<>{time}</>} inline />
                                </div>
                            )
                        )}
                    </>
                }
            />
            <Tile
                type='solid'
                content={
                    <>
                        <Typography
                            type='body'
                            content={
                                <>
                                    <Typography
                                        type='h2'
                                        content={
                                            <>
                                                Miles: {compileMiles().milesN[0].total}
                                            </>
                                        }
                                    />
                                    <Typography
                                        type='h3'
                                        content={
                                            <>
                                                {compileMiles().milesMiles[0].total}&nbsp;&nbsp;{compileMiles().milesElev[0].total}
                                            </>
                                        }
                                    />
                                </>
                            }
                            paragraphMargins
                        />
                        <Typography
                            type='body'
                            content={
                                <>
                                    <Typography
                                        type='h3'
                                        content={<>2023: {compileMiles().milesN[0][2023]}</>}
                                    />
                                    <Typography
                                        type='h4'
                                        content={<>{compileMiles().milesMiles[0][2023]}&nbsp;&nbsp;{compileMiles().milesElev[0][2023]}</>}
                                    />
                                </>
                            }
                            paragraphMargins
                        />
                        {compileMiles().miles[0][2023].map(
                            ({ id, name, dist, elev, time }: any) => (
                                <div key={id}>
                                    <Typography type='h4' content={<>{name}:</>} inline boldFace />{' '}
                                    <Typography type='h4' content={<>{dist}mi</>} inline />{' '}
                                    <Typography type='h4' content={<>{elev.toLocaleString()}ft</>} inline />{' '}
                                    <Typography type='h4' content={<>{time}</>} inline />
                                </div>
                            )
                        )}
                        <Typography
                            type='body'
                            content={
                                <>
                                    <Typography
                                        type='h3'
                                        content={<>2022: {compileMiles().milesN[0][2022]}</>}
                                    />
                                    <Typography
                                        type='h4'
                                        content={<>{compileMiles().milesMiles[0][2022]}&nbsp;&nbsp;{compileMiles().milesElev[0][2022]}</>}
                                    />
                                </>
                            }
                            paragraphMargins
                        />
                        {compileMiles().miles[0][2022].map(
                            ({ id, name, dist, elev, time }: any) => (
                                <div key={id}>
                                    <Typography type='h4' content={<>{name}:</>} inline boldFace />{' '}
                                    <Typography type='h4' content={<>{dist}mi</>} inline />{' '}
                                    <Typography type='h4' content={<>{elev.toLocaleString()}ft</>} inline />{' '}
                                    <Typography type='h4' content={<>{time}</>} inline />
                                </div>
                            )
                        )}
                        <Typography
                            type='body'
                            content={
                                <>
                                    <Typography
                                        type='h3'
                                        content={<>2021: {compileMiles().milesN[0][2021]}</>}
                                    />
                                    <Typography
                                        type='h4'
                                        content={<>{compileMiles().milesMiles[0][2021]}&nbsp;&nbsp;{compileMiles().milesElev[0][2021]}</>}
                                    />
                                </>
                            }
                            paragraphMargins
                        />
                        {compileMiles().miles[0][2021].map(
                            ({ id, name, dist, elev, time }: any) => (
                                <div key={id}>
                                    <Typography type='h4' content={<>{name}:</>} inline boldFace />{' '}
                                    <Typography type='h4' content={<>{dist}mi</>} inline />{' '}
                                    <Typography type='h4' content={<>{elev.toLocaleString()}ft</>} inline />{' '}
                                    <Typography type='h4' content={<>{time}</>} inline />
                                </div>
                            )
                        )}
                        <Typography
                            type='body'
                            content={
                                <>
                                    <Typography
                                        type='h3'
                                        content={<>2020: {compileMiles().milesN[0][2020]}</>}
                                    />
                                    <Typography
                                        type='h4'
                                        content={<>{compileMiles().milesMiles[0][2020]}&nbsp;&nbsp;{compileMiles().milesElev[0][2020]}</>}
                                    />
                                </>
                            }
                            paragraphMargins
                        />
                        {compileMiles().miles[0][2020].map(
                            ({ id, name, dist, elev, time }: any) => (
                                <div key={id}>
                                    <Typography type='h4' content={<>{name}:</>} inline boldFace />{' '}
                                    <Typography type='h4' content={<>{dist}mi</>} inline />{' '}
                                    <Typography type='h4' content={<>{elev.toLocaleString()}ft</>} inline />{' '}
                                    <Typography type='h4' content={<>{time}</>} inline />
                                </div>
                            )
                        )}
                    </>
                }
            />
        </>
    )
}

export default SportResultTile;