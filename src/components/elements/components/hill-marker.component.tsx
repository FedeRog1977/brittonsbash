import { Marker, Popup } from 'react-leaflet'
import { hillData } from '../../../data'
import { toCoords, toFeet } from '../../../scripts'
import { Spacing, Typography } from '../../bash-blocks'

export const HillMarker = ({ type }: any) => {
    var markers = {}

    if (type === 'Munro') {
        markers = hillData.munros.map(
            ({ name, lat, lon, elevation, summit, image }) => {
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
            }
        )
    } else if (type === 'Corbett') {
        markers = hillData.corbetts.map(
            ({ name, lat, lon, elevation, summit, image }) => (
                <Marker key={name} position={[lat, lon]}>
                    <Popup>
                        <div style={{ textAlign: 'center' }}>
                            <h3>{name}</h3>
                            {/* <div>
                        <img src={albanian} style={{ width: "200px" }}></img>
                    </div> */}
                            <div>
                                <h4>
                                    {type} at {elevation.toLocaleString()}ft
                                </h4>
                                <b>Found At</b>
                                <br />
                                {lat.toFixed(2)}&deg;N, {(lon * -1).toFixed(2)}
                                &deg;W
                                <br />
                                <b>Marked By</b>
                                <br />
                                {summit}
                            </div>
                        </div>
                    </Popup>
                </Marker>
            )
        )
    }

    return <>{markers}</>
}
