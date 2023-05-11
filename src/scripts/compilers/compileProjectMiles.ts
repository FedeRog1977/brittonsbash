import { sportData } from "../../data/general/Sport";
import { toMiles } from "../formatters/toMiles";

const compileProjectMiles = () => {
    var totalProjectMiles2023: any = 0;
    var totalProjectMiles2022: any = 0;
    var totalProjectMiles2021: any = 0;
    var totalProjectMiles2020: any = 0;

    for (var i in sportData[2023].projects) {
        totalProjectMiles2023 = totalProjectMiles2023 + sportData[2023].projects[i].dist;
    }

    for (var i in sportData[2022].projects) {
        totalProjectMiles2022 = totalProjectMiles2022 + sportData[2022].projects[i].dist;
    }

    for (var i in sportData[2021].projects) {
        totalProjectMiles2021 = totalProjectMiles2021 + sportData[2021].projects[i].dist;
    }

    for (var i in sportData[2020].projects) {
        totalProjectMiles2020 = totalProjectMiles2020 + sportData[2020].projects[i].dist;
    }

    var totalProjectMiles =
        totalProjectMiles2023
        + totalProjectMiles2022
        + totalProjectMiles2021
        + totalProjectMiles2020;

    totalProjectMiles = toMiles(totalProjectMiles);
    totalProjectMiles2023 = toMiles(totalProjectMiles2023);
    totalProjectMiles2022 = toMiles(totalProjectMiles2022);
    totalProjectMiles2021 = toMiles(totalProjectMiles2021);
    totalProjectMiles2020 = toMiles(totalProjectMiles2020);

    return {
        totalProjectMiles,
        totalProjectMiles2023,
        totalProjectMiles2022,
        totalProjectMiles2021,
        totalProjectMiles2020
    };
};

export default compileProjectMiles;