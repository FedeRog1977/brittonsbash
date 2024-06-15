import { FC, ReactElement } from 'react';
import {
  toDate,
  toPrecipitation,
  toBearing,
  toSpeed,
} from '../../../../../utils';
import { Stack, Typography } from '../../../../bash-blocks';
import { Daily } from '../types/daily';
import { ConditionIcon } from './condition-icon';
import { Temperature } from './temperature';

// Sort order of props
type DailyPartial = Omit<
  Daily,
  | 'sunrise'
  | 'sunset'
  | 'feels_like'
  | 'pressure'
  | 'humidity'
  | 'dew_point'
  | 'wind_speed'
  | 'wind_deg'
  | 'clouds'
  | 'rain'
  | 'uvi'
>;

type ColumnDailyDenseProps = Required<DailyPartial> & {
  windSpeed: number;
  windDeg: number;
};

export const ColumnDailyDense: FC<ColumnDailyDenseProps> = ({
  dt,
  temp: { day },
  weather: [{ icon }],
  pop,
  windSpeed,
  windDeg,
}) => {
  const { weekdayPartial, dayOfMonthPartial } = toDate(dt);
  const precipitation = toPrecipitation(pop);
  const {
    bearingFormatted: bearing,
    bearingCompass,
    bearingArrow,
  } = toBearing(windDeg);
  const speed = toSpeed(windSpeed, true);

  return (
    <Stack direction="vertical" spacing="lg">
      <Typography variant="h4">{weekdayPartial}</Typography>
      <Typography variant="body" paragraphMargins>
        {dayOfMonthPartial}
      </Typography>
      <Typography variant="h1">
        <ConditionIcon variant={icon} />
      </Typography>
      <Temperature temp={day} />
      <Typography variant="body">{precipitation}</Typography>
      <Typography variant="body">{bearingCompass}</Typography>
      <Typography variant="body">{bearingArrow}</Typography>
      <Typography variant="footnote">{bearing}</Typography>
      <Typography variant="footnote" boldFace>
        {speed}
      </Typography>
    </Stack>
  );
};
