import { Marker, Popup } from "react-leaflet";

export default function RouteMarker({
    nameRoute,
    dist,
    elev,
    time,
    munrosIn,
    corbettsIn,
    latIn,
    lonIn
}) {
    var munros = null;
    // var corbetts = null;

    // if (munrosIn != null) {
    //     munros = munrosIn.map(({ x, idx }: any) => {
    //         return (<li key={idx}>{munrosIn[idx]}</li>)
    //     });
    // }

    console.log(munrosIn);

    const array = ["Ben More", "Stob Binnein", "Ben Starav", "Creise"];

    munros = array.map((x, index) => {
        return <li key={index}>{x}</li>;
    });

    console.log(munros);

    // for (var i in corbettsIn) {
    //     corbetts = corbettsIn.map(() => (
    //         <li key={corbettsIn[i]}>{corbettsIn[i]}</li>
    //     ));
    // }

    return (
        <Marker position={[latIn, lonIn]}>
            <Popup>
                <div style={{ textAlign: "center" }}>
                    <h3>{nameRoute}</h3>
                    <div>
                        <b>Distance:</b> {dist.toFixed(2)}mi<br />
                        <b>Elevation Gain:</b> {elev.toLocaleString()}ft<br />
                        <b>Avg. Duration:</b> {time}hrs<br />
                        <b>Munros:</b>
                        <ul>{munros}</ul>
                        {/* <b>Corbetts:</b>{corbetts}<br /><br /> */}
                    </div>
                </div>
            </Popup>
        </Marker>
    )
};