import { ProjectProps } from '.'
import { sportData } from '../../data'

export function compileEventSports() {
    const allSport: ProjectProps[] = []

    sportData[2023].projects.forEach((event: ProjectProps) => {
        allSport.push(event)
    })

    sportData[2022].projects.forEach((event: ProjectProps) => {
        allSport.push(event)
    })

    sportData[2021].projects.forEach((event: ProjectProps) => {
        allSport.push(event)
    })

    sportData[2020].projects.forEach((event: ProjectProps) => {
        allSport.push(event)
    })

    console.log('All Event Sports:\n\n', allSport)
    return allSport
}
