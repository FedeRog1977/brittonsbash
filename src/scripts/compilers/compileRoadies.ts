import { sportData } from '../../data/general/Sport'
import { toFeet } from '../formatters/toFeet'
import { toMiles } from '../formatters/toMiles'

const compileRoadies = () => {
    const roadies = {
        2023: sportData[2023].roadies,
        2022: sportData[2022].roadies,
        2021: sportData[2021].roadies,
        2020: sportData[2020].roadies,
    }

    const number = {
        total:
            sportData[2023].roadies.length +
            sportData[2022].roadies.length +
            sportData[2021].roadies.length +
            sportData[2020].roadies.length,
        2023: sportData[2023].roadies.length,
        2022: sportData[2022].roadies.length,
        2021: sportData[2021].roadies.length,
        2020: sportData[2020].roadies.length,
    }

    var distance2023: number = 0
    var distance2022: number = 0
    var distance2021: number = 0
    var distance2020: number = 0

    var elevation2023: number = 0
    var elevation2022: number = 0
    var elevation2021: number = 0
    var elevation2020: number = 0

    // for (var a in sportData[2023].roadies) {
    //     totalRoadieMiles2023 =
    //         totalRoadieMiles2023 + sportData[2023].roadies[a].dist
    //     totalRoadieElev2023 =
    //         totalRoadieElev2023 + sportData[2023].roadies[a].elev
    // }

    // for (var b in sportData[2022].roadies) {
    //     totalRoadieMiles2022 =
    //         totalRoadieMiles2022 + sportData[2022].roadies[b].dist
    //     totalRoadieElev2022 =
    //         totalRoadieElev2022 + sportData[2022].roadies[b].elev
    // }

    // for (var c in sportData[2021].roadies) {
    //     totalRoadieMiles2021 =
    //         totalRoadieMiles2021 + sportData[2021].roadies[c].dist
    //     totalRoadieElev2021 =
    //         totalRoadieElev2021 + sportData[2021].roadies[c].elev
    // }

    // for (var d in sportData[2020].roadies) {
    //     totalRoadieMiles2020 =
    //         totalRoadieMiles2020 + sportData[2020].roadies[d].dist
    //     totalRoadieElev2020 =
    //         totalRoadieElev2020 + sportData[2020].roadies[d].elev
    // }

    sportData[2023].roadies.forEach((event: any) => {
        distance2023 = distance2023 + event.dist
        elevation2023 = elevation2023 + event.elev
    })

    sportData[2022].roadies.forEach((event: any) => {
        distance2022 = distance2022 + event.dist
        elevation2022 = elevation2022 + event.elev
    })

    sportData[2021].roadies.forEach((event: any) => {
        distance2021 = distance2021 + event.dist
        elevation2021 = elevation2021 + event.elev
    })

    sportData[2020].roadies.forEach((event: any) => {
        distance2020 = distance2020 + event.dist
        elevation2020 = elevation2020 + event.elev
    })

    const distance = {
        total: toMiles(
            distance2023 + distance2022 + distance2021 + distance2020
        ),
        2023: toMiles(distance2023),
        2022: toMiles(distance2022),
        2021: toMiles(distance2021),
        2020: toMiles(distance2020),
    }

    const elevation = {
        total: toFeet(
            elevation2023 + elevation2022 + elevation2021 + elevation2020
        ),
        2023: toFeet(elevation2023),
        2022: toFeet(elevation2022),
        2021: toFeet(elevation2021),
        2020: toFeet(elevation2020),
    }

    const compiledRoadies = {
        roadies,
        number,
        distance,
        elevation,
    }

    console.log(compiledRoadies)
    return compiledRoadies
}

export default compileRoadies