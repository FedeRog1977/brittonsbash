import { Weather as WeatherComponent } from '../../compounds'
import { Background, Footnote } from '../../bash-blocks'
import { weatherContent } from '../../../data'

export const Weather = () => (
    <>
        <Background type="std" content="Mountain Weather" />
        <WeatherComponent />
        <Footnote content={weatherContent[0].content} />
    </>
)
