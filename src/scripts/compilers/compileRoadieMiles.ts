import { sportData } from "../../data/general/Sport";
import { toMiles } from "../formatters/toMiles";

const compileRoadieMiles = () => {
    var totalRoadieMiles2023: any = 0;
    var totalRoadieMiles2022: any = 0;
    var totalRoadieMiles2021: any = 0;
    var totalRoadieMiles2020: any = 0;

    for (var i in sportData[2023].roadies) {
        totalRoadieMiles2023 = totalRoadieMiles2023 + sportData[2023].roadies[i].dist;
    }

    for (var i in sportData[2022].roadies) {
        totalRoadieMiles2022 = totalRoadieMiles2022 + sportData[2022].roadies[i].dist;
    }

    for (var i in sportData[2021].roadies) {
        totalRoadieMiles2021 = totalRoadieMiles2021 + sportData[2021].roadies[i].dist;
    }

    for (var i in sportData[2020].roadies) {
        totalRoadieMiles2020 = totalRoadieMiles2020 + sportData[2020].roadies[i].dist;
    }

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

    return {
        totalRoadieMiles,
        totalRoadieMiles2023,
        totalRoadieMiles2022,
        totalRoadieMiles2021,
        totalRoadieMiles2020
    };
};

export default compileRoadieMiles;