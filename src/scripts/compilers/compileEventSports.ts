import { sportData } from '../../data/general/Sport'

export default function compileEventSports() {
    const allSport: any[] = []

    sportData[2023].projects.forEach((event: any) => {
        allSport.push(event)
    })

    sportData[2022].projects.forEach((event: any) => {
        allSport.push(event)
    })

    sportData[2021].projects.forEach((event: any) => {
        allSport.push(event)
    })

    sportData[2020].projects.forEach((event: any) => {
        allSport.push(event)
    })

    console.log('All Event Sports:\n\n', allSport)
    return allSport
}
