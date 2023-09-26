import { sportData } from '../../data'
import { CompiledProjectProps, removeDuplicates, toFeet, toMiles } from '..'

export function compileProjects() {
    const projects: CompiledProjectProps['projects'] = {
        2023: sportData[2023].projects,
        2022: sportData[2022].projects,
        2021: sportData[2021].projects,
        2020: sportData[2020].projects,
    }

    const number: CompiledProjectProps['number'] = {
        total:
            sportData[2023].projects.length +
            sportData[2022].projects.length +
            sportData[2021].projects.length +
            sportData[2020].projects.length,
        2023: sportData[2023].projects.length,
        2022: sportData[2022].projects.length,
        2021: sportData[2021].projects.length,
        2020: sportData[2020].projects.length,
    }

    const islandsTotal: any[] = []
    const munrosTotal: any[] = []
    const munroTopsTotal: any[] = []
    const corbettsTotal: any[] = []
    const corbettTopsTotal: any[] = []
    const grahamsTotal: any[] = []
    const subTwosTotal: any[] = []
    const donaldsTotal: any[] = []

    var distance2023: number = 0
    var elevation2023: number = 0

    const islands2023: any[] = []
    const munros2023: any[] = []
    const munroTops2023: any[] = []
    const corbetts2023: any[] = []
    const corbettTops2023: any[] = []
    const grahams2023: any[] = []
    const subTwos2023: any[] = []
    const donalds2023: any[] = []

    sportData[2023].projects.forEach((event: any) => {
        distance2023 = distance2023 + event.distance
        elevation2023 = elevation2023 + event.elevation

        event.islands?.forEach((island: any) => {
            islands2023.push(island)
        })
        event.munros?.forEach((munro: any) => {
            munros2023.push(munro)
        })
        event.munroTops?.forEach((munroTop: any) => {
            munroTops2023.push(munroTop)
        })
        event.corbetts?.forEach((corbett: any) => {
            corbetts2023.push(corbett)
        })
        event.corbettTops?.forEach((corbettTop: any) => {
            corbettTops2023.push(corbettTop)
        })
        event.grahams?.forEach((graham: any) => {
            grahams2023.push(graham)
        })
        event.subTwos?.forEach((subTwo: any) => {
            subTwos2023.push(subTwo)
        })
        event.donalds?.forEach((donald: any) => {
            donalds2023.push(donald)
        })
    })

    islands2023.forEach((island: any) => {
        islandsTotal.push(island)
    })
    munros2023.forEach((munro: any) => {
        munrosTotal.push(munro)
    })
    munroTops2023.forEach((munroTop: any) => {
        munroTopsTotal.push(munroTop)
    })
    corbetts2023.forEach((corbett: any) => {
        corbettsTotal.push(corbett)
    })
    corbettTops2023.forEach((corbettTop: any) => {
        corbettTopsTotal.push(corbettTop)
    })
    grahams2023.forEach((graham: any) => {
        grahamsTotal.push(graham)
    })
    subTwos2023.forEach((subTwo: any) => {
        subTwosTotal.push(subTwo)
    })
    donalds2023.forEach((donald: any) => {
        donaldsTotal.push(donald)
    })

    var distance2022: number = 0
    var elevation2022: number = 0

    const islands2022: any[] = []
    const munros2022: any[] = []
    const munroTops2022: any[] = []
    const corbetts2022: any[] = []
    const corbettTops2022: any[] = []
    const grahams2022: any[] = []
    const subTwos2022: any[] = []
    const donalds2022: any[] = []

    sportData[2022].projects.forEach((event: any) => {
        distance2022 = distance2022 + event.distance
        elevation2022 = elevation2022 + event.elevation

        event.islands?.forEach((island: any) => {
            islands2022.push(island)
        })
        event.munros?.forEach((munro: any) => {
            munros2022.push(munro)
        })
        event.munroTops?.forEach((munroTop: any) => {
            munroTops2022.push(munroTop)
        })
        event.corbetts?.forEach((corbett: any) => {
            corbetts2022.push(corbett)
        })
        event.corbettTops?.forEach((corbettTop: any) => {
            corbettTops2022.push(corbettTop)
        })
        event.grahams?.forEach((graham: any) => {
            grahams2022.push(graham)
        })
        event.subTwos?.forEach((subTwo: any) => {
            subTwos2022.push(subTwo)
        })
        event.donalds?.forEach((donald: any) => {
            donalds2022.push(donald)
        })
    })

    islands2022.forEach((island: any) => {
        islandsTotal.push(island)
    })
    munros2022.forEach((munro: any) => {
        munrosTotal.push(munro)
    })
    munroTops2022.forEach((munroTop: any) => {
        munroTopsTotal.push(munroTop)
    })
    corbetts2022.forEach((corbett: any) => {
        corbettsTotal.push(corbett)
    })
    corbettTops2022.forEach((corbettTop: any) => {
        corbettTopsTotal.push(corbettTop)
    })
    grahams2022.forEach((graham: any) => {
        grahamsTotal.push(graham)
    })
    subTwos2022.forEach((subTwo: any) => {
        subTwosTotal.push(subTwo)
    })
    donalds2022.forEach((donald: any) => {
        donaldsTotal.push(donald)
    })

    var distance2021: number = 0
    var elevation2021: number = 0

    const islands2021: any[] = []
    const munros2021: any[] = []
    const munroTops2021: any[] = []
    const corbetts2021: any[] = []
    const corbettTops2021: any[] = []
    const grahams2021: any[] = []
    const subTwos2021: any[] = []
    const donalds2021: any[] = []

    sportData[2021].projects.forEach((event: any) => {
        distance2021 = distance2021 + event.distance
        elevation2021 = elevation2021 + event.elevation

        event.islands?.forEach((island: any) => {
            islands2021.push(island)
        })
        event.munros?.forEach((munro: any) => {
            munros2021.push(munro)
        })
        event.munroTops?.forEach((munroTop: any) => {
            munroTops2021.push(munroTop)
        })
        event.corbetts?.forEach((corbett: any) => {
            corbetts2021.push(corbett)
        })
        event.corbettTops?.forEach((corbettTop: any) => {
            corbettTops2021.push(corbettTop)
        })
        event.grahams?.forEach((graham: any) => {
            grahams2021.push(graham)
        })
        event.subTwos?.forEach((subTwo: any) => {
            subTwos2021.push(subTwo)
        })
        event.donalds?.forEach((donald: any) => {
            donalds2021.push(donald)
        })
    })

    islands2021.forEach((island: any) => {
        islandsTotal.push(island)
    })
    munros2021.forEach((munro: any) => {
        munrosTotal.push(munro)
    })
    munroTops2021.forEach((munroTop: any) => {
        munroTopsTotal.push(munroTop)
    })
    corbetts2021.forEach((corbett: any) => {
        corbettsTotal.push(corbett)
    })
    corbettTops2021.forEach((corbettTop: any) => {
        corbettTopsTotal.push(corbettTop)
    })
    grahams2021.forEach((graham: any) => {
        grahamsTotal.push(graham)
    })
    subTwos2021.forEach((subTwo: any) => {
        subTwosTotal.push(subTwo)
    })
    donalds2021.forEach((donald: any) => {
        donaldsTotal.push(donald)
    })

    var distance2020: number = 0
    var elevation2020: number = 0

    const islands2020: any[] = []
    const munros2020: any[] = []
    const munroTops2020: any[] = []
    const corbetts2020: any[] = []
    const corbettTops2020: any[] = []
    const grahams2020: any[] = []
    const subTwos2020: any[] = []
    const donalds2020: any[] = []

    sportData[2020].projects.forEach((event: any) => {
        distance2020 = distance2020 + event.distance
        elevation2020 = elevation2020 + event.elevation

        event.islands?.forEach((island: any) => {
            islands2020.push(island)
        })
        event.munros?.forEach((munro: any) => {
            munros2020.push(munro)
        })
        event.munroTops?.forEach((munroTop: any) => {
            munroTops2020.push(munroTop)
        })
        event.corbetts?.forEach((corbett: any) => {
            corbetts2020.push(corbett)
        })
        event.corbettTops?.forEach((corbettTop: any) => {
            corbettTops2020.push(corbettTop)
        })
        event.grahams?.forEach((graham: any) => {
            grahams2020.push(graham)
        })
        event.subTwos?.forEach((subTwo: any) => {
            subTwos2020.push(subTwo)
        })
        event.donalds?.forEach((donald: any) => {
            donalds2020.push(donald)
        })
    })

    islands2020.forEach((island: any) => {
        islandsTotal.push(island)
    })
    munros2020.forEach((munro: any) => {
        munrosTotal.push(munro)
    })
    munroTops2020.forEach((munroTop: any) => {
        munroTopsTotal.push(munroTop)
    })
    corbetts2020.forEach((corbett: any) => {
        corbettsTotal.push(corbett)
    })
    corbettTops2020.forEach((corbettTop: any) => {
        corbettTopsTotal.push(corbettTop)
    })
    grahams2020.forEach((graham: any) => {
        grahamsTotal.push(graham)
    })
    subTwos2020.forEach((subTwo: any) => {
        subTwosTotal.push(subTwo)
    })
    donalds2020.forEach((donald: any) => {
        donaldsTotal.push(donald)
    })

    const islands: CompiledProjectProps['islands'] = {
        names: {
            total: islandsTotal.sort(),
            unique: removeDuplicates(islandsTotal).sort(),
            2023: islands2023.sort(),
            2022: islands2022.sort(),
            2021: islands2021.sort(),
            2020: islands2020.sort(),
        },
        number: {
            total: islandsTotal.length,
            unique: removeDuplicates(islandsTotal).length,
            2023: islands2023.length,
            2022: islands2022.length,
            2021: islands2021.length,
            2020: islands2020.length,
        },
    }

    const munros: CompiledProjectProps['munros'] = {
        names: {
            total: munrosTotal.sort(),
            unique: removeDuplicates(munrosTotal).sort(),
            2023: munros2023.sort(),
            2022: munros2022.sort(),
            2021: munros2021.sort(),
            2020: munros2020.sort(),
        },
        number: {
            total: munrosTotal.length,
            unique: removeDuplicates(munrosTotal).length,
            2023: munros2023.length,
            2022: munros2022.length,
            2021: munros2021.length,
            2020: munros2020.length,
        },
    }

    const munroTops: CompiledProjectProps['munroTops'] = {
        names: {
            total: munroTopsTotal.sort(),
            unique: removeDuplicates(munroTopsTotal).sort(),
            2023: munroTops2023.sort(),
            2022: munroTops2022.sort(),
            2021: munroTops2021.sort(),
            2020: munroTops2020.sort(),
        },
        number: {
            total: munroTopsTotal.length,
            unique: removeDuplicates(munroTopsTotal).length,
            2023: munroTops2023.length,
            2022: munroTops2022.length,
            2021: munroTops2021.length,
            2020: munroTops2020.length,
        },
    }

    const corbetts: CompiledProjectProps['corbetts'] = {
        names: {
            total: corbettsTotal.sort(),
            unique: removeDuplicates(corbettsTotal).sort(),
            2023: corbetts2023.sort(),
            2022: corbetts2022.sort(),
            2021: corbetts2021.sort(),
            2020: corbetts2020.sort(),
        },
        number: {
            total: corbettsTotal.length,
            unique: removeDuplicates(corbettsTotal).length,
            2023: corbetts2023.length,
            2022: corbetts2022.length,
            2021: corbetts2021.length,
            2020: corbetts2020.length,
        },
    }

    const corbettTops: CompiledProjectProps['corbettTops'] = {
        names: {
            total: corbettTopsTotal.sort(),
            unique: removeDuplicates(corbettTopsTotal).sort(),
            2023: corbettTops2023.sort(),
            2022: corbettTops2022.sort(),
            2021: corbettTops2021.sort(),
            2020: corbettTops2020.sort(),
        },
        number: {
            total: corbettTopsTotal.length,
            unique: removeDuplicates(corbettTopsTotal).length,
            2023: corbettTops2023.length,
            2022: corbettTops2022.length,
            2021: corbettTops2021.length,
            2020: corbettTops2020.length,
        },
    }

    const grahams: CompiledProjectProps['grahams'] = {
        names: {
            total: grahamsTotal.sort(),
            unique: removeDuplicates(grahamsTotal).sort(),
            2023: grahams2023.sort(),
            2022: grahams2022.sort(),
            2021: grahams2021.sort(),
            2020: grahams2020.sort(),
        },
        number: {
            total: grahamsTotal.length,
            unique: removeDuplicates(grahamsTotal).length,
            2023: grahams2023.length,
            2022: grahams2022.length,
            2021: grahams2021.length,
            2020: grahams2020.length,
        },
    }

    const subTwos: CompiledProjectProps['subTwos'] = {
        names: {
            total: subTwosTotal.sort(),
            unique: removeDuplicates(subTwosTotal).sort(),
            2023: subTwos2023.sort(),
            2022: subTwos2022.sort(),
            2021: subTwos2021.sort(),
            2020: subTwos2020.sort(),
        },
        number: {
            total: subTwosTotal.length,
            unique: removeDuplicates(subTwosTotal).length,
            2023: subTwos2023.length,
            2022: subTwos2022.length,
            2021: subTwos2021.length,
            2020: subTwos2020.length,
        },
    }

    const donalds: CompiledProjectProps['donalds'] = {
        names: {
            total: donaldsTotal.sort(),
            unique: removeDuplicates(donaldsTotal).sort(),
            2023: donalds2023.sort(),
            2022: donalds2022.sort(),
            2021: donalds2021.sort(),
            2020: donalds2020.sort(),
        },
        number: {
            total: donaldsTotal.length,
            unique: removeDuplicates(donaldsTotal).length,
            2023: donalds2023.length,
            2022: donalds2022.length,
            2021: donalds2021.length,
            2020: donalds2020.length,
        },
    }

    const distance: CompiledProjectProps['distance'] = {
        total: toMiles(
            distance2023 + distance2022 + distance2021 + distance2020
        ),
        2023: toMiles(distance2023),
        2022: toMiles(distance2022),
        2021: toMiles(distance2021),
        2020: toMiles(distance2020),
    }

    const elevation: CompiledProjectProps['elevation'] = {
        total: toFeet(
            elevation2023 + elevation2022 + elevation2021 + elevation2020
        ),
        2023: toFeet(elevation2023),
        2022: toFeet(elevation2022),
        2021: toFeet(elevation2021),
        2020: toFeet(elevation2020),
    }

    const compiledProjects: CompiledProjectProps = {
        projects,
        number,
        distance,
        elevation,
        islands,
        munros,
        munroTops,
        corbetts,
        corbettTops,
        grahams,
        subTwos,
        donalds,
    }

    console.log('All Projects:\n\n', compiledProjects)
    return compiledProjects
}
