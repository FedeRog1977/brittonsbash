import { Weather as WeatherComponent, weatherContent } from '../../compounds'
import { Background, FootnoteTile } from '../../bash-blocks'

export const Weather = () => (
    <>
        <Background {...weatherContent.background} />
        <WeatherComponent />
        <FootnoteTile {...weatherContent.blockOne} />
    </>
)
