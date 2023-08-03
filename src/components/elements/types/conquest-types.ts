export type ConquestHillMarkersProps = {
    type: 'Munro' | 'Corbett' | 'Munro Top' | 'Corbett Top'
}

export type ConquestHillMarkerArrayProps = {
    hills: {
        name: string
        lat: number
        lon: number
        OSgrid: string
        elevation: number
        prominence: number
        isolation: number
        summit: string
        image: string
        type: string
    }[]
} & ConquestHillMarkersProps
