import { sportData } from '../../data'
import { CompiledRoadieProps, toFeet, toMiles } from '..'

export function compileRoadies() {
    const roadies: CompiledRoadieProps['roadies'] = {
        2023: sportData[2023].roadies,
        2022: sportData[2022].roadies,
        2021: sportData[2021].roadies,
        2020: sportData[2020].roadies,
    }

    const number: CompiledRoadieProps['number'] = {
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

    var centuriesTotal: number = 0
    var strathavensTotal: number = 0
    var fenwickWindfarmsTotal: number = 0
    var fenwicksTotal: number = 0
    var windfarmsTotal: number = 0
    var thorntonhallsTotal: number = 0

    var distance2023: number = 0
    var elevation2023: number = 0

    var centuries2023: number = 0
    var strathavens2023: number = 0
    var fenwickWindfarms2023: number = 0
    var fenwicks2023: number = 0
    var windfarms2023: number = 0
    var thorntonhalls2023: number = 0

    sportData[2023].roadies.forEach((event: any) => {
        distance2023 = distance2023 + event.distance
        elevation2023 = elevation2023 + event.elevation

        event.name === 'Century'
            ? (centuries2023 = centuries2023 + 1)
            : (centuries2023 = centuries2023 + 0)

        event.name === 'Strathaven'
            ? (strathavens2023 = strathavens2023 + 1)
            : (strathavens2023 = strathavens2023 + 0)

        event.name === 'Fenwick + Wind Farm'
            ? (fenwickWindfarms2023 = fenwickWindfarms2023 + 1)
            : (fenwickWindfarms2023 = fenwickWindfarms2023 + 0)

        event.name === 'Fenwick'
            ? (fenwicks2023 = fenwicks2023 + 1)
            : (fenwicks2023 = fenwicks2023 + 0)

        event.name === 'Wind Farm'
            ? (windfarms2023 = windfarms2023 + 1)
            : (windfarms2023 = windfarms2023 + 0)

        event.name === 'Thorntonhall'
            ? (thorntonhalls2023 = thorntonhalls2023 + 1)
            : (thorntonhalls2023 = thorntonhalls2023 + 0)
    })

    var distance2022: number = 0
    var elevation2022: number = 0

    var centuries2022: number = 0
    var strathavens2022: number = 0
    var fenwickWindfarms2022: number = 0
    var fenwicks2022: number = 0
    var windfarms2022: number = 0
    var thorntonhalls2022: number = 0

    sportData[2022].roadies.forEach((event: any) => {
        distance2022 = distance2022 + event.distance
        elevation2022 = elevation2022 + event.elevation

        event.name === 'Century'
            ? (centuries2022 = centuries2022 + 1)
            : (centuries2022 = centuries2022 + 0)

        event.name === 'Strathaven'
            ? (strathavens2022 = strathavens2022 + 1)
            : (strathavens2022 = strathavens2022 + 0)

        event.name === 'Fenwick + Wind Farm'
            ? (fenwickWindfarms2022 = fenwickWindfarms2022 + 1)
            : (fenwickWindfarms2022 = fenwickWindfarms2022 + 0)

        event.name === 'Fenwick'
            ? (fenwicks2022 = fenwicks2022 + 1)
            : (fenwicks2022 = fenwicks2022 + 0)

        event.name === 'Wind Farm'
            ? (windfarms2022 = windfarms2022 + 1)
            : (windfarms2022 = windfarms2022 + 0)

        event.name === 'Thorntonhall'
            ? (thorntonhalls2022 = thorntonhalls2022 + 1)
            : (thorntonhalls2022 = thorntonhalls2022 + 0)
    })

    var distance2021: number = 0
    var elevation2021: number = 0

    var centuries2021: number = 0
    var strathavens2021: number = 0
    var fenwickWindfarms2021: number = 0
    var fenwicks2021: number = 0
    var windfarms2021: number = 0
    var thorntonhalls2021: number = 0

    sportData[2021].roadies.forEach((event: any) => {
        distance2021 = distance2021 + event.distance
        elevation2021 = elevation2021 + event.elevation

        event.name === 'Century'
            ? (centuries2021 = centuries2021 + 1)
            : (centuries2021 = centuries2021 + 0)

        event.name === 'Strathaven'
            ? (strathavens2021 = strathavens2021 + 1)
            : (strathavens2021 = strathavens2021 + 0)

        event.name === 'Fenwick + Wind Farm'
            ? (fenwickWindfarms2021 = fenwickWindfarms2021 + 1)
            : (fenwickWindfarms2021 = fenwickWindfarms2021 + 0)

        event.name === 'Fenwick'
            ? (fenwicks2021 = fenwicks2021 + 1)
            : (fenwicks2021 = fenwicks2021 + 0)

        event.name === 'Wind Farm'
            ? (windfarms2021 = windfarms2021 + 1)
            : (windfarms2021 = windfarms2021 + 0)

        event.name === 'Thorntonhall'
            ? (thorntonhalls2021 = thorntonhalls2021 + 1)
            : (thorntonhalls2021 = thorntonhalls2021 + 0)
    })

    var distance2020: number = 0
    var elevation2020: number = 0

    var centuries2020: number = 0
    var strathavens2020: number = 0
    var fenwickWindfarms2020: number = 0
    var fenwicks2020: number = 0
    var windfarms2020: number = 0
    var thorntonhalls2020: number = 0

    sportData[2020].roadies.forEach((event: any) => {
        distance2020 = distance2020 + event.distance
        elevation2020 = elevation2020 + event.elevation

        event.name === 'Century'
            ? (centuries2020 = centuries2020 + 1)
            : (centuries2020 = centuries2020 + 0)

        event.name === 'Strathaven'
            ? (strathavens2020 = strathavens2020 + 1)
            : (strathavens2020 = strathavens2020 + 0)

        event.name === 'Fenwick + Wind Farm'
            ? (fenwickWindfarms2020 = fenwickWindfarms2020 + 1)
            : (fenwickWindfarms2020 = fenwickWindfarms2020 + 0)

        event.name === 'Fenwick'
            ? (fenwicks2020 = fenwicks2020 + 1)
            : (fenwicks2020 = fenwicks2020 + 0)

        event.name === 'Wind Farm'
            ? (windfarms2020 = windfarms2020 + 1)
            : (windfarms2020 = windfarms2020 + 0)

        event.name === 'Thorntonhall'
            ? (thorntonhalls2020 = thorntonhalls2020 + 1)
            : (thorntonhalls2020 = thorntonhalls2020 + 0)
    })

    centuriesTotal =
        centuries2023 + centuries2022 + centuries2021 + centuries2020
    strathavensTotal =
        strathavens2023 + strathavens2022 + strathavens2021 + strathavens2020
    fenwickWindfarmsTotal =
        fenwickWindfarms2023 +
        fenwickWindfarms2022 +
        fenwickWindfarms2021 +
        fenwickWindfarms2020
    fenwicksTotal = fenwicks2023 + fenwicks2022 + fenwicks2021 + fenwicks2020
    windfarmsTotal =
        windfarms2023 + windfarms2022 + windfarms2021 + windfarms2020
    thorntonhallsTotal =
        thorntonhalls2023 +
        thorntonhalls2022 +
        thorntonhalls2021 +
        thorntonhalls2020

    const centuries: CompiledRoadieProps['centuries'] = {
        total: centuriesTotal,
        2023: centuries2023,
        2022: centuries2022,
        2021: centuries2021,
        2020: centuries2020,
    }

    const strathavens: CompiledRoadieProps['strathavens'] = {
        total: strathavensTotal,
        2023: strathavens2023,
        2022: strathavens2022,
        2021: strathavens2021,
        2020: strathavens2020,
    }

    const fenwickWindfarms: CompiledRoadieProps['fenwickWindfarms'] = {
        total: fenwickWindfarmsTotal,
        2023: fenwickWindfarms2023,
        2022: fenwickWindfarms2022,
        2021: fenwickWindfarms2021,
        2020: fenwickWindfarms2020,
    }

    const fenwicks: CompiledRoadieProps['fenwicks'] = {
        total: fenwicksTotal,
        2023: fenwicks2023,
        2022: fenwicks2022,
        2021: fenwicks2021,
        2020: fenwicks2020,
    }

    const windfarms: CompiledRoadieProps['windfarms'] = {
        total: windfarmsTotal,
        2023: windfarms2023,
        2022: windfarms2022,
        2021: windfarms2021,
        2020: windfarms2020,
    }

    const thorntonhalls: CompiledRoadieProps['thorntonhalls'] = {
        total: thorntonhallsTotal,
        2023: thorntonhalls2023,
        2022: thorntonhalls2022,
        2021: thorntonhalls2021,
        2020: thorntonhalls2020,
    }

    const distance: CompiledRoadieProps['distance'] = {
        total: toMiles(
            distance2023 + distance2022 + distance2021 + distance2020
        ),
        2023: toMiles(distance2023),
        2022: toMiles(distance2022),
        2021: toMiles(distance2021),
        2020: toMiles(distance2020),
    }

    const elevation: CompiledRoadieProps['elevation'] = {
        total: toFeet(
            elevation2023 + elevation2022 + elevation2021 + elevation2020
        ),
        2023: toFeet(elevation2023),
        2022: toFeet(elevation2022),
        2021: toFeet(elevation2021),
        2020: toFeet(elevation2020),
    }

    const compiledRoadies: CompiledRoadieProps = {
        roadies,
        number,
        distance,
        elevation,
        centuries,
        strathavens,
        fenwickWindfarms,
        fenwicks,
        windfarms,
        thorntonhalls,
    }

    console.log('All Roadies:\n\n', compiledRoadies)
    return compiledRoadies
}
