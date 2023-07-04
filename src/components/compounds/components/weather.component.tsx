import { useState } from 'react'
import { hillData } from '../../../data'
import { WeatherDaily, WeatherSearchTile, WeatherResultTitle } from '.'
import { toCoords, toFeet, toSentenceCase } from '../../../scripts'
import { Typography } from '../../bash-blocks'

export const Weather = () => {
    var [lat, setLat] = useState(56.6826)
    var [lon, setLon] = useState(5.1023)

    const { latFormatted, lonFormatted } = toCoords(lat, lon)

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
    const [weatherTitle, setWeatherTitle] = useState(weatherTitleLocation)
    const [weatherSubTitle, setWeatherSubTitle] = useState(
        <>
            {latFormatted}, {lonFormatted}
        </>
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
                    <>
                        {latFormatted}, {lonFormatted}
                    </>
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

        setWeatherTitle(weatherTitleLocation)

        // If the input search bar is not empty
        // Display munro result title
        if (searchField !== '') {
            setWeatherSubTitle(
                <>
                    Munro at {toFeet(weatherElevation)} - {latFormatted},{' '}
                    {lonFormatted}
                    <Typography
                        type="h4"
                        content={'Marked by ' + weatherMark}
                    />
                </>
            )
            // If the text inputted into the input search bar is pulled from the suggested list (non-functional)
            // Keep displaying the current location title
        } else if (!searchField.toLowerCase().includes(name)) {
            setWeatherSubTitle(
                <>
                    {latFormatted}, {lonFormatted}
                </>
            )
            // If there has been no change to the select drop-down or input search bar
            // Keep displaying the current location title
        } else {
            setWeatherSubTitle(
                <>
                    {latFormatted}, {lonFormatted}
                </>
            )
        }

        setShowWeatherContent(<WeatherDaily latIn={lat} lonIn={lon} />)
    }

    return (
        <>
            <WeatherSearchTile
                funcSelect={handleSelect}
                funcInput={handleInput}
                funcButton={executeInput}
            />
            <WeatherResultTitle
                title={weatherTitle}
                subTitle={weatherSubTitle}
                result={showWeatherContent}
            />
        </>
    )
}
