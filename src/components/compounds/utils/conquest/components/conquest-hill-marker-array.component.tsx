import { FC } from 'react'
import { Marker, Popup } from 'react-leaflet'
import { generateUniqueKey, toCoords, toFeet } from '../../../../../scripts'
import { Spacing, Typography } from '../../../../bash-blocks'
import { ConquestHillMarkerArrayProps } from '../types'

export const ConquestMarkerArray: FC<ConquestHillMarkerArrayProps> = ({
    hills,
    type,
}) => (
    <>
        {hills.map(({ name, lat, lon, elevation, summit, image }, index) => {
            const { latFormatted, lonFormatted } = toCoords(lat, lon)

            return (
                <Marker key={generateUniqueKey(index)} position={[lat, lon]}>
                    <Popup>
                        <Spacing textAlign="center" mY={30}>
                            <Typography type="h4">{name}</Typography>
                            <Spacing mY={30} />
                            <Typography type="body" boldFace>
                                {type + ' at ' + toFeet(elevation)}
                            </Typography>
                            <Typography type="body">
                                {latFormatted + ', ' + lonFormatted}
                            </Typography>
                            <Typography type="body">
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
