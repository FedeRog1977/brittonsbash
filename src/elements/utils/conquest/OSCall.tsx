import {
    MapContainer,
    // Marker,
    // Popup,
    TileLayer,
    // useMap,
    // useMapEvents
} from 'react-leaflet'
import { useState } from 'react';
import CurrentLocation from './CurrentLocation';
import HillMarker from './HillMarker';
import LandmassList from './LandmassList';
import RouteList from './RouteList';
import { hillData } from '../../../data/general/Hills';
import RouteMarker from './RouteMarker';

const OSCall = () => {
    // var urlKey = 'oV4hBtyHRKqV0tc61eylt8s7bxypAHkt';
    // var urlPrefix = 'https://api.os.uk/maps/raster/v1/zxy/';
    // var apiUrl = `${urlPrefix}Leisure_27700/{z}/{x}/{y}.png?key=${urlKey}`

    const [showCurrLoc, setShowCurrLoc] = useState(false);
    const [locationToggle, setLocationToggle] = useState("Off");

    const [showMunros, setShowMunros] = useState(false);
    const [showCorbetts, setShowCorbetts] = useState(false);

    const [showLandmasses, setShowLandmasses] = useState(false);
    const [showRoutesList, setShowRoutesList] = useState(false);
    const [routesList, setRoutesList] = useState(<RouteList />);

    const [showRouteMarker, setShowRouteMarker] = useState(false);
    const [routeMarker, setRouteMarker] = useState(<RouteMarker />);

    const currLocClick = () => {
        if (showCurrLoc === false) {
            setShowCurrLoc(true);
            setLocationToggle("On");
        } else {
            setShowCurrLoc(false);
            setLocationToggle("Off");
        }
    }

    const munroClick = () => {
        if (showMunros === false) {
            setShowMunros(true);
        } else {
            setShowMunros(false);
        }
    }

    const corbettClick = () => {
        if (showCorbetts === false) {
            setShowCorbetts(true);
        } else {
            setShowCorbetts(false);
        }
    }

    const landmassesClick = () => {
        if (showLandmasses === false) {
            setShowLandmasses(true);
        } else {
            setShowLandmasses(false);
        }
    }

    const landmassesSelect = (e: any) => {
        setShowRouteMarker(false);

        for (var i in hillData.landmasses) {
            if (
                hillData.landmasses[i].name.toLowerCase()
                    .includes((e.target.value).toLowerCase())
            ) {
                console.log(hillData.landmasses[i].route);

                setShowRoutesList(true);
                setRoutesList(
                    <RouteList
                        id={"searchRoute"}
                        func={routeSelect}
                        landmassRoutes={hillData.landmasses[i].route}
                    />
                );
            }
        }
    };

    const routeSelect = (e: any) => {
        setShowRouteMarker(false);

        console.log(
            "Select Route Name:\n",
            e.target.value
        );

        for (var i in hillData.landmasses) {
            for (var k in hillData.landmasses[i].route) {
                if (
                    hillData.landmasses[i].route[k].name.toLowerCase()
                        .includes((e.target.value).toLowerCase())
                ) {
                    console.log(
                        "JSON Route Name:\n",
                        hillData.landmasses[i].route[k].name
                    );

                    setShowRouteMarker(true);
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
                    );
                }
            }
        };
    };

    return (
        <>
            <div className={"subHeaderConquest"}>
                <div className={"subHeaderConquestNavigation"}>
                    <nav>
                        <ul>
                            <li><a onClick={currLocClick} className={"currLoc"}>Location {locationToggle}
                                <span className={"currLocHover"}><small>Click map to pan to location</small></span>
                            </a></li>
                            {/* <li><a>Nearest Munro</a></li>
                            <li><a>Nearest Corbett</a></li> */}
                            <li>|</li>
                            <li><a onClick={munroClick}>Munros</a></li>
                            <li><a onClick={corbettClick}>Corbetts</a></li>
                            <li>|</li>
                            <li><a onClick={landmassesClick}>Routes</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            {showLandmasses && <div className={"subHeaderConquest"}>
                <div className={"subHeaderConquestNavigation"}>
                    <nav>
                        <ul>
                            <li><LandmassList id={"searchRoute"} func={landmassesSelect} /></li>
                            {showRoutesList && <li>{routesList}</li>}
                        </ul>
                    </nav>
                </div>
            </div>}
            <MapContainer center={[56.6539, -5.1715]} zoom={10} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    // url="https://api.os.uk/maps/raster/v1/zxy/Leisure_27700/{z}/{x}/{y}.png?key=oV4hBtyHRKqV0tc61eylt8s7bxypAHkt"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {showCurrLoc && <CurrentLocation />}
                {showMunros && <HillMarker type={"Munro"} />}
                {showCorbetts && <HillMarker type={"Corbett"} />}
                {showRouteMarker && routeMarker}
            </MapContainer>
        </>
    )
};

export default OSCall;