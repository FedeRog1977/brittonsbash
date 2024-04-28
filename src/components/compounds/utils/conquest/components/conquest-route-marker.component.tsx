import { Marker, Popup } from 'react-leaflet'
import { generateUniqueKey } from '../../../../../scripts'

export const RouteMarker = ({
    nameRoute,
    dist,
    elev,
    time,
    munrosIn,
    corbettsIn,
    latIn,
    lonIn,
}: any) => {
    var munros = null
    // var corbetts = null;

    // if (munrosIn != null) {
    //     munros = munrosIn.map(({ x, index }: any) => {
    //         return (<li key={idx}>{munrosIn[idx]}</li>)
    //     });
    // }

    const array = ['Ben More', 'Stob Binnein', 'Ben Starav', 'Creise']

    munros = array.map((x, index) => {
        return <li key={generateUniqueKey(index)}>{x}</li>
    })

    // for (var i in corbettsIn) {
    //     corbetts = corbettsIn.map((index) => (
    //         <li key={generateUniqueKey(index)}>{corbettsIn[i]}</li>
    //     ));
    // }

    return (
        <Marker position={[latIn, lonIn]}>
            <Popup>
                <div style={{ textAlign: 'center' }}>
                    <h3>{nameRoute}</h3>
                    <div>
                        <b>Distance:</b> {dist.toFixed(2)}mi
                        <br />
                        <b>Elevation Gain:</b> {elev.toLocaleString()}ft
                        <br />
                        <b>Avg. Duration:</b> {time}hrs
                        <br />
                        <b>Munros:</b>
                        <ul>{munros}</ul>
                        {/* <b>Corbetts:</b>{corbetts}<br /><br /> */}
                    </div>
                </div>
            </Popup>
        </Marker>
    )
}
