import { useState } from 'react'
import { hillData } from '../../../../data'
import { WeatherDaily, WeatherSearchBar, WeatherTitle } from '.'
import { WeatherSubTitle } from '../../../elements'
import { toSentenceCase } from '../../../../scripts'

export const WeatherSearch = () => {
    var [lat, setLat] = useState(56.6826)
    var [lon, setLon] = useState(5.1023)

    // const getCurrLocation = () => {
    //     navigator.geolocation.getCurrentPosition(
    //         (position: any) => {
    //             setLat(position.coords.latitude.toFixed(2));
    //             setLon(position.coords.longitude.toFixed(2));
    //         }
    //     );
    // };

    // useEffect(() => {
    //     getCurrLocation();
    // }, []);

    // console.log("Coords:", lat, lon);

    const [searchField, setSearchField] = useState('')
    const [name, setName] = useState('')

    const [weatherTitleLocation, setWeatherTitleLocation] =
        useState('Your Location')
    const [weatherTitle, setWeatherTitle] = useState(
        `Forecast for ${weatherTitleLocation}`
    )
    const [weatherSubTitle, setWeatherSubTitle] = useState(
        <WeatherSubTitle type={'curr'} lat={lat} lon={lon} />
    )
    const [weatherElevation, setWeatherElevation] = useState(0)
    const [weatherMark, setWeatherMark] = useState('')

    const [showWeatherContent, setShowWeatherContent] = useState(
        <WeatherDaily latIn={lat} lonIn={lon} />
    )

    const handleSelect = (e: any) => {
        console.log('---\nSelect New Munro:\n', e.target.value)

        for (var i in hillData.munros) {
            if (
                hillData.munros[i].name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
            ) {
                console.log(
                    'Match Selected Munro To JSON:\n',
                    `${hillData.munros[i].name}\n`,
                    `${hillData.munros[i].lat}`,
                    `${hillData.munros[i].lon}\n---`
                )
                setName(hillData.munros[i].name.toLowerCase())
                setLat(hillData.munros[i].lat)
                setLon(hillData.munros[i].lon)
                setWeatherTitleLocation(`${hillData.munros[i].name}`)
                setWeatherElevation(hillData.munros[i].elevation)
                setWeatherMark(hillData.munros[i].summit)
            }
        }
    }

    const handleInput = (e: any) => {
        console.log('---\nInput New Munro:\n', e.target.value)

        setSearchField(e.target.value)

        for (var i in hillData.munros) {
            if (searchField === '') {
                setLat(lat)
                setLon(lon)
                setWeatherTitleLocation('Your Location')
                setWeatherSubTitle(
                    <WeatherSubTitle type={'current'} lat={lat} lon={lon} />
                )
            } else if (
                hillData.munros[i].name
                    .toLowerCase()
                    .includes(searchField.toLowerCase())
            ) {
                console.log(
                    'Match Inputted Munro To JSON:\n',
                    `${hillData.munros[i].name}\n`,
                    `${hillData.munros[i].lat}`,
                    `${hillData.munros[i].lon}\n---`
                )
                setName(hillData.munros[i].name.toLowerCase())
                setLat(hillData.munros[i].lat)
                setLon(hillData.munros[i].lon)
                setWeatherTitleLocation(`${hillData.munros[i].name}`)
                setWeatherElevation(hillData.munros[i].elevation)
                setWeatherMark(hillData.munros[i].summit)
            }
        }
    }

    const executeInput = () => {
        console.log(
            // searchField will only work for the input search bar
            'Results:\n',
            `Search Field: ${searchField}\n`,
            `JSON Matched Name: ${toSentenceCase(name)}\n`,
            `JSON Matched Elevation: ${weatherElevation.toLocaleString()}\n`,
            `JSON Matched Latitude: ${lat}\n`,
            `JSON Matched Longitude: ${lon}\n`,
            `JSON Matched Summit Mark: ${weatherMark}`
        )

        setWeatherTitle(`Forecast for ${weatherTitleLocation}`)

        // If the input search bar is not empty
        // Display munro result title
        if (searchField !== '') {
            setWeatherSubTitle(
                <WeatherSubTitle
                    type={'munro'}
                    elev={weatherElevation.toLocaleString()}
                    lat={lat}
                    lon={lon}
                    mark={weatherMark}
                />
            )
            // If the text inputted into the input search bar is pulled from the suggested list (non-functional)
            // Keep displaying the current location title
        } else if (!searchField.toLowerCase().includes(name)) {
            setWeatherSubTitle(
                <WeatherSubTitle type={'current'} lat={lat} lon={lon} />
            )
            // If there has been no change to the select drop-down or input search bar
            // Keep displaying the current location title
        } else {
            setWeatherSubTitle(
                <WeatherSubTitle type={'current'} lat={lat} lon={lon} />
            )
        }

        setShowWeatherContent(<WeatherDaily latIn={lat} lonIn={lon} />)
    }

    return (
        <div>
            <WeatherSearchBar
                funcSelect={handleSelect}
                funcInput={handleInput}
                funcButton={executeInput}
            />
            <WeatherTitle
                contTitle={weatherTitle}
                contSubTitle={weatherSubTitle}
            />
            {showWeatherContent}
        </div>
    )
}
