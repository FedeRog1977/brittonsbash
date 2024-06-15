import { FC } from 'react';
import {
  toDate,
  toPrecipitation,
  toBearing,
  toSpeed,
} from '../../../../../utils';
import { Stack, Typography } from '../../../../bash-blocks';
import { Hourly } from '../types/hourly';
import { ConditionIcon } from './condition-icon';
import { Temperature } from './temperature';

// Sort order of props
type HourlyPartial = Omit<
  Hourly,
  | 'feels_like'
  | 'pressure'
  | 'humidity'
  | 'dew_point'
  | 'uvi'
  | 'clouds'
  | 'visibility'
  | 'wind_speed'
  | 'wind_deg'
  | 'wind_gust'
>;

type ColumnHourlyDenseProps = Required<HourlyPartial> & {
  windSpeed: number;
  windDeg: number;
  windGust: number;
};

export const ColumnHourlyDense: FC<ColumnHourlyDenseProps> = ({
  dt,
  temp,
  weather: [{ icon }],
  pop,
  windSpeed,
  windDeg,
  windGust,
}) => {
  const { hour } = toDate(dt);
  const precipitation = toPrecipitation(pop);
  const {
    bearingFormatted: bearing,
    bearingCompass,
    bearingArrow,
  } = toBearing(windDeg);
  const speed = toSpeed(windSpeed, true);
  const gusts = toSpeed(windGust, true);

  return (
    <Stack direction="vertical" spacing="lg">
      <Typography variant="h4" paragraphMargins>
        {hour}
      </Typography>
      <Typography variant="h1">
        <ConditionIcon variant={icon} />
      </Typography>
      <Temperature temp={temp} />
      <Typography variant="body">{precipitation}</Typography>
      <Typography variant="body">{bearingCompass}</Typography>
      <Typography variant="body">{bearingArrow}</Typography>
      <Typography variant="footnote">{bearing}</Typography>
      <Typography variant="footnote" boldFace>
        {speed}
      </Typography>
      <Typography variant="footnote" boldFace>
        {gusts + ' gusts'}
      </Typography>
    </Stack>
  );
};
