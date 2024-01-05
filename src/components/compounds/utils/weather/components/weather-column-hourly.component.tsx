import {
    toDate,
    toPrecipitation,
    toBearing,
    toSpeed,
} from '../../../../../scripts'
import { Flex, Grid, Spacing, Typography } from '../../../../bash-blocks'
import { WeatherIcon } from './weather-icon.component'
import { WeatherTemperature } from './weather-temperature.component'

export const WeatherColumnHourly = ({
    dt,
    icon,
    temp,
    tempFl,
    pop,
    windDeg,
    windSpd,
    windGst,
    pressure,
    humidity,
    dp,
    vb,
    uvi,
}: any) => {
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
                    paragraphMargins
                />
                <Typography type="body" content={precipitation} />
            </Spacing>
            <Spacing pY={20}>
                <Grid alignColumns="auto">
                    <Grid columnItem={[1, 2]}>
                        <WeatherTemperature temp={temp} />
                    </Grid>
                    <Grid columnItem={[1, 2]}>
                        <WeatherTemperature temp={tempFl} suffix="(FL)" />
                    </Grid>
                </Grid>
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
                                content="Visibility:"
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
                                content={vb / 100 + '%'}
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
