import {
    toDate,
    toPrecipitation,
    toBearing,
    toSpeed,
} from '../../../../../scripts'
import { Spacing, Typography } from '../../../../bash-blocks'
import { WeatherIcon } from './weather-icon.component'
import { WeatherTemperature } from './weather-temperature.component'

export const WeatherColumnDailyDense = ({
    dt,
    icon,
    temp,
    pop,
    windDeg,
    windSpd,
}: any) =>
    // Add props
    {
        const { weekdayPartial, dayOfMonthPartial } = toDate(dt)
        const precipitation = toPrecipitation(pop)
        const {
            bearingFormatted: bearing,
            bearingCompass,
            bearingArrow,
        } = toBearing(windDeg)
        const speed = toSpeed(windSpd, true)

        return (
            <>
                <Spacing pY={20} textAlign="center">
                    <Typography type="h4">{weekdayPartial}</Typography>
                    <Typography type="body" paragraphMargins>
                        {dayOfMonthPartial}
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
                </Spacing>
            </>
        )
    }
