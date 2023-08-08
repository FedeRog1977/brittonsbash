import { ConquestMarkerArray } from '.'
import { hillData } from '../../../../data'
import { ConquestHillMarkersProps } from '../..'

export const ConquestHillMarkers: React.FC<ConquestHillMarkersProps> = ({
    ...props
}: ConquestHillMarkersProps) => {
    if (props.type === 'Munro') {
        return <ConquestMarkerArray type={props.type} hills={hillData.munros} />
    }

    if (props.type === 'Corbett') {
        return (
            <ConquestMarkerArray type={props.type} hills={hillData.corbetts} />
        )
    }

    return <></>
}
