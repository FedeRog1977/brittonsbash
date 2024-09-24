import { Button, Flex, FlexItem } from '../../../../bash-blocks/index.js';
import { useShowElement, generateUniqueKey, isMobile } from '../../../../../utils/index.js';
import { ColumnDaily } from './column-daily.js';
import { Hourly } from './hourly.js';
import { ColumnDailyDense } from './column-daily-dense.js';
import { useOpenWeatherCall } from '../api/open-weather.js';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const WeatherDaily = ({ latIn, lonIn }: any) => {
  const { showElement, setShowElement } = useShowElement();
  const { dailyResult } = useOpenWeatherCall(latIn, lonIn);

  return (
    <Flex direction="vertical" gap="xl">
      <Flex direction="horizontal" alignHorizontal="apart" gap="md">
        {dailyResult.slice(0, isMobile() ? 4 : 5).map((value, index) => (
          <FlexItem key={generateUniqueKey(index)} basis={2} grow>
            {isMobile() ? (
              <ColumnDailyDense
                dt={value.dt}
                weather={value.weather}
                temp={value.temp}
                pop={value.pop}
                windSpeed={value.wind_speed}
                windDeg={value.wind_deg}
              />
            ) : (
              <ColumnDaily
                dt={value.dt}
                temp={value.temp}
                pop={value.pop}
                sunrise={value.sunrise}
                sunset={value.sunset}
                weather={value.weather}
                windDeg={value.wind_deg}
                windSpeed={value.wind_speed}
                pressure={value.pressure}
                humidity={value.humidity}
                dp={value.dew_point}
                uvi={value.uvi}
              />
            )}
          </FlexItem>
        ))}
      </Flex>

      <Button
        variant="clear"
        typeColor={showElement ? 'lightBlue' : undefined}
        content={showElement ? 'Hide hourly forecast' : 'See hourly forecast'}
        icon={
          showElement ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )
        }
        func={() => setShowElement(!showElement)}
        width="full"
        transition
      />

      {showElement ? <Hourly latIn={latIn} lonIn={lonIn} /> : null}
    </Flex>
  );
};
