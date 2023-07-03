import { faCloudRain } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    toDate,
    toTemperature,
    toPrecipitation,
    toBearing,
    toSpeed,
} from '../../../scripts'
import { Flex, Spacing, Typography } from '../../bash-blocks'
import { WeatherIcon, WeatherWindArrow } from '../../elements'

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
    const temperature = toTemperature(temp)
    const temperatureFl = toTemperature(tempFl)
    const precipitation = toPrecipitation(pop)
    const { bearingFormatted: bearing, bearingCompass } = toBearing(windDeg)
    const speed = toSpeed(windSpd, true)
    const gusts = toSpeed(windGst, true)

    return (
        <Spacing mX={5}>
            <Spacing
                pX={20}
                pY={20}
                backgroundColor="var(--lighter-grey)"
                textAlign="center"
            >
                <Typography type="h4" content={hour} />
                <Typography type="h3" content={<WeatherIcon icon={icon} />} />
                <Typography type="h4" content={temperature} />
                <Typography type="h4" content={temperatureFl + '(FL)'} />
                <Typography
                    type="body"
                    content={
                        <>
                            <FontAwesomeIcon icon={faCloudRain} />
                            &nbsp;{precipitation}
                        </>
                    }
                />
            </Spacing>
            <Spacing
                pX={20}
                pY={20}
                backgroundColor="var(--lighter-grey)"
                textAlign="center"
            >
                <Typography type="body" content={bearingCompass} />
                <Typography
                    type="body"
                    content={<WeatherWindArrow bearing={windDeg} />}
                />
                <Typography type="footnote" content={bearing} />
                <Typography type="footnote" content={speed} boldFace />
                <Typography
                    type="footnote"
                    content={gusts + ' gusts'}
                    boldFace
                />
            </Spacing>
            <Spacing
                pX={20}
                pY={20}
                backgroundColor="var(--lighter-grey)"
                textAlign="center"
            >
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
        </Spacing>
    )
}
