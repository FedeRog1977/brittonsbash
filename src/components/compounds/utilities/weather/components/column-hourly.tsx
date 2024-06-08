import { FC } from 'react';
import {
  toDate,
  toPrecipitation,
  toBearing,
  toSpeed,
} from '../../../../../utils';
import { Flex, Grid, Spacing, Typography } from '../../../../bash-blocks';
import { Hourly } from '../types/hourly';
import { ConditionIcon } from './condition-icon';
import { Temperature } from './temperature';

// Sort order of props
type HourlyPartial = Omit<
  Hourly,
  | 'feels_like'
  | 'dew_point'
  | 'clouds'
  | 'wind_speed'
  | 'wind_deg'
  | 'wind_gust'
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
  const {
    bearingFormatted: bearing,
    bearingCompass,
    bearingArrow,
  } = toBearing(windDeg);
  const speed = toSpeed(windSpeed, true);
  const gusts = toSpeed(windGust, true);

  return (
    <>
      <Spacing pY={20} textAlign="center">
        <Typography variant="h4" paragraphMargins>
          {hour}
        </Typography>
        <Typography variant="h1" paragraphMargins>
          <ConditionIcon variant={icon} />
        </Typography>
        <Typography variant="body">{precipitation}</Typography>
      </Spacing>
      <Spacing pY={20}>
        <Grid alignColumns="auto">
          <Grid columnItem={[1, 2]}>
            <Temperature temp={temp} />
          </Grid>
          <Grid columnItem={[1, 2]}>
            <Temperature temp={tempFl} />
          </Grid>
        </Grid>
      </Spacing>
      <Spacing pY={20} textAlign="center">
        <Typography variant="body">{bearingCompass}</Typography>
        <Typography variant="body">{bearingArrow}</Typography>
        <Typography variant="footnote">{bearing}</Typography>
        <Typography variant="footnote" boldFace>
          {speed}
        </Typography>
        <Typography variant="footnote" boldFace>
          {gusts + ' gusts'}
        </Typography>
      </Spacing>
      <Spacing pY={20} textAlign="center">
        <Flex>
          <Flex item>
            <Spacing textAlign="center" mR={2.5}>
              <Typography variant="footnote" textAlign="right" boldFace>
                Pressure:
              </Typography>
              <Typography variant="footnote" textAlign="right" boldFace>
                Humidity:
              </Typography>
              <Typography variant="footnote" textAlign="right" boldFace>
                Dew Pt.:
              </Typography>
              <Typography variant="footnote" textAlign="right" boldFace>
                Visibility:
              </Typography>
              <Typography variant="footnote" textAlign="right" boldFace>
                UV Index:
              </Typography>
            </Spacing>
          </Flex>
          <Flex item>
            <Spacing textAlign="center" mL={2.5}>
              <Typography variant="footnote" textAlign="left">
                {pressure + 'mb'}
              </Typography>
              <Typography variant="footnote" textAlign="left">
                {humidity + '%'}
              </Typography>
              <Typography variant="footnote" textAlign="left">
                {dp}
              </Typography>
              <Typography variant="footnote" textAlign="left">
                {visibility / 100 + '%'}
              </Typography>
              <Typography variant="footnote" textAlign="left">
                {uvi}
              </Typography>
            </Spacing>
          </Flex>
        </Flex>
      </Spacing>
    </>
  );
};
