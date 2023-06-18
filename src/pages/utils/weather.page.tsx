import WeatherSearch from '../../compounds/utils/weather/WeatherSearch'
import { Background } from '../../elements'

export const Weather = () => (
    <div>
        <Background text={'Weather Forecast'} />
        <div className={'body'}>
            <WeatherSearch />
        </div>
    </div>
)
