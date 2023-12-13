import { Weather as WeatherComponent, weatherContent } from '../../compounds'
import { Background, Footnote } from '../../bash-blocks'

export const Weather = () => (
    <>
        <Background type="std" content="Mountain Weather" />
        <WeatherComponent />
        <Footnote content={weatherContent[0].content} />
    </>
)
