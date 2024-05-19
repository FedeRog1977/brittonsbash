import { useState } from 'react'
import { Typography } from '../../../../bash-blocks'
import { compileHills, toCoords, toFeet } from '../../../../../scripts'
import { WeatherDaily } from '../components/weather-daily.component'

export const useWeather = () => {
    const hills = compileHills()

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
        for (var i in hills.munros) {
            if (
                hills.munros[i].name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
            ) {
                setName(hills.munros[i].name.toLowerCase())
                setLat(hills.munros[i].lat)
                setLon(hills.munros[i].lon)
                setWeatherTitleLocation(`${hills.munros[i].name}`)
                setWeatherElevation(hills.munros[i].elevation)
                setWeatherMark(hills.munros[i].summit)
            }
        }
    }

    const handleInput = (e: any) => {
        setSearchField(e.target.value)

        for (var i in hills.munros) {
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
                hills.munros[i].name
                    .toLowerCase()
                    .includes(searchField.toLowerCase())
            ) {
                setName(hills.munros[i].name.toLowerCase())
                setLat(hills.munros[i].lat)
                setLon(hills.munros[i].lon)
                setWeatherTitleLocation(`${hills.munros[i].name}`)
                setWeatherElevation(hills.munros[i].elevation)
                setWeatherMark(hills.munros[i].summit)
            }
        }
    }

    const executeInput = () => {
        setWeatherTitle(weatherTitleLocation)

        // If the input search bar is not empty
        // Display munro result title
        if (searchField !== '') {
            setWeatherSubTitle(
                <>
                    Munro at {toFeet(weatherElevation)} - {latFormatted},{' '}
                    {lonFormatted}
                    <Typography type="h4">
                        {'Marked by ' + weatherMark}
                    </Typography>
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

    return {
        weatherTitle,
        weatherSubTitle,
        showWeatherContent,
        handleInput,
        executeInput,
        handleSelect,
    }
}
