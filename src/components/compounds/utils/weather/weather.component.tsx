import { WeatherResultTitle } from './components/weather-result-title.component'
import { WeatherSearchTile } from './components/weather-search-tile.component'
import { useWeather } from './hooks/use-weather.hook'

export const Weather = () => {
    const {
        weatherTitle,
        weatherSubTitle,
        showWeatherContent,
        handleInput,
        executeInput,
        handleSelect,
    } = useWeather()

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
