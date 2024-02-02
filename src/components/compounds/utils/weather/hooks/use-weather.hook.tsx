import { useState } from 'react'
import { Typography } from '../../../../bash-blocks'
import { hillData } from '../../../../../data'
import { toCoords, toFeet } from '../../../../../scripts'
import { WeatherDaily } from '../components'

export function useWeather() {
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
        for (var i in hillData.munros) {
            if (
                hillData.munros[i].name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
            ) {
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

    return {
        weatherTitle,
        weatherSubTitle,
        showWeatherContent,
        handleInput,
        executeInput,
        handleSelect,
    }
}
