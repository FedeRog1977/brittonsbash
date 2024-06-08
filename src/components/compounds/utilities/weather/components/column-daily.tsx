import { FC } from 'react';
import {
  toDate,
  toPrecipitation,
  toBearing,
  toSpeed,
  toSentenceCase,
} from '../../../../../utils';
import { Stack, Typography } from '../../../../bash-blocks';
import { Daily } from '../types/daily';
import { ConditionIcon } from './condition-icon';
import { Temperature } from './temperature';
import { FlexTemp } from '../../../../bash-blocks/basics/flex-temp/flex';
import { FlexItemTemp } from '../../../../bash-blocks/basics/flex-temp/flex-item';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

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

      <FlexTemp direction="horizontal" gap="2xs">
        <FlexItemTemp grow>
          <Temperature temp={day} />
        </FlexItemTemp>
        <FlexItemTemp grow>
          <Temperature temp={max} />
        </FlexItemTemp>
        <FlexItemTemp grow>
          <Temperature temp={min} />
        </FlexItemTemp>
      </FlexTemp>

      <Stack direction="vertical" alignHorizontal="center" spacing="2xs">
        <Typography variant="body">{bearingCompass}</Typography>
        {bearingArrow}
        <Typography variant="footnote">{bearing}</Typography>
        <Typography variant="footnote">{speed}</Typography>
      </Stack>

      <Stack direction="vertical" alignHorizontal="center" spacing="2xs">
        <Typography variant="footnote" boldFace>
          {`Pressure: ${pressure + 'mb'}`}
        </Typography>
        <Typography variant="footnote" boldFace>
          {`Humidity: ${humidity + '%'}`}
        </Typography>
        <Typography variant="footnote" boldFace>
          {`Dew Pt.: ${dp}`}
        </Typography>
        <Typography variant="footnote" boldFace>
          {`UV Index: ${uvi}`}
        </Typography>
      </Stack>
    </Stack>
  );
};
