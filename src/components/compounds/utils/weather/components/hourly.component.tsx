import { generateUniqueKey, useScreenWidth } from '../../../../../scripts'
import { Grid } from '../../../../bash-blocks'
import { useOpenWeatherCall } from '../calls/open-weather.call'
import { ColumnHourlyDense } from './column-hourly-dense.component'
import { ColumnHourly } from './column-hourly.component'

export const Hourly = ({ latIn, lonIn }: any) => {
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
                        <ColumnHourlyDense
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
                        <ColumnHourly
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
