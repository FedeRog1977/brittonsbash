import { generateUniqueKey, useScreenWidth } from '../../../../../scripts'
import { Grid } from '../../../../bash-blocks'
import { useOpenWeatherCall } from '../calls/open-weather.call'
import { WeatherColumnHourlyDense } from './weather-column-hourly-dense.component'
import { WeatherColumnHourly } from './weather-column-hourly.component'

export const WeatherHourly = ({ latIn, lonIn }: any) => {
    const { isMobile } = useScreenWidth()

    const { hourlyResult } = useOpenWeatherCall(latIn, lonIn)

    const handleGridColumns = isMobile
        ? '1fr 1fr 1fr 1fr 1fr'
        : '1fr 1fr 1fr 1fr 1fr 1fr 1fr'

    return (
        <Grid alignColumns={handleGridColumns} columnGap={10}>
            {hourlyResult.slice(0, isMobile ? 5 : 7).map((value, index) => (
                <Grid key={generateUniqueKey(index)} columnItem={[index, 7]}>
                    {isMobile ? (
                        <WeatherColumnHourlyDense
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
                    ) : (
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
                    )}
                </Grid>
            ))}
        </Grid>
    )
}
