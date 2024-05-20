import { FC } from 'react'
import {
    toDate,
    toPrecipitation,
    toBearing,
    toSpeed,
} from '../../../../../scripts'
import { Spacing, Typography } from '../../../../bash-blocks'
import { Hourly } from '../types/hourly.type'
import { Icon } from './icon.component'
import { Temperature } from './temperature.component'

// Sort order of props
type HourlyPartial = Omit<
    Hourly,
    | 'feels_like'
    | 'pressure'
    | 'humidity'
    | 'dew_point'
    | 'uvi'
    | 'clouds'
    | 'visibility'
    | 'wind_speed'
    | 'wind_deg'
    | 'wind_gust'
>

type ColumnHourlyDenseProps = Required<HourlyPartial> & {
    windSpeed: number
    windDeg: number
    windGust: number
}

export const ColumnHourlyDense: FC<ColumnHourlyDenseProps> = ({
    dt,
    temp,
    weather: [{ icon }],
    pop,
    windSpeed,
    windDeg,
    windGust,
}) => {
    const { hour } = toDate(dt)
    const precipitation = toPrecipitation(pop)
    const {
        bearingFormatted: bearing,
        bearingCompass,
        bearingArrow,
    } = toBearing(windDeg)
    const speed = toSpeed(windSpeed, true)
    const gusts = toSpeed(windGust, true)

    return (
        <>
            <Spacing pY={20} textAlign="center">
                <Typography type="h4" paragraphMargins>
                    {hour}
                </Typography>
                <Typography type="h1">
                    <Icon icon={icon} />
                </Typography>
                <Spacing pY={20} textAlign="center">
                    <Temperature temp={temp} />
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
