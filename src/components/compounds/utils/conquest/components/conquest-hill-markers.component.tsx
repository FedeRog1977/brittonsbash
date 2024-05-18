import { FC } from 'react'
import { compileHills } from '../../../../../scripts'
import { ConquestHillMarkersProps } from '../types'
import { ConquestMarkerArray } from './conquest-hill-marker-array.component'

export const ConquestHillMarkers: FC<ConquestHillMarkersProps> = ({ type }) => {
    const hills = compileHills()

    if (type === 'Munro') {
        return <ConquestMarkerArray type={type} hills={hills.munros} />
    }

    if (type === 'Corbett') {
        return <ConquestMarkerArray type={type} hills={hills.corbetts} />
    }

    return <></>
}
