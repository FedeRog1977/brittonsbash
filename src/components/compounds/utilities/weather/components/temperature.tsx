import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { toTemperature } from '../../../../../utils/index.js';
import { Color, Typography, Spacing } from '../../../../bash-blocks/index.js';

type TemperatureProps = {
  temp: number;
  icon?: IconDefinition;
};

export const Temperature: FC<TemperatureProps> = ({ temp, icon }) => {
  let backgroundColor = undefined;
  let fontColor: Color | undefined = undefined;

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
      <Spacing padding="2xs">
        <Typography variant="footnote" textAlign="center" color={fontColor}>
          {toTemperature(temp)}
        </Typography>

        {icon ? (
          <>
            &nbsp;
            <FontAwesomeIcon icon={icon} size="2xs" />
          </>
        ) : null}
      </Spacing>
    </div>
  );
};
