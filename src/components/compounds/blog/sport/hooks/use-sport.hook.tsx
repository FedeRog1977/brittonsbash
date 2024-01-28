import { useState } from 'react'
import {
    compileMiles,
    compileProjects,
    compileRoadies,
} from '../../../../../scripts'

export function useSport() {
    const compiledRoadies = compileRoadies()
    const compiledProjects = compileProjects()
    const compiledMiles = compileMiles()

    const [sportData, setSportData]: any = useState(compiledRoadies)

    const [isRoadies, setIsRoadies] = useState(true)
    const [isProjects, setIsProjects] = useState(false)
    const [isMiles, setIsMiles] = useState(false)

    const title: string = isRoadies
        ? 'Roadies'
        : isProjects
        ? 'Projects'
        : isMiles
        ? 'Miles'
        : 'Unrecognised Sport'

    const subTitle: string = isRoadies
        ? 'Road Cycling'
        : isProjects
        ? 'Hiking / Fell Running'
        : isMiles
        ? 'Walking / Running'
        : 'Unrecognised Sport'

    const description: string = isRoadies
        ? 'My Roadies hit all of the major rewards I look for in an activity: enjoyment, fitness, and calorie burn. Both of my major routes are more than thirty miles long which is what I look for in these things from a Roadie.'
        : isProjects
        ? 'My Projects hit all of the major rewards I look for in an activity: enjoyment, fitness, and calorie burn. As long as a Project is over ten miles long and has a decent amount of climbing, it delivers all of these things. Perhaps even more so that the other sports.'
        : isMiles
        ? 'My Miles, as of recently, hit all of the major rewards I look for in an activity: enjoyment, fitness, and calorie burn. My most frequent route is a Waterfoot, which I have just started segmenting into a half-walk, half-run. Before this they delivered all but fitness. Now that has changed.'
        : 'This is not even a sport yet.'

    const routes = isRoadies
        ? [
              {
                  title: 'Centuries',
                  entries: [
                      `${sportData.centuries.total}`,
                      `${sportData.centuries[2024]}`,
                      `${sportData.centuries[2023]}`,
                      `${sportData.centuries[2022]}`,
                      `${sportData.centuries[2021]}`,
                      `${sportData.centuries[2020]}`,
                  ],
              },
              {
                  title: 'Strathavens',
                  entries: [
                      `${sportData.strathavens.total}`,
                      `${sportData.strathavens[2024]}`,
                      `${sportData.strathavens[2023]}`,
                      `${sportData.strathavens[2022]}`,
                      `${sportData.strathavens[2021]}`,
                      `${sportData.strathavens[2020]}`,
                  ],
              },
              {
                  title: 'Fenwick + Wind Farms',
                  entries: [
                      `${sportData.fenwickWindfarms.total}`,
                      `${sportData.fenwickWindfarms[2024]}`,
                      `${sportData.fenwickWindfarms[2023]}`,
                      `${sportData.fenwickWindfarms[2022]}`,
                      `${sportData.fenwickWindfarms[2021]}`,
                      `${sportData.fenwickWindfarms[2020]}`,
                  ],
              },
              {
                  title: 'Fenwicks',
                  entries: [
                      `${sportData.fenwicks.total}`,
                      `${sportData.fenwicks[2024]}`,
                      `${sportData.fenwicks[2023]}`,
                      `${sportData.fenwicks[2022]}`,
                      `${sportData.fenwicks[2021]}`,
                      `${sportData.fenwicks[2020]}`,
                  ],
              },
              {
                  title: 'Wind Farms',
                  entries: [
                      `${sportData.windfarms.total}`,
                      `${sportData.windfarms[2024]}`,
                      `${sportData.windfarms[2023]}`,
                      `${sportData.windfarms[2022]}`,
                      `${sportData.windfarms[2021]}`,
                      `${sportData.windfarms[2020]}`,
                  ],
              },
              {
                  title: 'Thorntonhalls',
                  entries: [
                      `${sportData.thorntonhalls.total}`,
                      `${sportData.thorntonhalls[2024]}`,
                      `${sportData.thorntonhalls[2023]}`,
                      `${sportData.thorntonhalls[2022]}`,
                      `${sportData.thorntonhalls[2021]}`,
                      `${sportData.thorntonhalls[2020]}`,
                  ],
              },
          ]
        : isProjects
        ? [
              {
                  title: 'Islands',
                  entries: [
                      `${sportData.islands.number.unique}`,
                      `${sportData.islands.number.total}`,
                      `${sportData.islands.number[2024]}`,
                      `${sportData.islands.number[2023]}`,
                      `${sportData.islands.number[2022]}`,
                      `${sportData.islands.number[2021]}`,
                      `${sportData.islands.number[2020]}`,
                  ],
              },
              {
                  title: 'Munros',
                  entries: [
                      `${sportData.munros.number.unique}`,
                      `${sportData.munros.number.total}`,
                      `${sportData.munros.number[2024]}`,
                      `${sportData.munros.number[2023]}`,
                      `${sportData.munros.number[2022]}`,
                      `${sportData.munros.number[2021]}`,
                      `${sportData.munros.number[2020]}`,
                  ],
              },
              {
                  title: 'Munro Tops',
                  entries: [
                      `${sportData.munroTops.number.unique}`,
                      `${sportData.munroTops.number.total}`,
                      `${sportData.munroTops.number[2024]}`,
                      `${sportData.munroTops.number[2023]}`,
                      `${sportData.munroTops.number[2022]}`,
                      `${sportData.munroTops.number[2021]}`,
                      `${sportData.munroTops.number[2020]}`,
                  ],
              },
              {
                  title: 'Corbetts',
                  entries: [
                      `${sportData.corbetts.number.unique}`,
                      `${sportData.corbetts.number.total}`,
                      `${sportData.corbetts.number[2024]}`,
                      `${sportData.corbetts.number[2023]}`,
                      `${sportData.corbetts.number[2022]}`,
                      `${sportData.corbetts.number[2021]}`,
                      `${sportData.corbetts.number[2020]}`,
                  ],
              },
              {
                  title: 'Corbett Tops',
                  entries: [
                      `${sportData.corbettTops.number.unique}`,
                      `${sportData.corbettTops.number.total}`,
                      `${sportData.corbettTops.number[2024]}`,
                      `${sportData.corbettTops.number[2023]}`,
                      `${sportData.corbettTops.number[2022]}`,
                      `${sportData.corbettTops.number[2021]}`,
                      `${sportData.corbettTops.number[2020]}`,
                  ],
              },
              {
                  title: 'Grahams',
                  entries: [
                      `${sportData.grahams.number.unique}`,
                      `${sportData.grahams.number.total}`,
                      `${sportData.grahams.number[2024]}`,
                      `${sportData.grahams.number[2023]}`,
                      `${sportData.grahams.number[2022]}`,
                      `${sportData.grahams.number[2021]}`,
                      `${sportData.grahams.number[2020]}`,
                  ],
              },
              {
                  title: 'Sub2000s',
                  entries: [
                      `${sportData.subTwos.number.unique}`,
                      `${sportData.subTwos.number.total}`,
                      `${sportData.subTwos.number[2024]}`,
                      `${sportData.subTwos.number[2023]}`,
                      `${sportData.subTwos.number[2022]}`,
                      `${sportData.subTwos.number[2021]}`,
                      `${sportData.subTwos.number[2020]}`,
                  ],
              },
              {
                  title: 'Donalds',
                  entries: [
                      `${sportData.donalds.number.unique}`,
                      `${sportData.donalds.number.total}`,
                      `${sportData.donalds.number[2024]}`,
                      `${sportData.donalds.number[2023]}`,
                      `${sportData.donalds.number[2022]}`,
                      `${sportData.donalds.number[2021]}`,
                      `${sportData.donalds.number[2020]}`,
                  ],
              },
          ]
        : isMiles
        ? [
              {
                  title: 'Wind Farms',
                  entries: [
                      `${sportData.windfarms.total}`,
                      `${sportData.windfarms[2024]}`,
                      `${sportData.windfarms[2023]}`,
                      `${sportData.windfarms[2022]}`,
                      `${sportData.windfarms[2021]}`,
                      `${sportData.windfarms[2020]}`,
                  ],
              },
              {
                  title: 'Thorntonhalls',
                  entries: [
                      `${sportData.thorntonhalls.total}`,
                      `${sportData.thorntonhalls[2024]}`,
                      `${sportData.thorntonhalls[2023]}`,
                      `${sportData.thorntonhalls[2022]}`,
                      `${sportData.thorntonhalls[2021]}`,
                      `${sportData.thorntonhalls[2020]}`,
                  ],
              },
              {
                  title: 'Waterfoots',
                  entries: [
                      `${sportData.waterfoots.total}`,
                      `${sportData.waterfoots[2024]}`,
                      `${sportData.waterfoots[2023]}`,
                      `${sportData.waterfoots[2022]}`,
                      `${sportData.waterfoots[2021]}`,
                      `${sportData.waterfoots[2020]}`,
                  ],
              },
          ]
        : []

    const sport2024 = isRoadies
        ? sportData.roadies[2024]
        : isProjects
        ? sportData.projects[2024]
        : isMiles
        ? sportData.miles[2024]
        : sportData.roadies[2024]

    const sport2023 = isRoadies
        ? sportData.roadies[2023]
        : isProjects
        ? sportData.projects[2023]
        : isMiles
        ? sportData.miles[2023]
        : sportData.roadies[2023]

    const sport2022 = isRoadies
        ? sportData.roadies[2022]
        : isProjects
        ? sportData.projects[2022]
        : isMiles
        ? sportData.miles[2022]
        : sportData.roadies[2022]

    const sport2021 = isRoadies
        ? sportData.roadies[2021]
        : isProjects
        ? sportData.projects[2021]
        : isMiles
        ? sportData.miles[2021]
        : sportData.roadies[2021]

    const sport2020 = isRoadies
        ? sportData.roadies[2020]
        : isProjects
        ? sportData.projects[2020]
        : isMiles
        ? sportData.miles[2020]
        : sportData.roadies[2020]

    const handleSelect = (e: any) => {
        if (e.currentTarget.value === 'roadies') {
            setSportData(compiledRoadies)
            setIsRoadies(true)
            setIsProjects(false)
            setIsMiles(false)
        } else if (e.currentTarget.value === 'projects') {
            setSportData(compiledProjects)
            setIsRoadies(false)
            setIsProjects(true)
            setIsMiles(false)
        } else if (e.currentTarget.value === 'miles') {
            setSportData(compiledMiles)
            setIsRoadies(false)
            setIsProjects(false)
            setIsMiles(true)
        } else if (e.currentTarget.value === 'tennis') {
        } else {
            setSportData(compiledRoadies)
            setIsRoadies(true)
            setIsProjects(false)
            setIsMiles(false)
        }
    }

    return {
        handleSelect,
        sportData,
        sport2024,
        sport2023,
        sport2022,
        sport2021,
        sport2020,
        title,
        subTitle,
        description,
        routes,
        isRoadies,
        isProjects,
        isMiles,
    }
}
