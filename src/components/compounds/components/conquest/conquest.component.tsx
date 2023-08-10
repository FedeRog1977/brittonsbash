import {
    MapContainer,
    // Marker,
    // Popup,
    TileLayer,
    // useMap,
    // useMapEvents
} from 'react-leaflet'
import { useState } from 'react'
import {
    ConquestLocationMarker,
    ConquestHillMarkers,
    LandmassList,
    RouteList,
    RouteMarker,
} from '.'
import { hillData } from '../../../../data'
import {
    fromBritishGridProjection,
    ordnanceSurveyCall,
} from '../../../../scripts'
// import L from 'leaflet'
import * as L from 'leaflet'

export const Conquest = () => {
    const apiUrl = ordnanceSurveyCall()

    const [showCurrLoc, setShowCurrLoc] = useState(false)
    const [locationToggle, setLocationToggle] = useState('Off')

    const [showMunros, setShowMunros] = useState(false)
    const [showCorbetts, setShowCorbetts] = useState(false)

    const [showLandmasses, setShowLandmasses] = useState(false)
    const [showRoutesList, setShowRoutesList] = useState(false)
    const [routesList, setRoutesList] = useState(<RouteList />)

    const [showRouteMarker, setShowRouteMarker] = useState(false)
    const [routeMarker, setRouteMarker] = useState(<RouteMarker />)

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

        for (var i in hillData.landmasses) {
            if (
                hillData.landmasses[i].name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
            ) {
                console.log(hillData.landmasses[i].route)

                setShowRoutesList(true)
                setRoutesList(
                    <RouteList
                        id={'searchRoute'}
                        func={routeSelect}
                        landmassRoutes={hillData.landmasses[i].route}
                    />
                )
            }
        }
    }

    const routeSelect = (e: any) => {
        setShowRouteMarker(false)

        console.log('Select Route Name:\n', e.target.value)

        for (var i in hillData.landmasses) {
            for (var k in hillData.landmasses[i].route) {
                if (
                    hillData.landmasses[i].route[k].name
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase())
                ) {
                    console.log(
                        'JSON Route Name:\n',
                        hillData.landmasses[i].route[k].name
                    )

                    setShowRouteMarker(true)
                    setRouteMarker(
                        <RouteMarker
                            nameRoute={hillData.landmasses[i].route[k].name}
                            dist={hillData.landmasses[i].route[k].distance}
                            elev={hillData.landmasses[i].route[k].elevationgain}
                            time={hillData.landmasses[i].route[k].stdtime}
                            munrosIn={hillData.landmasses[i].route[k].munro}
                            corbettsIn={hillData.landmasses[i].route[k].corbett}
                            latIn={56.76}
                            lonIn={-5.87}
                        />
                    )
                }
            }
        }
    }

    var crs = new L.Proj.CRS(
        'EPSG:27700',
        `+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717
        +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,
        -125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs`,
        {
            resolutions: [
                896.0, 448.0, 224.0, 112.0, 56.0, 28.0, 14.0, 7.0, 3.5, 1.75,
            ],
            origin: [-238375, 1376256],
        }
    )

    return (
        <>
            <div className="subHeaderConquest">
                <div className="subHeaderConquestNavigation">
                    <nav>
                        <ul>
                            <li>
                                <span
                                    onClick={currLocClick}
                                    className="currLoc"
                                >
                                    Location {locationToggle}
                                    <span className="currLocHover">
                                        <small>
                                            Click map to pan to location
                                        </small>
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
                    </nav>
                </div>
            </div>
            {showLandmasses && (
                <div className="subHeaderConquest">
                    <div className="subHeaderConquestNavigation">
                        <nav>
                            <ul>
                                <li>
                                    <LandmassList
                                        id="searchRoute"
                                        func={landmassesSelect}
                                    />
                                </li>
                                {showRoutesList && <li>{routesList}</li>}
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
            <MapContainer
                crs={crs}
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
                {showCurrLoc && <ConquestLocationMarker />}
                {showMunros && <ConquestHillMarkers type="Munro" />}
                {showCorbetts && <ConquestHillMarkers type="Corbett" />}
                {showRouteMarker && routeMarker}
            </MapContainer>
        </>
    )
}
