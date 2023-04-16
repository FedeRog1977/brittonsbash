import { useState } from "react";
import toSentenceCase from "../../../misc/toSentenceCase";
import InstantGramSearchBar from "../../../bashBlocks/components/InstantGramSearchBar";
import InstantGramTile from "../../../bashBlocks/components/InstantGramTile";
import { eventData } from "../../../data/Events";
import { sportData } from "../../../data/Sport";

const InstantGramSearch = () => {
    const nullSport = {};

    const [event, setEvent] = useState(eventData[2022][42])
    const [sport, setSport] = useState(sportData[2022].projects[0])

    const [searchField, setSearchField] = useState('');
    const [name, setName] = useState('');






    // const [weatherTitleLocation, setWeatherTitleLocation] = useState("Your Location");
    // const [weatherTitle, setWeatherTitle] = useState(`Forecast for ${weatherTitleLocation}`);
    // const [weatherSubTitle, setWeatherSubTitle] = useState(<WeatherSubTitle type={"curr"} lat={lat} lon={lon} />)
    // const [weatherElevation, setWeatherElevation] = useState(0);
    // const [weatherMark, setWeatherMark] = useState("");

    // const [showWeatherContent, setShowWeatherContent] = useState(<WeatherDaily latIn={lat} lonIn={lon} />);

    const handleSelect = (e: any) => {
        console.log(
            "---\nSelect New Event:\n",
            e.target.value,
        );

        for (var i in eventData[2022]) {
            if (
                eventData[2022][i].nameSuffix.toLowerCase()
                    .includes((e.target.value).toLowerCase())
            ) {
                console.log(
                    "Match Selected Event To JSON:\n",
                    `${eventData[2022][i].nameSuffix}\n---`
                );
                setEvent(eventData[2022][i]);
                for (var k in eventData[2022][i].routeNames) {
                    for (var j in sportData[2022].projects) {
                        if (
                            eventData[2022][i].routeNames === null &&
                            eventData[2022][i].routeNames.includes(sportData[2022].projects[j].routeName)
                        ) {
                            setSport(sportData[2022].projects[j]);
                            console.log(sportData[2022].projects[j].routeName)
                        }
                        // } else {
                        //     setSport(nullSport);
                        // }
                    }
                }
            }
        }

        // for (var i in hillData.munros) {
        //     if (
        //         hillData.munros[i].name.toLowerCase()
        //             .includes((e.target.value).toLowerCase())
        //     ) {
        //         console.log(
        //             "Match Selected Munro To JSON:\n",
        //             `${hillData.munros[i].name}\n`,
        //             `${hillData.munros[i].lat}`,
        //             `${hillData.munros[i].lon}\n---`
        //         );
        //         setName(hillData.munros[i].name.toLowerCase());
        //         setLat(hillData.munros[i].lat);
        //         setLon(hillData.munros[i].lon);
        //         setWeatherTitleLocation(`${hillData.munros[i].name}`);
        //         setWeatherElevation(hillData.munros[i].elevation);
        //         setWeatherMark(hillData.munros[i].summit);
        //     }
        // }
    };

    const handleInput = (e: any) => {
        console.log(
            "---\nInput New Munro:\n",
            e.target.value
        );

        setSearchField(e.target.value);

        // for (var i in hillData.munros) {
        //     if (searchField === "") {
        //         setLat(lat);
        //         setLon(lon);
        //         setWeatherTitleLocation("Your Location");
        //         setWeatherSubTitle(
        //             <WeatherSubTitle
        //                 type={"current"}
        //                 lat={lat}
        //                 lon={lon}
        //             />
        //         );
        //     } else if (
        //         hillData.munros[i].name.toLowerCase()
        //             .includes(searchField.toLowerCase())
        //     ) {
        //         console.log(
        //             "Match Inputted Munro To JSON:\n",
        //             `${hillData.munros[i].name}\n`,
        //             `${hillData.munros[i].lat}`,
        //             `${hillData.munros[i].lon}\n---`
        //         );
        //         setName(hillData.munros[i].name.toLowerCase());
        //         setLat(hillData.munros[i].lat);
        //         setLon(hillData.munros[i].lon);
        //         setWeatherTitleLocation(`${hillData.munros[i].name}`);
        //         setWeatherElevation(hillData.munros[i].elevation);
        //         setWeatherMark(hillData.munros[i].summit);
        //     }
        // }
    };

    const executeInput = () => {
        // console.log(
        //     // searchField will only work for the input search bar
        //     "Results:\n",
        //     `Search Field: ${searchField}\n`,
        //     `JSON Matched Name: ${toSentenceCase(name)}\n`,
        //     `JSON Matched Elevation: ${weatherElevation.toLocaleString()}\n`,
        //     `JSON Matched Latitude: ${lat}\n`,
        //     `JSON Matched Longitude: ${lon}\n`,
        //     `JSON Matched Summit Mark: ${weatherMark}`
        // );

        // setWeatherTitle(`Forecast for ${weatherTitleLocation}`)

        // // If the input search bar is not empty
        // // Display munro result title
        // if (searchField !== "") {
        //     setWeatherSubTitle(
        //         <WeatherSubTitle
        //             type={"munro"}
        //             elev={weatherElevation.toLocaleString()}
        //             lat={lat}
        //             lon={lon}
        //             mark={weatherMark}
        //         />
        //     );
        //     // If the text inputted into the input search bar is pulled from the suggested list (non-functional)
        //     // Keep displaying the current location title
        // } else if (!searchField.toLowerCase().includes(name)) {
        //     setWeatherSubTitle(<WeatherSubTitle type={"current"} lat={lat} lon={lon} />);
        //     // If there has been no change to the select drop-down or input search bar
        //     // Keep displaying the current location title
        // } else {
        //     setWeatherSubTitle(
        //         <WeatherSubTitle
        //             type={"current"}
        //             lat={lat}
        //             lon={lon}
        //         />
        //     );
        // }

        // setShowWeatherContent(
        //     <WeatherDaily
        //         latIn={lat}
        //         lonIn={lon}
        //     />
        // );
    };

    return (
        <div>
            <InstantGramSearchBar funcSelect={handleSelect} funcInput={handleInput} funcButton={executeInput} />
            <InstantGramTile event={event} sportEvent={sport} />



            {/* {showWeatherContent} */}
        </div>
    );
};

export default InstantGramSearch;