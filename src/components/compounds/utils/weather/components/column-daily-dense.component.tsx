import { FC, ReactElement } from 'react'
import {
    toDate,
    toPrecipitation,
    toBearing,
    toSpeed,
} from '../../../../../scripts'
import { Spacing, Typography } from '../../../../bash-blocks'
import { Daily } from '../types/daily.type'
import { Icon } from './icon.component'
import { Temperature } from './temperature.component'

type DailyPartial = Omit<
    Daily,
    | 'sunrise'
    | 'sunset'
    | 'feels_like'
    | 'pressure'
    | 'humidity'
    | 'dew_point'
    | 'wind_speed'
    | 'wind_deg'
    | 'clouds'
    | 'rain'
    | 'uvi'
>

type ColumnDailyDenseProps = Required<DailyPartial> & {
    windSpeed: number
    windDeg: number
}

export const ColumnDailyDense: FC<ColumnDailyDenseProps> = ({
    dt,
    weather: [{ icon }],
    temp: { day },
    pop,
    windSpeed,
    windDeg,
}) => {
    const { weekdayPartial, dayOfMonthPartial } = toDate(dt)
    const precipitation = toPrecipitation(pop)
    const {
        bearingFormatted: bearing,
        bearingCompass,
        bearingArrow,
    } = toBearing(windDeg)
    const speed = toSpeed(windSpeed, true)

    return (
        <>
            <Spacing pY={20} textAlign="center">
                <Typography type="h4">{weekdayPartial}</Typography>
                <Typography type="body" paragraphMargins>
                    {dayOfMonthPartial}
                </Typography>
                <Typography type="h1">
                    <Icon icon={icon} />
                </Typography>
                <Spacing pY={20} textAlign="center">
                    <Temperature temp={day} />
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
