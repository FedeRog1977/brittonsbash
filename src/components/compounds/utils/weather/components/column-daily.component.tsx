import { FC } from 'react'
import {
    toDate,
    toPrecipitation,
    toBearing,
    toSpeed,
    toSentenceCase,
} from '../../../../../scripts'
import { Flex, Grid, Spacing, Typography } from '../../../../bash-blocks'
import { Daily } from '../types/daily.type'
import { Icon as IconComponent } from './icon.component'
import { Temperature } from './temperature.component'

// Sort order of props
type DailyPartial = Omit<
    Daily,
    'feels_like' | 'dew_point' | 'wind_speed' | 'wind_deg' | 'clouds' | 'rain'
>

type ColumnDailyProps = Required<DailyPartial> & {
    dp: number
    windSpeed: number
    windDeg: number
}

export const ColumnDaily: FC<ColumnDailyProps> = ({
    dt,
    temp: { day, min, max },
    weather: [{ description, icon }],
    pop,
    sunrise: sr,
    sunset: ss,
    pressure,
    humidity,
    dp,
    uvi,
    windDeg,
    windSpeed,
}) => {
    const { weekday, dayOfMonth } = toDate(dt)
    const precipitation = toPrecipitation(pop)
    const { time: sunrise } = toDate(sr)
    const { time: sunset } = toDate(ss)
    const {
        bearingFormatted: bearing,
        bearingCompass,
        bearingArrow,
    } = toBearing(windDeg)
    const speed = toSpeed(windSpeed, true)

    return (
        <>
            <Spacing pY={20} textAlign="center">
                <Typography variant="h4">{weekday}</Typography>
                <Typography variant="body" paragraphMargins>
                    {dayOfMonth}
                </Typography>
                <Typography variant="h1" paragraphMargins>
                    <IconComponent icon={icon} />
                </Typography>
                <Typography variant="body">{precipitation}</Typography>
                <Typography variant="body" paragraphMargins>
                    {toSentenceCase(description)}
                </Typography>
                <Grid alignColumns="auto">
                    <Grid columnItem={[1, 2]}>
                        <Typography variant="body" boldFace>
                            Sunrise:
                        </Typography>
                        <Typography variant="body">{sunrise}</Typography>
                    </Grid>
                    <Grid columnItem={[2, 2]}>
                        <Typography variant="body" boldFace>
                            Sunset:
                        </Typography>
                        <Typography variant="body">{sunset}</Typography>
                    </Grid>
                </Grid>
            </Spacing>
            <Spacing pY={20}>
                <Grid alignColumns="auto">
                    <Grid columnItem={[1, 3]}>
                        <Temperature temp={day} />
                    </Grid>
                    <Grid columnItem={[2, 3]}>
                        <Temperature temp={max} suffix="(H)" />
                    </Grid>
                    <Grid columnItem={[3, 3]}>
                        <Temperature temp={min} suffix="(L)" />
                    </Grid>
                </Grid>
            </Spacing>
            <Spacing pY={20} textAlign="center">
                <Typography variant="body">{bearingCompass}</Typography>
                <Typography variant="body">{bearingArrow}</Typography>
                <Typography variant="footnote">{bearing}</Typography>
                <Typography variant="footnote" boldFace>
                    {speed}
                </Typography>
            </Spacing>
            <Spacing pY={20} textAlign="center">
                <Flex>
                    <Flex item>
                        <Spacing textAlign="center" mR={2.5}>
                            <Typography
                                variant="footnote"
                                textAlign="right"
                                boldFace
                            >
                                Pressure:
                            </Typography>
                            <Typography
                                variant="footnote"
                                textAlign="right"
                                boldFace
                            >
                                Humidity:
                            </Typography>
                            <Typography
                                variant="footnote"
                                textAlign="right"
                                boldFace
                            >
                                Dew Pt.:
                            </Typography>
                            <Typography
                                variant="footnote"
                                textAlign="right"
                                boldFace
                            >
                                UV Index:
                            </Typography>
                        </Spacing>
                    </Flex>
                    <Flex item>
                        <Spacing textAlign="center" mL={2.5}>
                            <Typography variant="footnote" textAlign="left">
                                {pressure + 'mb'}
                            </Typography>
                            <Typography variant="footnote" textAlign="left">
                                {humidity + '%'}
                            </Typography>
                            <Typography variant="footnote" textAlign="left">
                                {dp}
                            </Typography>
                            <Typography variant="footnote" textAlign="left">
                                {uvi}
                            </Typography>
                        </Spacing>
                    </Flex>
                </Flex>
            </Spacing>
        </>
    )
}
