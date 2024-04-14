import { getSessionItem } from '../api'
import { toFeet, toMiles } from '../formatters'
import { CompiledMilesProps, MilesProps } from './types'

export function compileMiles() {
    const sport = getSessionItem('response-sport')

    const miles: CompiledMilesProps['miles'] = {
        2024: sport[2024].miles,
        2023: sport[2023].miles,
        2022: sport[2022].miles,
        2021: sport[2021].miles,
        2020: sport[2020].miles,
    }

    const number: CompiledMilesProps['number'] = {
        total:
            sport[2024].miles.length +
            sport[2023].miles.length +
            sport[2022].miles.length +
            sport[2021].miles.length +
            sport[2020].miles.length,
        2024: sport[2024].miles.length,
        2023: sport[2023].miles.length,
        2022: sport[2022].miles.length,
        2021: sport[2021].miles.length,
        2020: sport[2020].miles.length,
    }

    var windfarmsTotal: number = 0
    var thorntonhallsTotal: number = 0
    var waterfootsTotal: number = 0

    var distance2024: number = 0
    var elevation2024: number = 0

    var windfarms2024: number = 0
    var thorntonhalls2024: number = 0
    var waterfoots2024: number = 0

    sport[2024].miles.forEach((event: MilesProps) => {
        distance2024 = distance2024 + event.distance
        elevation2024 = elevation2024 + event.elevation

        event.name === 'Wind Farm'
            ? (windfarms2024 = windfarms2024 + 1)
            : (windfarms2024 = windfarms2024 + 0)

        event.name === 'Thorntonhall'
            ? (thorntonhalls2024 = thorntonhalls2024 + 1)
            : (thorntonhalls2024 = thorntonhalls2024 + 0)

        event.name === 'Waterfoot'
            ? (waterfoots2024 = waterfoots2024 + 1)
            : (waterfoots2024 = waterfoots2024 + 0)
    })

    var distance2023: number = 0
    var elevation2023: number = 0

    var windfarms2023: number = 0
    var thorntonhalls2023: number = 0
    var waterfoots2023: number = 0

    sport[2023].miles.forEach((event: MilesProps) => {
        distance2023 = distance2023 + event.distance
        elevation2023 = elevation2023 + event.elevation

        event.name === 'Wind Farm'
            ? (windfarms2023 = windfarms2023 + 1)
            : (windfarms2023 = windfarms2023 + 0)

        event.name === 'Thorntonhall'
            ? (thorntonhalls2023 = thorntonhalls2023 + 1)
            : (thorntonhalls2023 = thorntonhalls2023 + 0)

        event.name === 'Waterfoot'
            ? (waterfoots2023 = waterfoots2023 + 1)
            : (waterfoots2023 = waterfoots2023 + 0)
    })

    var distance2022: number = 0
    var elevation2022: number = 0

    var windfarms2022: number = 0
    var thorntonhalls2022: number = 0
    var waterfoots2022: number = 0

    sport[2022].miles.forEach((event: MilesProps) => {
        distance2022 = distance2022 + event.distance
        elevation2022 = elevation2022 + event.elevation

        event.name === 'Wind Farm'
            ? (windfarms2022 = windfarms2022 + 1)
            : (windfarms2022 = windfarms2022 + 0)

        event.name === 'Thorntonhall'
            ? (thorntonhalls2022 = thorntonhalls2022 + 1)
            : (thorntonhalls2022 = thorntonhalls2022 + 0)

        event.name === 'Waterfoot'
            ? (waterfoots2022 = waterfoots2022 + 1)
            : (waterfoots2022 = waterfoots2022 + 0)
    })

    var distance2021: number = 0
    var elevation2021: number = 0

    var windfarms2021: number = 0
    var thorntonhalls2021: number = 0
    var waterfoots2021: number = 0

    sport[2021].miles.forEach((event: MilesProps) => {
        distance2021 = distance2021 + event.distance
        elevation2021 = elevation2021 + event.elevation

        event.name === 'Wind Farm'
            ? (windfarms2021 = windfarms2021 + 1)
            : (windfarms2021 = windfarms2021 + 0)

        event.name === 'Thorntonhall'
            ? (thorntonhalls2021 = thorntonhalls2021 + 1)
            : (thorntonhalls2021 = thorntonhalls2021 + 0)

        event.name === 'Waterfoot'
            ? (waterfoots2021 = waterfoots2021 + 1)
            : (waterfoots2021 = waterfoots2021 + 0)
    })

    var distance2020: number = 0
    var elevation2020: number = 0

    var windfarms2020: number = 0
    var thorntonhalls2020: number = 0
    var waterfoots2020: number = 0

    sport[2020].miles.forEach((event: MilesProps) => {
        distance2020 = distance2020 + event.distance
        elevation2020 = elevation2020 + event.elevation

        event.name === 'Wind Farm'
            ? (windfarms2020 = windfarms2020 + 1)
            : (windfarms2020 = windfarms2020 + 0)

        event.name === 'Thorntonhall'
            ? (thorntonhalls2020 = thorntonhalls2020 + 1)
            : (thorntonhalls2020 = thorntonhalls2020 + 0)

        event.name === 'Waterfoot'
            ? (waterfoots2020 = waterfoots2020 + 1)
            : (waterfoots2020 = waterfoots2020 + 0)
    })

    windfarmsTotal =
        windfarms2024 +
        windfarms2023 +
        windfarms2022 +
        windfarms2021 +
        windfarms2020
    thorntonhallsTotal =
        thorntonhalls2024 +
        thorntonhalls2023 +
        thorntonhalls2022 +
        thorntonhalls2021 +
        thorntonhalls2020
    waterfootsTotal =
        waterfoots2024 +
        waterfoots2023 +
        waterfoots2022 +
        waterfoots2021 +
        waterfoots2020

    const windfarms: CompiledMilesProps['windfarms'] = {
        total: windfarmsTotal,
        2024: windfarms2024,
        2023: windfarms2023,
        2022: windfarms2022,
        2021: windfarms2021,
        2020: windfarms2020,
    }

    const thorntonhalls: CompiledMilesProps['thorntonhalls'] = {
        total: thorntonhallsTotal,
        2024: thorntonhalls2024,
        2023: thorntonhalls2023,
        2022: thorntonhalls2022,
        2021: thorntonhalls2021,
        2020: thorntonhalls2020,
    }

    const waterfoots: CompiledMilesProps['waterfoots'] = {
        total: waterfootsTotal,
        2024: waterfoots2024,
        2023: waterfoots2023,
        2022: waterfoots2022,
        2021: waterfoots2021,
        2020: waterfoots2020,
    }

    const distance: CompiledMilesProps['distance'] = {
        total: toMiles(
            distance2024 +
                distance2023 +
                distance2022 +
                distance2021 +
                distance2020
        ),
        2024: toMiles(distance2024),
        2023: toMiles(distance2023),
        2022: toMiles(distance2022),
        2021: toMiles(distance2021),
        2020: toMiles(distance2020),
    }

    const elevation: CompiledMilesProps['elevation'] = {
        total: toFeet(
            elevation2024 +
                elevation2023 +
                elevation2022 +
                elevation2021 +
                elevation2020
        ),
        2024: toFeet(elevation2024),
        2023: toFeet(elevation2023),
        2022: toFeet(elevation2022),
        2021: toFeet(elevation2021),
        2020: toFeet(elevation2020),
    }

    const compiledMiles: CompiledMilesProps = {
        miles,
        number,
        distance,
        elevation,
        windfarms,
        thorntonhalls,
        waterfoots,
    }

    // console.log('All Miles:\n\n', compiledMiles)
    return compiledMiles
}
