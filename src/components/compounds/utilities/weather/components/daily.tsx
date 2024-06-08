import { Button, Flex, FlexItem, Stack } from '../../../../bash-blocks';
import {
  useShowElement,
  useScreenWidth,
  generateUniqueKey,
} from '../../../../../utils';
import { ColumnDaily } from './column-daily';
import { Hourly } from './hourly';
import { ColumnDailyDense } from './column-daily-dense';
import { useOpenWeatherCall } from '../api/open-weather';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const WeatherDaily = ({ latIn, lonIn }: any) => {
  const { isMobile } = useScreenWidth();
  const { showElement, setShowElement } = useShowElement();
  const { dailyResult } = useOpenWeatherCall(latIn, lonIn);

  return (
    <Stack direction="vertical" spacing="xl">
      <Flex direction="horizontal" alignHorizontal="apart" gap="md">
        {dailyResult.slice(0, 5).map((value, index) => (
          <FlexItem key={generateUniqueKey(index)} basis={2} grow>
            {isMobile ? (
              // TODO: good example of Hidden component
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
    </Stack>
  );
};
