import { FC } from 'react'
import { Marker, Popup } from 'react-leaflet'
import { generateUniqueKey, toCoords, toFeet } from '../../../../../scripts'
import { Spacing, Typography } from '../../../../bash-blocks'
import { HillMarkerProps } from './hill-markers.component'

type HillMarkerArrayProps = {
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
} & HillMarkerProps

export const HillMarkerArray: FC<HillMarkerArrayProps> = ({ hills, type }) => (
    <>
        {hills.map(({ name, lat, lon, elevation, summit, image }, index) => {
            const { latFormatted, lonFormatted } = toCoords(lat, lon)

            return (
                <Marker key={generateUniqueKey(index)} position={[lat, lon]}>
                    <Popup>
                        <Spacing textAlign="center" gapsY={30}>
                            <Typography variant="h4">{name}</Typography>
                            <Typography variant="body" boldFace>
                                {type + ' at ' + toFeet(elevation)}
                            </Typography>
                            <Typography variant="body">
                                {latFormatted + ', ' + lonFormatted}
                            </Typography>
                            <Typography variant="body">
                                {summit + ' summit'}
                            </Typography>
                        </Spacing>

                        <img
                            style={{
                                width: '250px',
                            }}
                            src="https://lewisbritton.com/images/general/placeholder.webp"
                            alt="placeholder"
                        />
                    </Popup>
                </Marker>
            )
        })}
    </>
)
