import { FC } from 'react';
import { toDate, toPrecipitation, toBearing, toSpeed } from '../../../../../utils';
import { Flex, FlexItem, Typography } from '../../../../bash-blocks';
import { Hourly } from '../types/hourly';
import { ConditionIcon } from './condition-icon';
import { Temperature } from './temperature';

// Sort order of props
type HourlyPartial = Omit<
  Hourly,
  'feels_like' | 'dew_point' | 'clouds' | 'wind_speed' | 'wind_deg' | 'wind_gust'
>;

type ColumnHourlyProps = Required<HourlyPartial> & {
  dp: number;
  tempFl: number;
  windSpeed: number;
  windDeg: number;
  windGust: number;
};

export const ColumnHourly: FC<ColumnHourlyProps> = ({
  dt,
  weather: [{ icon }],
  temp,
  tempFl,
  pop,
  windSpeed,
  windDeg,
  windGust,
  pressure,
  humidity,
  dp,
  visibility,
  uvi,
}) => {
  const { hour } = toDate(dt);
  const precipitation = toPrecipitation(pop);
  const { bearingFormatted: bearing, bearingCompass, bearingArrow } = toBearing(windDeg);
  const speed = toSpeed(windSpeed, true);
  const gusts = toSpeed(windGust, true);

  return (
    <Flex direction="vertical" gap="lg">
      <Flex direction="vertical" alignHorizontal="center" gap="2xs">
        <Typography variant="h4">{hour}</Typography>
        <ConditionIcon variant={icon} />
        <Typography variant="body">{precipitation}</Typography>
      </Flex>

      <Flex direction="horizontal" gap="2xs">
        <FlexItem grow>
          <Temperature temp={temp} />
        </FlexItem>
        <FlexItem grow>
          <Temperature temp={tempFl} />
        </FlexItem>
      </Flex>

      <Flex direction="vertical" alignHorizontal="center" gap="2xs">
        <Typography variant="body">{bearingCompass}</Typography>
        {bearingArrow}
        <Typography variant="footnote">{bearing}</Typography>
        <Typography variant="footnote">{speed}</Typography>
        <Typography variant="footnote">{gusts + ' gusts'}</Typography>
      </Flex>

      <Flex direction="vertical" alignHorizontal="center" gap="2xs">
        <Typography variant="footnote">{`Pressure: ${pressure + 'mb'}`}</Typography>
        <Typography variant="footnote">{`Humidity: ${humidity + '%'}`}</Typography>
        <Typography variant="footnote">{`Dew Pt.: ${dp}`}</Typography>
        <Typography variant="footnote">{`Visibility: ${visibility / 100 + '%'}`}</Typography>
        <Typography variant="footnote">{`UV Index: ${uvi}`}</Typography>
      </Flex>
    </Flex>
  );
};
