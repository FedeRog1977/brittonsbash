import { WeatherSearch } from '../../compounds'
import { Background } from '../../bash-blocks'

export const Weather = () => (
    <div>
        <Background text={'Weather Forecast'} />
        <div className={'body'}>
            <WeatherSearch />
        </div>
    </div>
)
