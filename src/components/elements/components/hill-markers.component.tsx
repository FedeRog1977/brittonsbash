import { Marker, Popup } from 'react-leaflet'
import { hillData } from '../../../data'
import { toCoords, toFeet } from '../../../scripts'
import { Spacing, Typography } from '../../bash-blocks'

export const HillMarkers = ({ type }: any) => {
    const MarkerArray = ({ type, hills }: any) => (
        <>
            {hills.map(({ name, lat, lon, elevation, summit, image }: any) => {
                const { latFormatted, lonFormatted } = toCoords(lat, lon)

                return (
                    <Marker key={name} position={[lat, lon]}>
                        <Popup>
                            <Spacing textAlign="center">
                                <Typography type="h3" content={name} />
                                <Typography
                                    type="h4"
                                    content={type + ' at ' + toFeet(elevation)}
                                />
                                <Spacing mY={20} />
                                <Typography type="h4" content="Found At" />
                                <Typography
                                    type="body"
                                    content={latFormatted + ', ' + lonFormatted}
                                />
                                <Spacing mY={20} />
                                <Typography type="h4" content="Marked By" />
                                <Typography type="body" content={summit} />
                            </Spacing>
                        </Popup>
                    </Marker>
                )
            })}
        </>
    )

    if (type === 'Munro') {
        return <MarkerArray type={type} hills={hillData.munros} />
    }

    if (type === 'Corbett') {
        return <MarkerArray type={type} hills={hillData.corbetts} />
    }

    return <></>
}
