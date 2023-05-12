import { sportData } from "../../data/general/Sport";
import { toFeet } from "../formatters/toFeet";
import { toMiles } from "../formatters/toMiles";

const compileRoadies = () => {
    const allRoadies: any[] = [];

    var totalRoadies2023 = sportData[2023].roadies.length;
    var totalRoadies2022 = sportData[2022].roadies.length;
    var totalRoadies2021 = sportData[2021].roadies.length;
    var totalRoadies2020 = sportData[2020].roadies.length;

    var totalRoadieMiles2023: any = 0;
    var totalRoadieMiles2022: any = 0;
    var totalRoadieMiles2021: any = 0;
    var totalRoadieMiles2020: any = 0;

    var totalRoadieElev2023: any = 0;
    var totalRoadieElev2022: any = 0;
    var totalRoadieElev2021: any = 0;
    var totalRoadieElev2020: any = 0;

    for (var i in sportData[2023].roadies) {
        allRoadies.push(sportData[2023].roadies[i]);
        totalRoadieMiles2023 = totalRoadieMiles2023 + sportData[2023].roadies[i].dist;
        totalRoadieElev2023 = totalRoadieElev2023 + sportData[2023].roadies[i].elev;
    }

    for (var i in sportData[2022].roadies) {
        allRoadies.push(sportData[2022].roadies[i]);
        totalRoadieMiles2022 = totalRoadieMiles2022 + sportData[2022].roadies[i].dist;
        totalRoadieElev2022 = totalRoadieElev2022 + sportData[2022].roadies[i].elev;
    }

    for (var i in sportData[2021].roadies) {
        allRoadies.push(sportData[2021].roadies[i]);
        totalRoadieMiles2021 = totalRoadieMiles2021 + sportData[2021].roadies[i].dist;
        totalRoadieElev2021 = totalRoadieElev2021 + sportData[2021].roadies[i].elev;
    }

    for (var i in sportData[2020].roadies) {
        allRoadies.push(sportData[2020].roadies[i]);
        totalRoadieMiles2020 = totalRoadieMiles2020 + sportData[2020].roadies[i].dist;
        totalRoadieElev2020 = totalRoadieElev2020 + sportData[2020].roadies[i].elev;
    }

    // Total Roadies

    var totalRoadies =
        totalRoadies2023
        + totalRoadies2022
        + totalRoadies2021
        + totalRoadies2020;

    // Total Roadie Miles

    var totalRoadieMiles =
        totalRoadieMiles2023
        + totalRoadieMiles2022
        + totalRoadieMiles2021
        + totalRoadieMiles2020;

    totalRoadieMiles = toMiles(totalRoadieMiles);
    totalRoadieMiles2023 = toMiles(totalRoadieMiles2023);
    totalRoadieMiles2022 = toMiles(totalRoadieMiles2022);
    totalRoadieMiles2021 = toMiles(totalRoadieMiles2021);
    totalRoadieMiles2020 = toMiles(totalRoadieMiles2020);

    // Total Roadie Elevation

    var totalRoadieElev =
        totalRoadieElev2023
        + totalRoadieElev2022
        + totalRoadieElev2021
        + totalRoadieElev2020;

    totalRoadieElev = toFeet(totalRoadieElev);
    totalRoadieElev2023 = toFeet(totalRoadieElev2023);
    totalRoadieElev2022 = toFeet(totalRoadieElev2022);
    totalRoadieElev2021 = toFeet(totalRoadieElev2021);
    totalRoadieElev2020 = toFeet(totalRoadieElev2020);

    // Return Values

    return {
        allRoadies,
        totalRoadies,
        totalRoadies2023,
        totalRoadies2022,
        totalRoadies2021,
        totalRoadies2020,
        totalRoadieMiles,
        totalRoadieMiles2023,
        totalRoadieMiles2022,
        totalRoadieMiles2021,
        totalRoadieMiles2020,
        totalRoadieElev,
        totalRoadieElev2023,
        totalRoadieElev2022,
        totalRoadieElev2021,
        totalRoadieElev2020
    };
};

export default compileRoadies;