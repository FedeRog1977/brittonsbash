export type ConquestHillMarkersProps = {
    type: string
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
