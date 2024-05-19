import {
    MapContainer,
    // Marker,
    // Popup,
    TileLayer,
    // useMap,
    // useMapEvents
} from 'react-leaflet'
import './styles-temp.scss'
import { useState } from 'react'
import { compileHills, fromBritishGridProjection } from '../../../../scripts'
// import L from 'leaflet'
import * as L from 'leaflet'
import { useOrdnanceSurveyCall } from './calls/ordnance-survey.call'
import { RouteList, RouteListProps } from './components/route-list.component'
import {
    RouteMarker,
    RouteMarkerProps,
} from './components/route-marker.component'
import { LandmassList } from './components/landmass-list.component'
import { LocationMarker } from './components/location-marker.component'
import { HillMarkers } from './components/hill-markers.component'

export const Conquest = () => {
    const hills = compileHills()

    const apiUrl = useOrdnanceSurveyCall()

    const [showCurrLoc, setShowCurrLoc] = useState(false)
    const [locationToggle, setLocationToggle] = useState('Off')

    const [showMunros, setShowMunros] = useState(false)
    const [showCorbetts, setShowCorbetts] = useState(false)

    const [showLandmasses, setShowLandmasses] = useState(false)
    const [showRoutesList, setShowRoutesList] = useState(false)
    const [routesList, setRoutesList] = useState(
        <RouteList {...({} as RouteListProps)} />
    )

    const [showRouteMarker, setShowRouteMarker] = useState(false)
    const [routeMarker, setRouteMarker] = useState(
        <RouteMarker {...({} as RouteMarkerProps)} />
    )

    const currLocClick = () => {
        if (showCurrLoc === false) {
            setShowCurrLoc(true)
            setLocationToggle('On')
        } else {
            setShowCurrLoc(false)
            setLocationToggle('Off')
        }
    }

    const munroClick = () => {
        if (showMunros === false) {
            setShowMunros(true)
        } else {
            setShowMunros(false)
        }
    }

    const corbettClick = () => {
        if (showCorbetts === false) {
            setShowCorbetts(true)
        } else {
            setShowCorbetts(false)
        }
    }

    const landmassesClick = () => {
        if (showLandmasses === false) {
            setShowLandmasses(true)
        } else {
            setShowLandmasses(false)
        }
    }

    const landmassesSelect = (e: any) => {
        setShowRouteMarker(false)

        for (var i in hills.landmasses) {
            if (
                hills.landmasses[i].name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
            ) {
                setShowRoutesList(true)
                setRoutesList(
                    <RouteList
                        id="searchRoute"
                        func={routeSelect}
                        landmassRoutes={hills.landmasses[i].routes}
                    />
                )
            }
        }
    }

    const routeSelect = (e: any) => {
        setShowRouteMarker(false)

        for (var i in hills.landmasses) {
            for (var k in hills.landmasses[i].routes) {
                if (
                    hills.landmasses[i].routes[k].name
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase())
                ) {
                    setShowRouteMarker(true)
                    setRouteMarker(
                        <RouteMarker
                            name={hills.landmasses[i].routes[k].name}
                            dist={hills.landmasses[i].routes[k].distance}
                            elev={hills.landmasses[i].routes[k].elevationgain}
                            time={hills.landmasses[i].routes[k].stdtime}
                            munrosIn={hills.landmasses[i].routes[k].munros}
                            corbettsIn={hills.landmasses[i].routes[k].corbetts}
                            latIn={56.76}
                            lonIn={-5.87}
                        />
                    )
                }
            }
        }
    }

    // var crs = new L.Proj.CRS(
    //     'EPSG:27700',
    //     `+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717
    //     +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,
    //     -125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs`,
    //     {
    //         resolutions: [
    //             896.0, 448.0, 224.0, 112.0, 56.0, 28.0, 14.0, 7.0, 3.5, 1.75,
    //         ],
    //         origin: [-238375, 1376256],
    //     }
    // )

    return (
        <>
            <ul>
                <li>
                    <span onClick={currLocClick} className="currLoc">
                        Location {locationToggle}
                        <span className="currLocHover">
                            <small>Click map to pan to location</small>
                        </span>
                    </span>
                </li>
                {/* <li><a>Nearest Munro</a></li>
                            <li><a>Nearest Corbett</a></li> */}
                <li>|</li>
                <li>
                    <span onClick={munroClick}>Munros</span>
                </li>
                <li>
                    <span onClick={corbettClick}>Corbetts</span>
                </li>
                <li>|</li>
                <li>
                    <span onClick={landmassesClick}>Routes</span>
                </li>
            </ul>
            {showLandmasses && (
                <ul>
                    <li>
                        <LandmassList
                            id="searchRoute"
                            func={landmassesSelect}
                        />
                    </li>
                    {showRoutesList && <li>{routesList}</li>}
                </ul>
            )}
            <MapContainer
                // crs={crs}
                crs={L.CRS.EPSG3857}
                center={fromBritishGridProjection([205685, 755842])}
                minZoom={5}
                maxZoom={20}
                maxBounds={[
                    fromBritishGridProjection([-238375, 0]),
                    fromBritishGridProjection([900000, 1376256]),
                ]}
                attributionControl={false}
                zoom={10}
                scrollWheelZoom={true}
            >
                <TileLayer url={apiUrl} />
                {showCurrLoc && <LocationMarker />}
                {showMunros && <HillMarkers type="Munro" />}
                {showCorbetts && <HillMarkers type="Corbett" />}
                {showRouteMarker && routeMarker}
            </MapContainer>
        </>
    )
}
