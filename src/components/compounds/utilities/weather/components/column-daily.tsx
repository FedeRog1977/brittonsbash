import { FC } from 'react';
import {
  toDate,
  toPrecipitation,
  toBearing,
  toSpeed,
  toSentenceCase,
} from '../../../../../utils';
import { Flex, FlexItem, Stack, Typography } from '../../../../bash-blocks';
import { Daily } from '../types/daily';
import { ConditionIcon } from './condition-icon';
import { Temperature } from './temperature';

// Sort order of props
type DailyPartial = Omit<
  Daily,
  'feels_like' | 'dew_point' | 'wind_speed' | 'wind_deg' | 'clouds' | 'rain'
>;

type ColumnDailyProps = Required<DailyPartial> & {
  dp: number;
  windSpeed: number;
  windDeg: number;
};

export const ColumnDaily: FC<ColumnDailyProps> = ({
  dt,
  temp: { day, min, max },
  weather: [{ description, icon }],
  pop,
  sunrise: sr,
  sunset: ss,
  pressure,
  humidity,
  dp,
  uvi,
  windDeg,
  windSpeed,
}) => {
  const { weekday, dayOfMonth } = toDate(dt);
  const precipitation = toPrecipitation(pop);
  const { time: sunrise } = toDate(sr);
  const { time: sunset } = toDate(ss);
  const {
    bearingFormatted: bearing,
    bearingCompass,
    bearingArrow,
  } = toBearing(windDeg);
  const speed = toSpeed(windSpeed, true);

  return (
    <Stack direction="vertical" spacing="lg">
      <Stack direction="vertical" alignHorizontal="center" spacing="2xs">
        <Typography variant="h4">{weekday}</Typography>
        <Typography variant="body">{dayOfMonth}</Typography>
        <ConditionIcon variant={icon} />
        <Typography variant="body">
          {`${precipitation} ${toSentenceCase(description)}`}
        </Typography>
      </Stack>

      <Stack direction="vertical" alignHorizontal="center" spacing="2xs">
        <Typography variant="footnote" boldFace>
          {`Sunrise:\n${sunrise}`}
        </Typography>
        <Typography variant="footnote" boldFace>
          {`Sunset:\n${sunset}`}
        </Typography>
      </Stack>

      <Flex direction="horizontal" gap="2xs">
        <FlexItem grow>
          <Temperature temp={day} />
        </FlexItem>
        <FlexItem grow>
          <Temperature temp={max} />
        </FlexItem>
        <FlexItem grow>
          <Temperature temp={min} />
        </FlexItem>
      </Flex>

      <Stack direction="vertical" alignHorizontal="center" spacing="2xs">
        <Typography variant="body">{bearingCompass}</Typography>
        {bearingArrow}
        <Typography variant="footnote">{bearing}</Typography>
        <Typography variant="footnote">{speed}</Typography>
      </Stack>

      <Stack direction="vertical" alignHorizontal="center" spacing="2xs">
        <Typography variant="footnote">
          {`Pressure: ${pressure + 'mb'}`}
        </Typography>
        <Typography variant="footnote">
          {`Humidity: ${humidity + '%'}`}
        </Typography>
        <Typography variant="footnote">{`Dew Pt.: ${dp}`}</Typography>
        <Typography variant="footnote">{`UV Index: ${uvi}`}</Typography>
      </Stack>
    </Stack>
  );
};
