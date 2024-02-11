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
                    <Typography type="h4" content={hour} paragraphMargins />
                    <Typography
                        type="h1"
                        content={<WeatherIcon icon={icon} />}
                    />
                    <Spacing pY={20} textAlign="center">
                        <WeatherTemperature temp={temp} />
                    </Spacing>
                    <Typography type="body" content={precipitation} />
                </Spacing>
                <Spacing pY={20} textAlign="center">
                    <Typography type="body" content={bearingCompass} />
                    <Typography type="body" content={bearingArrow} />
                    <Typography type="footnote" content={bearing} />
                    <Typography type="footnote" content={speed} boldFace />
                    <Typography
                        type="footnote"
                        content={gusts + ' gusts'}
                        boldFace
                    />
                </Spacing>
            </>
        )
    }
