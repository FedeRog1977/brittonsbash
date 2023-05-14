import { sportData } from "../../data/general/Sport";
import { toFeet } from "../formatters/toFeet";
import { toMiles } from "../formatters/toMiles";

const compileRoadies = () => {
    // Roadies

    const roadies: any[] = [];
    roadies.push({
        2023: sportData[2023].roadies,
        2022: sportData[2022].roadies,
        2021: sportData[2021].roadies,
        2020: sportData[2020].roadies
    });

    // Number of Roadies

    const roadiesN: any[] = [];
    roadiesN.push({
        'total': (
            sportData[2023].roadies.length
            + sportData[2022].roadies.length
            + sportData[2021].roadies.length
            + sportData[2020].roadies.length
        ),
        2023: sportData[2023].roadies.length,
        2022: sportData[2022].roadies.length,
        2021: sportData[2021].roadies.length,
        2020: sportData[2020].roadies.length
    });

    var totalRoadieMiles2023: number = 0;
    var totalRoadieMiles2022: number = 0;
    var totalRoadieMiles2021: number = 0;
    var totalRoadieMiles2020: number = 0;

    var totalRoadieElev2023: number = 0;
    var totalRoadieElev2022: number = 0;
    var totalRoadieElev2021: number = 0;
    var totalRoadieElev2020: number = 0;

    for (var i in sportData[2023].roadies) {
        totalRoadieMiles2023 = totalRoadieMiles2023 + sportData[2023].roadies[i].dist;
        totalRoadieElev2023 = totalRoadieElev2023 + sportData[2023].roadies[i].elev;
    }

    for (var i in sportData[2022].roadies) {
        totalRoadieMiles2022 = totalRoadieMiles2022 + sportData[2022].roadies[i].dist;
        totalRoadieElev2022 = totalRoadieElev2022 + sportData[2022].roadies[i].elev;
    }

    for (var i in sportData[2021].roadies) {
        totalRoadieMiles2021 = totalRoadieMiles2021 + sportData[2021].roadies[i].dist;
        totalRoadieElev2021 = totalRoadieElev2021 + sportData[2021].roadies[i].elev;
    }

    for (var i in sportData[2020].roadies) {
        totalRoadieMiles2020 = totalRoadieMiles2020 + sportData[2020].roadies[i].dist;
        totalRoadieElev2020 = totalRoadieElev2020 + sportData[2020].roadies[i].elev;
    }

    // Roadie Miles

    const roadiesMiles: any[] = [];
    roadiesMiles.push({
        'total': (
            toMiles(
                totalRoadieMiles2023
                + totalRoadieMiles2022
                + totalRoadieMiles2021
                + totalRoadieMiles2020
            )
        ),
        2023: toMiles(totalRoadieMiles2023),
        2022: toMiles(totalRoadieMiles2022),
        2021: toMiles(totalRoadieMiles2021),
        2020: toMiles(totalRoadieMiles2020)
    });

    // Roadie Elevation

    const roadiesElev: any[] = [];
    roadiesElev.push({
        'total': (
            toFeet(
                totalRoadieElev2023
                + totalRoadieElev2022
                + totalRoadieElev2021
                + totalRoadieElev2020
            )
        ),
        2023: toFeet(totalRoadieElev2023),
        2022: toFeet(totalRoadieElev2022),
        2021: toFeet(totalRoadieElev2021),
        2020: toFeet(totalRoadieElev2020)
    });

    console.log(
        'Roadies:\n\n',
        roadies,
        '\n\nNumber of Roadies:\n\n',
        roadiesN,
        '\n\nRoadie Miles:\n\n',
        roadiesMiles,
        '\n\nRoadie Elevation:\n\n',
        roadiesElev

    );

    return {
        roadies,
        roadiesN,
        roadiesMiles,
        roadiesElev
    };
};

export default compileRoadies;