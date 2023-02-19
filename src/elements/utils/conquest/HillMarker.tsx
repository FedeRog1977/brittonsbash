import { Marker, Popup } from "react-leaflet";
import { hillData } from "../../../data/Hills";

export default function HillMarker({ type }: any) {
    var markers = {};

    if (type === "Munro") {
        markers = hillData.munros.map(({ name, lat, lon, elevation, summit, image }) => (
            <Marker key={name} position={[lat, lon]}>
                <Popup>
                    <div style={{ textAlign: "center" }}>
                        <h3>{name}</h3>
                        <div>
                            <img src={"../../images/hills/albanian.jpg"} style={{ width: "200px" }}></img>
                        </div>
                        <div>
                            <h4>{type} at {elevation.toLocaleString()}ft</h4>
                            <b>Found At</b><br />{lat.toFixed(2)}&deg;N, {(lon * -1).toFixed(2)}&deg;W<br />
                            <b>Marked By</b><br />{summit}
                        </div>
                    </div>
                </Popup>
            </Marker>
        ))
    } else if (type === "Corbett") {
        markers = hillData.corbetts.map(({ name, lat, lon, elevation, summit, image }) => (
            <Marker key={name} position={[lat, lon]}>
                <Popup>
                    <div style={{ textAlign: "center" }}>
                        <h3>{name}</h3>
                        {/* <div>
                        <img src={albanian} style={{ width: "200px" }}></img>
                    </div> */}
                        <div>
                            <h4>{type} at {elevation.toLocaleString()}ft</h4>
                            <b>Found At</b><br />{lat.toFixed(2)}&deg;N, {(lon * -1).toFixed(2)}&deg;W<br />
                            <b>Marked By</b><br />{summit}
                        </div>
                    </div>
                </Popup>
            </Marker>
        ))
    }

    return (
        <>{markers}</>
    )
};