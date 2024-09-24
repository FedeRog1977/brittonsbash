import cx from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './background.module.scss';
import { toUpperCase } from '../../../../utils';
import { Color } from '../../reference';

export type BackgroundProps = {
  children: ReactNode;
  color: Color;
};

export const Background: FC<BackgroundProps> = ({ children, color }) => {
  const classNames = cx(styles.background, styles[`color${toUpperCase(color)}`]);

  return <div className={classNames}>{children}</div>;
};
