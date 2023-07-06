import {
    faCloudRain,
    faMoon,
    faSun,
    faTemperatureHigh,
    faTemperatureLow,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    toDate,
    toTemperature,
    toPrecipitation,
    toBearing,
    toSpeed,
    toSentenceCase,
} from '../../../scripts'
import { Flex, Spacing, Typography } from '../../bash-blocks'
import { WeatherIcon, WeatherTemperature } from '../../elements'

export const WeatherColumnDaily = ({
    dt,
    icon,
    temp,
    pop,
    desc,
    tempMax,
    tempMin,
    tempFlDay,
    tempFlNight,
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
    const temperature = toTemperature(temp)
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
        <Spacing mX={5}>
            <Spacing
                pX={20}
                pY={20}
                backgroundColor="var(--lighter-grey)"
                textAlign="center"
            >
                <Typography type="h4" content={weekday} />
                <Typography type="body" content={dayOfMonth} />
                <Typography type="h3" content={<WeatherIcon icon={icon} />} />
                <Typography type="h4" content={temperature} />
                <Typography
                    type="body"
                    content={
                        <>
                            <FontAwesomeIcon icon={faCloudRain} />
                            &nbsp;{precipitation}
                        </>
                    }
                />
                <Typography
                    type="footnote"
                    content={toSentenceCase(desc)}
                    inline
                />
                <Flex>
                    <Flex item>
                        <Spacing textAlign="center">
                            <Typography
                                type="footnote"
                                content="Sunrise:"
                                boldFace
                            />
                            <Typography type="footnote" content={sunrise} />
                        </Spacing>
                    </Flex>
                    <Flex item>
                        <Spacing textAlign="center">
                            <Typography
                                type="footnote"
                                content="Sunset:"
                                boldFace
                            />
                            <Typography type="footnote" content={sunset} />
                        </Spacing>
                    </Flex>
                </Flex>
            </Spacing>
            <Spacing pY={20} backgroundColor="var(--lighter-grey)">
                <Flex>
                    <Flex item>
                        <WeatherTemperature
                            icon={faTemperatureHigh}
                            temp={tempMax}
                        />
                    </Flex>
                    <Flex item>
                        <WeatherTemperature
                            icon={faTemperatureLow}
                            temp={tempMin}
                        />
                    </Flex>
                    <Flex item>
                        <WeatherTemperature icon={faSun} temp={tempFlDay} />
                    </Flex>
                    <Flex item>
                        <WeatherTemperature icon={faMoon} temp={tempFlNight} />
                    </Flex>
                </Flex>
            </Spacing>
            <Spacing
                pX={20}
                pY={20}
                backgroundColor="var(--lighter-grey)"
                textAlign="center"
            >
                <Typography type="body" content={bearingCompass} />
                <Typography type="body" content={bearingArrow} />
                <Typography type="footnote" content={bearing} />
                <Typography type="footnote" content={speed} boldFace />
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
        </Spacing>
    )
}
