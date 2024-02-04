import { ArticleProps, ImageProps } from '../../../components/bash-blocks'
import {
    AggregationNumericalProps,
    AggregationAlphabeticalProps,
} from './aggregation.types'

// Base Props

type FeaturesProps = {
    cities?: string[]
    districts?: string[]
    attractions?: string[]
    youthHostels?: string[]
    supermarkets?: string[]
    shops?: string[]
    foodstuffs?: string[]
    bakeries?: string[]
    gelaterias?: string[]
    restaurants?: string[]
    bars?: string[]
    filmingLocations?: string[]
}

export type EventProps = {
    id?: string
    prefix?: string
    names: string[]
    startDate: string
    endDate?: string
    features?: FeaturesProps
    description: string | ArticleProps['sections']
    images: ImageProps[]
}

export type RoadieProps = {
    id: string
    name: string
    distance: number
    elevation: number
    time: string
    speed?: number
}

export type ProjectProps = {
    id: string
    name: string
    distance: number
    elevation: number
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

export type MilesProps = {
    id: string
    name: string
    distance: number
    elevation: number
    time: string
}

// Intermediary Props

type AggregateSportProps = {
    roadies: RoadieProps[]
    projects: RoadieProps[]
    miles: MilesProps[]
}

export type SportProps = {
    2020: AggregateSportProps
    2021: AggregateSportProps
    2022: AggregateSportProps
    2023: AggregateSportProps
    2024: AggregateSportProps
}

// Compiled Props

export type CompiledEventProps = {
    event: EventProps
    sport: ProjectProps[]
    showSport: boolean
}

export type CompiledRoadieProps = {
    roadies: {
        2020: RoadieProps[]
        2021: RoadieProps[]
        2022: RoadieProps[]
        2023: RoadieProps[]
        2024: RoadieProps[]
    }
    number: AggregationNumericalProps
    distance: AggregationAlphabeticalProps
    elevation: AggregationAlphabeticalProps
    centuries: AggregationNumericalProps
    strathavens: AggregationNumericalProps
    fenwickWindfarms: AggregationNumericalProps
    fenwicks: AggregationNumericalProps
    windfarms: AggregationNumericalProps
    thorntonhalls: AggregationNumericalProps
}

export type CompiledProjectProps = {
    projects: {
        2020: ProjectProps[]
        2021: ProjectProps[]
        2022: ProjectProps[]
        2023: ProjectProps[]
        2024: ProjectProps[]
    }
    number: AggregationNumericalProps
    distance: AggregationAlphabeticalProps
    elevation: AggregationAlphabeticalProps
    islands: {
        names: AggregationAlphabeticalProps
        number: AggregationNumericalProps
    }
    munros: {
        names: AggregationAlphabeticalProps
        number: AggregationNumericalProps
    }
    munroTops: {
        names: AggregationAlphabeticalProps
        number: AggregationNumericalProps
    }
    corbetts: {
        names: AggregationAlphabeticalProps
        number: AggregationNumericalProps
    }
    corbettTops: {
        names: AggregationAlphabeticalProps
        number: AggregationNumericalProps
    }
    grahams: {
        names: AggregationAlphabeticalProps
        number: AggregationNumericalProps
    }
    subTwos: {
        names: AggregationAlphabeticalProps
        number: AggregationNumericalProps
    }
    donalds: {
        names: AggregationAlphabeticalProps
        number: AggregationNumericalProps
    }
}

export type CompiledMilesProps = {
    miles: {
        2020: MilesProps[]
        2021: MilesProps[]
        2022: MilesProps[]
        2023: MilesProps[]
        2024: MilesProps[]
    }
    number: AggregationNumericalProps
    distance: AggregationAlphabeticalProps
    elevation: AggregationAlphabeticalProps
    windfarms: AggregationNumericalProps
    thorntonhalls: AggregationNumericalProps
    waterfoots: AggregationNumericalProps
}

// Refactored Props

export type RefactoredEventNameProps = {
    refKey: number
    name: string
}

export type RefactoredEventProps = {
    prefix?: EventProps['prefix']
    names: RefactoredEventNameProps[]
    startDate: EventProps['startDate']
    endDate?: EventProps['endDate']
    features?: {
        cities?: string
        districts?: string
        attractions?: string
        youthHostels?: string
        supermarkets?: string
        shops?: string
        foodstuffs?: string
        bakeries?: string
        gelaterias?: string
        restaurants?: string
        bars?: string
        filmingLocations?: string
    }
    description: EventProps['description']
    images: EventProps['images']
    distance?: string
    elevation?: string
    time?: string
    islands?: string
    munros?: string
    munroTops?: string
    corbetts?: string
    corbettTops?: string
    grahams?: string
    subTwos?: string
    donalds?: string
    showSport: CompiledEventProps['showSport']
}
