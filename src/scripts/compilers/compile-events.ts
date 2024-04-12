import { getSessionItem } from '../api'
import { EventProps } from './types'

export function compileEvents() {
    const events = getSessionItem('response-events')
    const eventsParsed: EventProps[] = []

    events[2024].forEach((event: any) => {
        eventsParsed.push(event)
    })

    events[2023].forEach((event: any) => {
        eventsParsed.push(event)
    })

    events[2022].forEach((event: any) => {
        eventsParsed.push(event)
    })

    events[2021].forEach((event: any) => {
        eventsParsed.push(event)
    })

    events[2020].forEach((event: any) => {
        eventsParsed.push(event)
    })

    return { events, eventsParsed }
}
