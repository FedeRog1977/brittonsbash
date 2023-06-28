import { WeatherSearch } from '../../compounds'
import { Background } from '../../bash-blocks'

export const Weather = () => (
    <>
        <Background
            content="Weather"
            className="background-text background-text-standard"
        />
        <WeatherSearch />
    </>
)
