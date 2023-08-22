import { ArticleProps, ImageProps } from '../../../components/bash-blocks'

export type EventEventProps = {
    id: string
    prefix: string
    names: string[]
    startDate: string
    endDate?: string
    description: string | ArticleProps['sections']
    images: ImageProps[]
    attractions?: string[]
    youthHostels?: string[]
}

export type EventSportEventRoadieProps = {
    id: string
    name: string
    dist: number
    elev: number
    time: string
    speed: number
}

export type EventSportEventProjectProps = {
    id: string
    name: string
    dist: number
    elev: number
    time: string
    companionship: number
    islands?: string[]
    munros?: string[]
    munroTops?: string[]
    corbetts?: string[]
    corbettTops?: string[]
    grahams?: string[]
    subTwos?: string[]
    donalds?: string[]
}

export type EventSportEventMilesProps = {
    id: string
    name: string
    dist: number
    elev: number
    time: string
}

export type EventProps = {
    event: EventEventProps
    sportEvent: EventSportEventProjectProps[]
    showSportEvent: boolean
}
