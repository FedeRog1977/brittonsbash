import { useState, useEffect } from 'react'
import { Marker, Popup, useMap, useMapEvents } from 'react-leaflet'

export const CurrentLocation = () => {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e: any) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
    })

    return position === null ? null : (
        <Marker position={position}>
            <Popup>You are here dood</Popup>
        </Marker>
    )
}
