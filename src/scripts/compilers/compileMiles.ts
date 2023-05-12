import { sportData } from "../../data/general/Sport";
import { toFeet } from "../formatters/toFeet";
import { toMiles } from "../formatters/toMiles";

const compileMiles = () => {
    const allMiles: any[] = [];

    var totalMiles2023 = sportData[2023].miles.length;
    var totalMiles2022 = sportData[2022].miles.length;
    var totalMiles2021 = sportData[2021].miles.length;
    var totalMiles2020 = sportData[2020].miles.length;

    var totalMilesMiles2023: any = 0;
    var totalMilesMiles2022: any = 0;
    var totalMilesMiles2021: any = 0;
    var totalMilesMiles2020: any = 0;

    var totalMilesElev2023: any = 0;
    var totalMilesElev2022: any = 0;
    var totalMilesElev2021: any = 0;
    var totalMilesElev2020: any = 0;

    for (var i in sportData[2023].miles) {
        allMiles.push(sportData[2023].miles[i]);
        totalMilesMiles2023 = totalMilesMiles2023 + sportData[2023].miles[i].dist;
        totalMilesElev2023 = totalMilesElev2023 + sportData[2023].miles[i].elev;
    }

    for (var i in sportData[2022].miles) {
        allMiles.push(sportData[2022].miles[i]);
        totalMilesMiles2022 = totalMilesMiles2022 + sportData[2022].miles[i].dist;
        totalMilesElev2022 = totalMilesElev2022 + sportData[2022].miles[i].elev;
    }

    for (var i in sportData[2021].miles) {
        allMiles.push(sportData[2021].miles[i]);
        totalMilesMiles2021 = totalMilesMiles2021 + sportData[2021].miles[i].dist;
        totalMilesElev2021 = totalMilesElev2021 + sportData[2021].miles[i].elev;
    }

    for (var i in sportData[2020].miles) {
        allMiles.push(sportData[2020].miles[i]);
        totalMilesMiles2020 = totalMilesMiles2020 + sportData[2020].miles[i].dist;
        totalMilesElev2020 = totalMilesElev2020 + sportData[2020].miles[i].elev;
    }

    // Total Miles

    var totalMiles =
        totalMiles2023
        + totalMiles2022
        + totalMiles2021
        + totalMiles2020;

    // Total Miles Miles

    var totalMilesMiles =
        totalMilesMiles2023
        + totalMilesMiles2022
        + totalMilesMiles2021
        + totalMilesMiles2020;

    totalMilesMiles = toMiles(totalMilesMiles);
    totalMilesMiles2023 = toMiles(totalMilesMiles2023);
    totalMilesMiles2022 = toMiles(totalMilesMiles2022);
    totalMilesMiles2021 = toMiles(totalMilesMiles2021);
    totalMilesMiles2020 = toMiles(totalMilesMiles2020);

    // Total Roadie Elevation

    var totalMilesElev =
        totalMilesElev2023
        + totalMilesElev2022
        + totalMilesElev2021
        + totalMilesElev2020;

    totalMilesElev = toFeet(totalMilesElev);
    totalMilesElev2023 = toFeet(totalMilesElev2023);
    totalMilesElev2022 = toFeet(totalMilesElev2022);
    totalMilesElev2021 = toFeet(totalMilesElev2021);
    totalMilesElev2020 = toFeet(totalMilesElev2020);

    // Return Values

    return {
        allMiles,
        totalMiles,
        totalMiles2023,
        totalMiles2022,
        totalMiles2021,
        totalMiles2020,
        totalMilesMiles,
        totalMilesMiles2023,
        totalMilesMiles2022,
        totalMilesMiles2021,
        totalMilesMiles2020,
        totalMilesElev,
        totalMilesElev2023,
        totalMilesElev2022,
        totalMilesElev2021,
        totalMilesElev2020
    };
};

export default compileMiles;