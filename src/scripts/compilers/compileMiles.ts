import { sportData } from '../../data/general/Sport'
import { toFeet } from '../formatters/toFeet'
import { toMiles } from '../formatters/toMiles'

const compileMiles = () => {
    const miles = {
        2023: sportData[2023].miles,
        2022: sportData[2022].miles,
        2021: sportData[2021].miles,
        2020: sportData[2020].miles,
    }

    const number = {
        total:
            sportData[2023].miles.length +
            sportData[2022].miles.length +
            sportData[2021].miles.length +
            sportData[2020].miles.length,
        2023: sportData[2023].miles.length,
        2022: sportData[2022].miles.length,
        2021: sportData[2021].miles.length,
        2020: sportData[2020].miles.length,
    }

    var distance2023: number = 0
    var distance2022: number = 0
    var distance2021: number = 0
    var distance2020: number = 0

    var elevation2023: number = 0
    var elevation2022: number = 0
    var elevation2021: number = 0
    var elevation2020: number = 0

    sportData[2023].miles.forEach((event: any) => {
        distance2023 = distance2023 + event.dist
        elevation2023 = elevation2023 + event.elev
    })

    sportData[2022].miles.forEach((event: any) => {
        distance2022 = distance2022 + event.dist
        elevation2022 = elevation2022 + event.elev
    })

    sportData[2021].miles.forEach((event: any) => {
        distance2021 = distance2021 + event.dist
        elevation2021 = elevation2021 + event.elev
    })

    sportData[2020].miles.forEach((event: any) => {
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

    const compiledMiles = {
        miles,
        number,
        distance,
        elevation,
    }

    console.log('All Miles:\n\n', compiledMiles)
    return compiledMiles
}

export default compileMiles
