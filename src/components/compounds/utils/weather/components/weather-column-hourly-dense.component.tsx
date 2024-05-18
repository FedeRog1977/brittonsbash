import {
    toDate,
    toPrecipitation,
    toBearing,
    toSpeed,
} from '../../../../../scripts'
import { Flex, Grid, Spacing, Typography } from '../../../../bash-blocks'
import { WeatherIcon } from './weather-icon.component'
import { WeatherTemperature } from './weather-temperature.component'

export const WeatherColumnHourlyDense = ({
    dt,
    icon,
    temp,
    pop,
    windDeg,
    windSpd,
    windGst,
    pressure,
    humidity,
    dp,
    vb,
    uvi,
}: any) =>
    // Add props
    {
        const { hour } = toDate(dt)
        const precipitation = toPrecipitation(pop)
        const {
            bearingFormatted: bearing,
            bearingCompass,
            bearingArrow,
        } = toBearing(windDeg)
        const speed = toSpeed(windSpd, true)
        const gusts = toSpeed(windGst, true)

        return (
            <>
                <Spacing pY={20} textAlign="center">
                    <Typography type="h4" paragraphMargins>
                        {hour}
                    </Typography>
                    <Typography type="h1">
                        <WeatherIcon icon={icon} />
                    </Typography>
                    <Spacing pY={20} textAlign="center">
                        <WeatherTemperature temp={temp} />
                    </Spacing>
                    <Typography type="body">{precipitation}</Typography>
                </Spacing>
                <Spacing pY={20} textAlign="center">
                    <Typography type="body">{bearingCompass}</Typography>
                    <Typography type="body">{bearingArrow}</Typography>
                    <Typography type="footnote">{bearing}</Typography>
                    <Typography type="footnote" boldFace>
                        {speed}
                    </Typography>
                    <Typography type="footnote" boldFace>
                        {gusts + ' gusts'}
                    </Typography>
                </Spacing>
            </>
        )
    }
