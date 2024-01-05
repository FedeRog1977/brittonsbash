import { eventData } from '../../data'
import { EventProps } from './types'

export function compileEventEvents() {
    const allEvents: EventProps[] = []

    eventData[2023].forEach((event: any) => {
        allEvents.push(event)
    })

    eventData[2022].forEach((event: any) => {
        allEvents.push(event)
    })

    eventData[2021].forEach((event: any) => {
        allEvents.push(event)
    })

    eventData[2020].forEach((event: any) => {
        allEvents.push(event)
    })

    console.log('All Events:\n\n', allEvents)
    return allEvents
}
