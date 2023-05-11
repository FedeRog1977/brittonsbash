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
import compileRoadieMiles from "../../../scripts/compilers/compileRoadieMiles";
import compileProjectMiles from "../../../scripts/compilers/compileProjectMiles";
import compileMilesMiles from "../../../scripts/compilers/compileMilesMiles";

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

    const totalRoadies =
        sportData[2023].roadies.length
        + sportData[2022].roadies.length
        + sportData[2021].roadies.length
        + sportData[2020].roadies.length;

    const totalProjects =
        sportData[2023].projects.length
        + sportData[2022].projects.length
        + sportData[2021].projects.length
        + sportData[2020].projects.length;

    const totalMiles =
        sportData[2023].miles.length
        + sportData[2022].miles.length
        + sportData[2021].miles.length
        + sportData[2020].miles.length;

    return (
        <Tile
            type='solid'
            content={
                <>
                    <Typography type='h2' content={<>{totalRoadies} Total Roadies ({compileRoadieMiles().totalRoadieMiles})</>} paragraphMargins />
                    <Typography type='h2' content={<>{totalProjects} Total Projects ({compileProjectMiles().totalProjectMiles})</>} paragraphMargins />
                    <Typography type='h2' content={<>{totalMiles} Total Miles ({compileMilesMiles().totalMilesMiles})</>} paragraphMargins />
                    <Typography type='h3' content='2023' paragraphMargins />
                    {sportData[2023].roadies.map(
                        ({ id, name, dist, elev, time }: any) => (
                            <div key={id}>
                                <Typography type='h4' content={<>{name}:</>} inline boldFace />{' '}
                                <Typography type='h4' content={<>{dist}mi</>} inline />{' '}
                                <Typography type='h4' content={<>{elev.toLocaleString()}ft</>} inline />{' '}
                                <Typography type='h4' content={<>{time}</>} inline />
                            </div>
                        )
                    )}
                    <Typography type='h3' content='2022' paragraphMargins />
                    {sportData[2022].roadies.map(
                        ({ id, name, dist, elev, time }: any) => (
                            <div key={id}>
                                <Typography type='h4' content={<>{name}:</>} inline boldFace />{' '}
                                <Typography type='h4' content={<>{dist}mi</>} inline />{' '}
                                <Typography type='h4' content={<>{elev.toLocaleString()}ft</>} inline />{' '}
                                <Typography type='h4' content={<>{time}</>} inline />
                            </div>
                        )
                    )}
                    <Typography type='h3' content='2021' paragraphMargins />
                    {sportData[2021].roadies.map(
                        ({ id, name, dist, elev, time }: any) => (
                            <div key={id}>
                                <Typography type='h4' content={<>{name}:</>} inline boldFace />{' '}
                                <Typography type='h4' content={<>{dist}mi</>} inline />{' '}
                                <Typography type='h4' content={<>{elev.toLocaleString()}ft</>} inline />{' '}
                                <Typography type='h4' content={<>{time}</>} inline />
                            </div>
                        )
                    )}
                    <Typography type='h3' content='2020' paragraphMargins />
                    {sportData[2020].roadies.map(
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
    )
}

export default SportResultTile;