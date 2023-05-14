import { useState } from "react";
import ImageSlider from "../../../bashBlocks/components/ImageSlider";
import Typography from "../../../bashBlocks/elements/Typography";
import "../instant-gram/styles/InstantGramTile.css";
import Article from "../../../bashBlocks/components/Article";
import Tile from "../../../bashBlocks/components/Tile";
import refactorEvent from "../../../scripts/compilers/refactorEvent";
import DropDown from "../../../bashBlocks/components/DropDown";
import compileSports from "../../../scripts/compilers/compileSports";
import { sportData } from "../../../data/general/Sport";
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
                            type='h2'
                            content={
                                <>
                                    Projects: {compileProjects().totalProjects}
                                </>
                            }
                        />
                        <Typography
                            type='h3'
                            content={
                                <>
                                    {compileProjects().totalProjectMiles}&nbsp;&nbsp;{compileProjects().totalProjectElev}
                                </>
                            }
                        />
                        <Typography type='h3' content={<>2023: {compileProjects().totalProjects2023}</>} paragraphMargins />
                        {sportData[2023].projects.map(
                            ({ id, name, dist, elev, time }: any) => (
                                <div key={id}>
                                    <Typography type='h4' content={<>{name}:</>} inline boldFace />{' '}
                                    <Typography type='h4' content={<>{dist}mi</>} inline />{' '}
                                    <Typography type='h4' content={<>{elev.toLocaleString()}ft</>} inline />{' '}
                                    <Typography type='h4' content={<>{time}</>} inline />
                                </div>
                            )
                        )}
                        <Typography type='h3' content={<>2022: {compileProjects().totalProjects2022}</>} paragraphMargins />
                        {sportData[2022].projects.map(
                            ({ id, name, dist, elev, time }: any) => (
                                <div key={id}>
                                    <Typography type='h4' content={<>{name}:</>} inline boldFace />{' '}
                                    <Typography type='h4' content={<>{dist}mi</>} inline />{' '}
                                    <Typography type='h4' content={<>{elev.toLocaleString()}ft</>} inline />{' '}
                                    <Typography type='h4' content={<>{time}</>} inline />
                                </div>
                            )
                        )}
                        <Typography type='h3' content={<>2021: {compileProjects().totalProjects2021}</>} paragraphMargins />
                        {sportData[2021].projects.map(
                            ({ id, name, dist, elev, time }: any) => (
                                <div key={id}>
                                    <Typography type='h4' content={<>{name}:</>} inline boldFace />{' '}
                                    <Typography type='h4' content={<>{dist}mi</>} inline />{' '}
                                    <Typography type='h4' content={<>{elev.toLocaleString()}ft</>} inline />{' '}
                                    <Typography type='h4' content={<>{time}</>} inline />
                                </div>
                            )
                        )}
                        <Typography type='h3' content={<>2020: {compileProjects().totalProjects2020}</>} paragraphMargins />
                        {sportData[2020].projects.map(
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
                            type='h2'
                            content={
                                <>
                                    Miles: {compileMiles().totalMiles}
                                </>
                            }
                        />
                        <Typography
                            type='h3'
                            content={
                                <>
                                    {compileMiles().totalMilesMiles}&nbsp;&nbsp;{compileMiles().totalMilesElev}
                                </>
                            }
                        />
                        <Typography type='h3' content={<>2023: {compileMiles().totalMiles2023}</>} paragraphMargins />
                        {sportData[2023].miles.map(
                            ({ id, name, dist, elev, time }: any) => (
                                <div key={id}>
                                    <Typography type='h4' content={<>{name}:</>} inline boldFace />{' '}
                                    <Typography type='h4' content={<>{dist}mi</>} inline />{' '}
                                    <Typography type='h4' content={<>{elev.toLocaleString()}ft</>} inline />{' '}
                                    <Typography type='h4' content={<>{time}</>} inline />
                                </div>
                            )
                        )}
                        <Typography type='h3' content={<>2022: {compileMiles().totalMiles2022}</>} paragraphMargins />
                        {sportData[2022].miles.map(
                            ({ id, name, dist, elev, time }: any) => (
                                <div key={id}>
                                    <Typography type='h4' content={<>{name}:</>} inline boldFace />{' '}
                                    <Typography type='h4' content={<>{dist}mi</>} inline />{' '}
                                    <Typography type='h4' content={<>{elev.toLocaleString()}ft</>} inline />{' '}
                                    <Typography type='h4' content={<>{time}</>} inline />
                                </div>
                            )
                        )}
                        <Typography type='h3' content={<>2021: {compileMiles().totalMiles2021}</>} paragraphMargins />
                        {sportData[2021].miles.map(
                            ({ id, name, dist, elev, time }: any) => (
                                <div key={id}>
                                    <Typography type='h4' content={<>{name}:</>} inline boldFace />{' '}
                                    <Typography type='h4' content={<>{dist}mi</>} inline />{' '}
                                    <Typography type='h4' content={<>{elev.toLocaleString()}ft</>} inline />{' '}
                                    <Typography type='h4' content={<>{time}</>} inline />
                                </div>
                            )
                        )}
                        <Typography type='h3' content={<>2020: {compileMiles().totalMiles2020}</>} paragraphMargins />
                        {sportData[2020].miles.map(
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