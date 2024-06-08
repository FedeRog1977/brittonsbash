import { generateUniqueKey, useScreenWidth } from '../../../../../utils';
import { Grid } from '../../../../bash-blocks';
import { useOpenWeatherCall } from '../api/open-weather';
import { ColumnHourlyDense } from './column-hourly-dense';
import { ColumnHourly } from './column-hourly';

export const Hourly = ({ latIn, lonIn }: any) => {
  const { isMobile } = useScreenWidth();

  const { hourlyResult } = useOpenWeatherCall(latIn, lonIn);

  const handleGridColumns = isMobile
    ? '1fr 1fr 1fr 1fr 1fr'
    : '1fr 1fr 1fr 1fr 1fr 1fr 1fr';

  return (
    <Grid alignColumns={handleGridColumns} columnGap={10}>
      {hourlyResult.slice(0, isMobile ? 5 : 7).map((value, index) => (
        <Grid key={generateUniqueKey(index)} columnItem={[index, 7]}>
          {isMobile ? (
            // Good example of Hidden component
            <ColumnHourlyDense
              // TODO: sort order of props
              dt={value.dt}
              weather={value.weather}
              temp={value.temp}
              pop={value.pop}
              windSpeed={value.wind_speed}
              windDeg={value.wind_deg}
              windGust={value.wind_gust}
            />
          ) : (
            <ColumnHourly
              // TODO: sort order of props
              dt={value.dt}
              weather={value.weather}
              temp={value.temp}
              tempFl={value.feels_like}
              pop={value.pop}
              windSpeed={value.wind_speed}
              windDeg={value.wind_deg}
              windGust={value.wind_gust}
              pressure={value.pressure}
              humidity={value.humidity}
              dp={value.dew_point}
              visibility={value.visibility}
              uvi={value.uvi}
            />
          )}
        </Grid>
      ))}
    </Grid>
  );
};
