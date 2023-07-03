import { WeatherColumnHourly } from '.'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useOpenWeatherCall } from '../../../scripts'
import { Flex } from '../../bash-blocks'

export const WeatherHourly = ({ latIn, lonIn }: any) => {
    const { hourlyResult } = useOpenWeatherCall(latIn, lonIn)

    return (
        <Flex>
            {hourlyResult.map((value, idx) => {
                {
                    if (idx <= 7) {
                        return (
                            <Flex item>
                                <WeatherColumnHourly
                                    key={idx}
                                    dt={value.dt}
                                    icon={value.weather[0].icon}
                                    temp={value.temp}
                                    tempFl={value.feels_like}
                                    pop={value.pop}
                                    windDeg={value.wind_deg}
                                    windSpd={value.wind_speed}
                                    windGst={value.wind_gust}
                                    pressure={value.pressure}
                                    humidity={value.humidity}
                                    dp={value.dew_point}
                                    vb={value.visibility}
                                    uvi={value.uvi}
                                />
                            </Flex>
                        )
                    }
                }
            })}
        </Flex>
    )
}
