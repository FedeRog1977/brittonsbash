import { ResultTitle } from './components/result-title.component'
import { SearchTile } from './components/search-tile.component'
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
            <SearchTile
                funcInput={handleInput}
                funcButton={executeInput}
                funcSelect={handleSelect}
            />
            <ResultTitle
                title={weatherTitle}
                subTitle={weatherSubTitle}
                result={showWeatherContent}
            />
        </>
    )
}
