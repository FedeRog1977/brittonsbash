import { generateUniqueKey, isMobile } from '../../../../../utils/index.js';
import { Flex, FlexItem } from '../../../../bash-blocks/index.js';
import { useOpenWeatherCall } from '../api/open-weather.js';
import { ColumnHourlyDense } from './column-hourly-dense.js';
import { ColumnHourly } from './column-hourly.js';

export const Hourly = ({ latIn, lonIn }: any) => {
  const { hourlyResult } = useOpenWeatherCall(latIn, lonIn);

  return (
    <Flex direction="horizontal" alignHorizontal="apart" gap="md">
      {hourlyResult.slice(0, isMobile() ? 4 : 5).map((value, index) => (
        <FlexItem key={generateUniqueKey(index)} basis={2} grow>
          {isMobile() ? (
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
        </FlexItem>
      ))}
    </Flex>
  );
};
