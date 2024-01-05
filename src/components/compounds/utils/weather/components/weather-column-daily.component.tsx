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
                <Typography type="h4" content={weekday} />
                <Typography type="body" content={dayOfMonth} paragraphMargins />
                <Typography
                    type="h1"
                    content={<WeatherIcon icon={icon} />}
                    paragraphMargins
                />
                <Typography type="body" content={precipitation} />
                <Typography
                    type="body"
                    content={toSentenceCase(desc)}
                    paragraphMargins
                />
                <Grid alignColumns="auto">
                    <Grid columnItem={[1, 2]}>
                        <Typography type="body" content="Sunrise:" boldFace />
                        <Typography type="body" content={sunrise} />
                    </Grid>
                    <Grid columnItem={[2, 2]}>
                        <Typography type="body" content="Sunset:" boldFace />
                        <Typography type="body" content={sunset} />
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
                <Typography type="body" content={bearingCompass} />
                <Typography type="body" content={bearingArrow} />
                <Typography type="footnote" content={bearing} />
                <Typography type="footnote" content={speed} boldFace />
            </Spacing>
            <Spacing pY={20} textAlign="center">
                <Flex>
                    <Flex item>
                        <Spacing textAlign="center" mR={2.5}>
                            <Typography
                                type="footnote"
                                content="Pressure:"
                                textAlign="right"
                                boldFace
                            />
                            <Typography
                                type="footnote"
                                content="Humidity:"
                                textAlign="right"
                                boldFace
                            />
                            <Typography
                                type="footnote"
                                content="Dew Pt.:"
                                textAlign="right"
                                boldFace
                            />
                            <Typography
                                type="footnote"
                                content="UV Index:"
                                textAlign="right"
                                boldFace
                            />
                        </Spacing>
                    </Flex>
                    <Flex item>
                        <Spacing textAlign="center" mL={2.5}>
                            <Typography
                                type="footnote"
                                content={pressure + 'mb'}
                                textAlign="left"
                            />
                            <Typography
                                type="footnote"
                                content={humidity + '%'}
                                textAlign="left"
                            />
                            <Typography
                                type="footnote"
                                content={dp}
                                textAlign="left"
                            />
                            <Typography
                                type="footnote"
                                content={uvi}
                                textAlign="left"
                            />
                        </Spacing>
                    </Flex>
                </Flex>
            </Spacing>
        </>
    )
}
