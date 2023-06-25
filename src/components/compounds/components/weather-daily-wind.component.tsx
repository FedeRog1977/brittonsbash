import { WeatherDeg, WeatherDir } from '../../elements'

export const WeatherWind = ({ windDeg, windSpd }: any) => (
    <div className={'weatherWind'}>
        <WeatherDir wind={windDeg} />
        <WeatherDeg wind={windDeg} />
        <div>
            <small>{windDeg}&deg;</small>
        </div>
        <div data-testid={'weatherWindConversion'}>
            <b>{(windSpd * 2.23694).toFixed(0)}mph</b>
        </div>
    </div>
)
