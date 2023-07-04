import { Weather as WeatherComponent } from '../../compounds'
import { Background, Footnote } from '../../bash-blocks'
import { weatherContent } from '../../../data'

export const Weather = () => (
    <>
        <Background
            content="Mountain Weather"
            className="background-text background-text-standard"
        />
        <WeatherComponent />
        <Footnote content={weatherContent[0].content} />
    </>
)
