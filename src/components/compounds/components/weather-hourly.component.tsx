import { WeatherColumnHourly } from '.'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useOpenWeatherCall } from '../../../scripts'

export const WeatherHourly = ({ latIn, lonIn }: any) => {
    const { hourlyResult } = useOpenWeatherCall(latIn, lonIn)

    return (
        <div className={'hourly'}>
            <Carousel>
                <div className={'weatherResults'}>
                    {hourlyResult.map((value, idx) => {
                        if (idx <= 3) {
                            return (
                                <WeatherColumnHourly
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
                            )
                        }
                    })}
                </div>
                <div className={'weatherResults'}>
                    {hourlyResult.map((value, idx) => {
                        if (idx >= 4 && idx <= 7) {
                            return (
                                <WeatherColumnHourly
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
                            )
                        }
                    })}
                </div>
            </Carousel>
        </div>
    )
}
