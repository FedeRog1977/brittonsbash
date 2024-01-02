import { WeatherColumnHourly } from '.'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useOpenWeatherCall } from '../../../../../scripts'
import { Flex, Grid } from '../../../../bash-blocks'

export const WeatherHourly = ({ latIn, lonIn }: any) => {
    const { hourlyResult } = useOpenWeatherCall(latIn, lonIn)

    return (
        <Grid alignColumns="auto">
            {hourlyResult.slice(0, 7).map((value, index) => (
                <Grid columnItem={[index, 7]} key={index}>
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
                </Grid>
            ))}
        </Grid>
    )
}
