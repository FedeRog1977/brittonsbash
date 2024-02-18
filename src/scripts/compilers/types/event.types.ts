import { ArticleProps, ImageProps } from '../../../components/bash-blocks'

// Event Input Props

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

// ---

// Sport Props

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

// ---

// Compiled Props

export type CompiledEventProps = {
    event: EventProps
    sport: ProjectProps[]
    showSport: boolean
}

export type AggregationNumericalProps = {
    2020: number
    2021: number
    2022: number
    2023: number
    2024: number
    total: number
    unique?: number
}

export type AggregationAlphabeticalProps = {
    2020: string | string[]
    2021: string | string[]
    2022: string | string[]
    2023: string | string[]
    2024: string | string[]
    total: string | string[]
    unique?: string[]
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

// START OF TEMP REFACTOR OF Compiled Props

export type AggregationProps = {
    2024: string | string[]
    '2024Occurrences': number
    2023: string | string[]
    '2023Occurrences': number
    2022: string | string[]
    '2022Occurrences': number
    2021: string | string[]
    '2021Occurrences': number
    2020: string | string[]
    '2020Occurrences': number
    total: string | string[]
    totalOccurrences: number
    unique?: string[]
    uniqueOccurrences?: number
}

export type CompiledProjectPropsTemp = {
    projects: {
        2024: ProjectProps[]
        2023: ProjectProps[]
        2022: ProjectProps[]
        2021: ProjectProps[]
        2020: ProjectProps[]
    }
    occurrences: AggregationNumericalProps
    distance: AggregationAlphabeticalProps
    elevation: AggregationAlphabeticalProps
    islands: AggregationProps
    munros: AggregationProps
    munroTops: AggregationProps
    corbetts: AggregationProps
    corbettTops: AggregationProps
    grahams: AggregationProps
    subTwos: AggregationProps
    donalds: AggregationProps
}

// END OF TEMP REFACTOR OF Compiled Props

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

// ---

// Event Output Props

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

// ---
