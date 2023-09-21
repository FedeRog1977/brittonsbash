import { WeatherSearchTile, WeatherResultTitle, useWeather } from '.'

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
