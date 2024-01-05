import { Marker, Popup } from 'react-leaflet'
import { toCoords, toFeet } from '../../../../../scripts'
import { Spacing, Typography } from '../../../../bash-blocks'
import imagePlaceholder from '../../../../../media/images/pages/placeholder.webp'
import { ConquestHillMarkerArrayProps } from '../types'

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
                                <Spacing mY={30} />
                                <Typography
                                    type="body"
                                    content={
                                        props.type + ' at ' + toFeet(elevation)
                                    }
                                    boldFace
                                />
                                <Typography
                                    type="body"
                                    content={latFormatted + ', ' + lonFormatted}
                                />
                                <Typography
                                    type="body"
                                    content={summit + ' summit'}
                                />
                                <Spacing mY={30} />
                                <img
                                    style={{
                                        width: '250px',
                                    }}
                                    src={imagePlaceholder}
                                    alt={imagePlaceholder}
                                />
                            </Spacing>
                        </Popup>
                    </Marker>
                )
            }
        )}
    </>
)
