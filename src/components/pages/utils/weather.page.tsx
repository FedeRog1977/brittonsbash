import { Weather as WeatherComponent, weatherContent } from '../../compounds'
import { Background, FootnoteTile } from '../../bash-blocks'

export const Weather = () => (
    <>
        <Background type="std" content="Mountain Weather" />
        <WeatherComponent />
        <FootnoteTile content={weatherContent[0].content} />
    </>
)
