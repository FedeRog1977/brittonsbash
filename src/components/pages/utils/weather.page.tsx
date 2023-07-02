import { Weather as WeatherComponent } from '../../compounds'
import { Background } from '../../bash-blocks'

export const Weather = () => (
    <>
        <Background
            content="Mountain Weather"
            className="background-text background-text-standard"
        />
        <WeatherComponent />
    </>
)
