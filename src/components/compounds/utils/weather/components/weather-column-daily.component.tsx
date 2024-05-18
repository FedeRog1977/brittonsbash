import {
    toDate,
    toPrecipitation,
    toBearing,
    toSpeed,
    toSentenceCase,
} from '../../../../../scripts'
import { Flex, Grid, Spacing, Typography } from '../../../../bash-blocks'
import { WeatherIcon } from './weather-icon.component'
import { WeatherTemperature } from './weather-temperature.component'

export const WeatherColumnDaily = ({
    dt,
    icon,
    temp,
    pop,
    desc,
    tempMax,
    tempMin,
    // tempFlDay,
    // tempFlNight,
    windDeg,
    windSpd,
    pressure,
    humidity,
    dp,
    uvi,
    sr,
    ss,
}: any) => {
    // Add props
    const { weekday, dayOfMonth } = toDate(dt)
    const precipitation = toPrecipitation(pop)
    const { time: sunrise } = toDate(sr)
    const { time: sunset } = toDate(ss)
    const {
        bearingFormatted: bearing,
        bearingCompass,
        bearingArrow,
    } = toBearing(windDeg)
    const speed = toSpeed(windSpd, true)

    return (
        <>
            <Spacing pY={20} textAlign="center">
                <Typography type="h4">{weekday}</Typography>
                <Typography type="body" paragraphMargins>
                    {dayOfMonth}
                </Typography>
                <Typography type="h1" paragraphMargins>
                    <WeatherIcon icon={icon} />
                </Typography>
                <Typography type="body">{precipitation}</Typography>
                <Typography type="body" paragraphMargins>
                    {toSentenceCase(desc)}
                </Typography>
                <Grid alignColumns="auto">
                    <Grid columnItem={[1, 2]}>
                        <Typography type="body" boldFace>
                            Sunrise:
                        </Typography>
                        <Typography type="body">{sunrise}</Typography>
                    </Grid>
                    <Grid columnItem={[2, 2]}>
                        <Typography type="body" boldFace>
                            Sunset:
                        </Typography>
                        <Typography type="body">{sunset}</Typography>
                    </Grid>
                </Grid>
            </Spacing>
            <Spacing pY={20}>
                <Grid alignColumns="auto">
                    <Grid columnItem={[1, 3]}>
                        <WeatherTemperature temp={temp} />
                    </Grid>
                    <Grid columnItem={[2, 3]}>
                        <WeatherTemperature temp={tempMax} suffix="(H)" />
                    </Grid>
                    <Grid columnItem={[3, 3]}>
                        <WeatherTemperature temp={tempMin} suffix="(L)" />
                    </Grid>
                </Grid>
            </Spacing>
            <Spacing pY={20} textAlign="center">
                <Typography type="body">{bearingCompass}</Typography>
                <Typography type="body">{bearingArrow}</Typography>
                <Typography type="footnote">{bearing}</Typography>
                <Typography type="footnote" boldFace>
                    {speed}
                </Typography>
            </Spacing>
            <Spacing pY={20} textAlign="center">
                <Flex>
                    <Flex item>
                        <Spacing textAlign="center" mR={2.5}>
                            <Typography
                                type="footnote"
                                textAlign="right"
                                boldFace
                            >
                                Pressure:
                            </Typography>
                            <Typography
                                type="footnote"
                                textAlign="right"
                                boldFace
                            >
                                Humidity:
                            </Typography>
                            <Typography
                                type="footnote"
                                textAlign="right"
                                boldFace
                            >
                                Dew Pt.:
                            </Typography>
                            <Typography
                                type="footnote"
                                textAlign="right"
                                boldFace
                            >
                                UV Index:
                            </Typography>
                        </Spacing>
                    </Flex>
                    <Flex item>
                        <Spacing textAlign="center" mL={2.5}>
                            <Typography type="footnote" textAlign="left">
                                {pressure + 'mb'}
                            </Typography>
                            <Typography type="footnote" textAlign="left">
                                {humidity + '%'}
                            </Typography>
                            <Typography type="footnote" textAlign="left">
                                {dp}
                            </Typography>
                            <Typography type="footnote" textAlign="left">
                                {uvi}
                            </Typography>
                        </Spacing>
                    </Flex>
                </Flex>
            </Spacing>
        </>
    )
}
