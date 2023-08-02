import { Marker, Popup } from 'react-leaflet'
import { ConquestHillMarkerArrayProps } from '..'
import { toCoords, toFeet } from '../../../scripts'
import { Spacing, Typography } from '../../bash-blocks'

export const ConquestMarkerArray: React.FC<ConquestHillMarkerArrayProps> = ({
    ...props
}: ConquestHillMarkerArrayProps) => (
    <>
        {props.hills.map(
            ({ name, lat, lon, elevation, summit, image }: any) => {
                const { latFormatted, lonFormatted } = toCoords(lat, lon)

                return (
                    <Marker key={name} position={[lat, lon]}>
                        <Popup>
                            <Spacing textAlign="center">
                                <Typography type="h4" content={name} />
                                <Typography
                                    type="body"
                                    content={
                                        props.type + ' at ' + toFeet(elevation)
                                    }
                                    boldFace
                                />
                                <Spacing mY={20} />
                                <Typography
                                    type="body"
                                    content="Found at"
                                    boldFace
                                />
                                <Typography
                                    type="body"
                                    content={latFormatted + ', ' + lonFormatted}
                                />
                                <Spacing mY={20} />
                                <Typography
                                    type="body"
                                    content="Marked by"
                                    boldFace
                                />
                                <Typography type="body" content={summit} />
                            </Spacing>
                        </Popup>
                    </Marker>
                )
            }
        )}
    </>
)
