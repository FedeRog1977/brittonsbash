import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { toTemperature, useScreenWidth } from '../../../../../utils';
import { Color, Spacing, Typography } from '../../../../bash-blocks';
import { Icon } from '../types/icon';

type TemperatureProps = {
  temp: number;
  suffix?: string;
} & Icon;

export const Temperature: FC<TemperatureProps> = ({ temp, suffix, icon }) => {
  const { isMobile } = useScreenWidth();

  let backgroundColor = undefined;
  let fontColor: Color = undefined;

  if (temp >= 30) {
    backgroundColor = 'rgba(238, 40, 0, 0.8)';
    fontColor = 'white';
  } else if (temp >= 25 && temp < 30) {
    backgroundColor = 'rgba(238, 102, 0, 0.8)';
    fontColor = 'darkerGrey';
  } else if (temp >= 15 && temp < 25) {
    backgroundColor = 'rgba(255, 204, 51, 0.8)';
    fontColor = 'darkerGrey';
  } else if (temp >= 0 && temp < 15) {
    backgroundColor = 'rgba(255, 255, 153, 0.6)';
    fontColor = 'darkerGrey';
  } else if (temp < 0) {
    backgroundColor = 'rgba(0, 163, 224, 0.2)';
    fontColor = 'darkerGrey';
  }

  return (
    <div style={{ background: backgroundColor }}>
      <Spacing pY={isMobile ? 5 : 10} textAlign="center">
        <Typography variant="footnote" color={fontColor}>
          {toTemperature(temp)}
        </Typography>

        {suffix ? (
          <Typography variant="footnote" color={fontColor}>
            <>&nbsp;{suffix}</>
          </Typography>
        ) : null}

        {icon ? (
          <>
            &nbsp;
            <FontAwesomeIcon icon={icon as IconProp} size="2xs" />
          </>
        ) : null}
      </Spacing>
    </div>
  );
};
