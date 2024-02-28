import { hillData } from '../../../../../data'
import { ConquestHillMarkersProps } from '../types'
import { ConquestMarkerArray } from './conquest-hill-marker-array.component'

export const ConquestHillMarkers: React.FC<ConquestHillMarkersProps> = ({
    type,
}: ConquestHillMarkersProps) => {
    if (type === 'Munro') {
        return <ConquestMarkerArray type={type} hills={hillData.munros} />
    }

    if (type === 'Corbett') {
        return <ConquestMarkerArray type={type} hills={hillData.corbetts} />
    }

    return <></>
}
