import { useState } from "react";
import ImageSlider from "../../../bashBlocks/components/ImageSlider";
import Typography from "../../../bashBlocks/elements/Typography";
import "../instant-gram/styles/InstantGramTile.css";
import Article from "../../../bashBlocks/components/Article";
import Tile from "../../../bashBlocks/components/Tile";
import refactorEvent from "../../../scripts/blog/instant-gram/refactorEvent";
import DropDown from "../../../bashBlocks/components/DropDown";
import compileSports from "../../../scripts/blog/instant-gram/compileSports";
import { sportData } from "../../../data/general/Sport";

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

    function getRoadieType(name: string) {
        var type = '';

        if (name === 'century') {
            type = 'Century';
        } else if (name === 'strathaven') {
            type = 'Strathaven';
        } else if (name === 'fenwickWindfarm') {
            type = 'Fenwick + Wind Farm';
        } else if (name === 'windfarm') {
            type = 'Wind Farm';
        } else if (name === 'fenwick') {
            type = 'Fenwick';
        } else if (name === 'throntonhall') {
            type = 'Thorntonhall';
        } else {
            type = 'Other';
        }

        return type;
    }

    function getMilesType(name: string) {
        var type = '';

        if (name === 'waterfoot') {
            type = 'Waterfoot';
        } else if (name === 'thorntonhall') {
            type = 'Thorntonhall';
        } else {
            type = 'Other';
        }

        return type;
    }

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
                    <Typography type='h2' content={<>{totalRoadies} Total Roadies</>} />
                    <Typography type='h2' content={<>{totalProjects} Total Projects</>} />
                    <Typography type='h2' content={<>{totalMiles} Total Miles</>} />
                    {sportData[2023].roadies.map(
                        ({ id, name, dist, elev, time }: any) => (
                            <div key={id}>
                                <Typography type='h4' content={<>{getRoadieType(name)}</>} inline boldFace />{': '}
                                <Typography type='h4' content={<>{dist}mi</>} inline />{' '}
                                <Typography type='h4' content={<>{elev.toLocaleString()}ft</>} inline />{' '}
                                <Typography type='h4' content={<>{time}</>} inline />
                            </div>
                        )
                    )}
                    {sportData[2022].roadies.map(
                        ({ id, name, dist, elev, time }: any) => (
                            <div key={id}>
                                <Typography type='h4' content={<>{getRoadieType(name)}</>} inline boldFace />{': '}
                                <Typography type='h4' content={<>{dist}mi</>} inline />{' '}
                                <Typography type='h4' content={<>{elev.toLocaleString()}ft</>} inline />{' '}
                                <Typography type='h4' content={<>{time}</>} inline />
                            </div>
                        )
                    )}
                    {sportData[2021].roadies.map(
                        ({ id, name, dist, elev, time }: any) => (
                            <div key={id}>
                                <Typography type='h4' content={<>{getRoadieType(name)}</>} inline boldFace />{': '}
                                <Typography type='h4' content={<>{dist}mi</>} inline />{' '}
                                <Typography type='h4' content={<>{elev.toLocaleString()}ft</>} inline />{' '}
                                <Typography type='h4' content={<>{time}</>} inline />
                            </div>
                        )
                    )}
                    {sportData[2020].roadies.map(
                        ({ id, name, dist, elev, time }: any) => (
                            <div key={id}>
                                <Typography type='h4' content={<>{getRoadieType(name)}</>} inline boldFace />{': '}
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