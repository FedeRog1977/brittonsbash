import { WeatherColumn, WeatherToggle, WeatherDailyCall } from '.'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export const WeatherDaily = ({ latIn, lonIn }: any) => (
    <div className={'daily'}>
        <Carousel>
            <div className={'weatherResults'}>
                {WeatherDailyCall({ latIn, lonIn }).map((value, idx) => {
                    if (idx <= 4) {
                        return (
                            <WeatherColumn
                                dt={value.dt}
                                icon={value.weather[0].icon}
                                temp={value.temp.day}
                                pop={value.pop}
                                main={value.weather[0].main}
                                desc={value.weather[0].description}
                                sr={value.sunrise}
                                ss={value.sunset}
                                tempMax={value.temp.max}
                                tempMin={value.temp.min}
                                tempFlDay={value.feels_like.day}
                                tempFlNight={value.feels_like.night}
                                windDeg={value.wind_deg}
                                windSpd={value.wind_speed}
                                pressure={value.pressure}
                                humidity={value.humidity}
                                dp={value.dew_point}
                                uvi={value.uvi}
                            />
                        )
                    }
                })}
            </div>
            <div className={'weatherResults'}>
                {WeatherDailyCall({ latIn, lonIn }).map((value, idx) => {
                    if (idx >= 5 && idx <= 7) {
                        return (
                            <WeatherColumn
                                dt={value.dt}
                                icon={value.weather[0].icon}
                                temp={value.temp.day}
                                pop={value.pop}
                                main={value.weather[0].main}
                                desc={value.weather[0].description}
                                sr={value.sunrise}
                                ss={value.sunset}
                                tempMax={value.temp.max}
                                tempMin={value.temp.min}
                                tempFlDay={value.feels_like.day}
                                tempFlNight={value.feels_like.night}
                                windDeg={value.wind_deg}
                                windSpd={value.wind_speed}
                                pressure={value.pressure}
                                humidity={value.humidity}
                                dp={value.dew_point}
                                uvi={value.uvi}
                            />
                        )
                    }
                })}
            </div>
        </Carousel>
        <WeatherToggle lat={latIn} lon={lonIn} />
    </div>
)
