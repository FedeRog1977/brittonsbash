import { sportData } from "../../data/general/Sport";
import { toFeet } from "../formatters/toFeet";
import { toMiles } from "../formatters/toMiles";

const compileMiles = () => {
    const miles: any[] = [];
    miles.push({
        2023: sportData[2023].miles,
        2022: sportData[2022].miles,
        2021: sportData[2021].miles,
        2020: sportData[2020].miles
    });

    const milesN: any[] = [];
    milesN.push({
        'total': (
            sportData[2023].miles.length
            + sportData[2022].miles.length
            + sportData[2021].miles.length
            + sportData[2020].miles.length
        ),
        2023: sportData[2023].miles.length,
        2022: sportData[2022].miles.length,
        2021: sportData[2021].miles.length,
        2020: sportData[2020].miles.length
    });

    var totalMilesMiles2023: number = 0;
    var totalMilesMiles2022: number = 0;
    var totalMilesMiles2021: number = 0;
    var totalMilesMiles2020: number = 0;

    var totalMilesElev2023: number = 0;
    var totalMilesElev2022: number = 0;
    var totalMilesElev2021: number = 0;
    var totalMilesElev2020: number = 0;

    for (var a in sportData[2023].miles) {
        totalMilesMiles2023 = totalMilesMiles2023 + sportData[2023].miles[a].dist;
        totalMilesElev2023 = totalMilesElev2023 + sportData[2023].miles[a].elev;
    }

    for (var b in sportData[2022].miles) {
        totalMilesMiles2022 = totalMilesMiles2022 + sportData[2022].miles[b].dist;
        totalMilesElev2022 = totalMilesElev2022 + sportData[2022].miles[b].elev;
    }

    for (var c in sportData[2021].miles) {
        totalMilesMiles2021 = totalMilesMiles2021 + sportData[2021].miles[c].dist;
        totalMilesElev2021 = totalMilesElev2021 + sportData[2021].miles[c].elev;
    }

    for (var d in sportData[2020].miles) {
        totalMilesMiles2020 = totalMilesMiles2020 + sportData[2020].miles[d].dist;
        totalMilesElev2020 = totalMilesElev2020 + sportData[2020].miles[d].elev;
    }

    const milesMiles: any[] = [];
    milesMiles.push({
        'total': (
            toMiles(
                totalMilesMiles2023
                + totalMilesMiles2022
                + totalMilesMiles2021
                + totalMilesMiles2020
            )
        ),
        2023: toMiles(totalMilesMiles2023),
        2022: toMiles(totalMilesMiles2022),
        2021: toMiles(totalMilesMiles2021),
        2020: toMiles(totalMilesMiles2020)
    });

    const milesElev: any[] = [];
    milesElev.push({
        'total': (
            toFeet(
                totalMilesElev2023
                + totalMilesElev2022
                + totalMilesElev2021
                + totalMilesElev2020
            )
        ),
        2023: toFeet(totalMilesElev2023),
        2022: toFeet(totalMilesElev2022),
        2021: toFeet(totalMilesElev2021),
        2020: toFeet(totalMilesElev2020)
    });

    console.log(
        'Miles:\n\n',
        miles,
        '\n\nNumber of Miles:\n\n',
        milesN,
        '\n\nMiles Miles:\n\n',
        milesMiles,
        '\n\nMiles Elevation:\n\n',
        milesElev

    );

    return {
        miles,
        milesN,
        milesMiles,
        milesElev
    };
};

export default compileMiles;