import { generateUniqueKey, isMobile } from '../../../../utils';
import { Flex, FlexItem } from '../../../../components';
import { ColumnHourlyDense } from './column-hourly-dense';
import { ColumnHourly } from './column-hourly';
import { useOpenWeatherCall } from '../open-weather-temp';

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
