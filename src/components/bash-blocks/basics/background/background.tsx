import { toUpperCase } from '../../../../scripts';
import styles from './background.module.scss';
import cx from 'classnames';
import { FC } from 'react';
import { Header } from '../../partials';

export type BackgroundProps = {
  type?: 'std' | 'logo' | 'ig' | 'sport' | 'audi' | 'miami';
  content: string;
};

export const Background: FC<BackgroundProps> = ({ type = 'logo', content }) => {
  const classNamesText = cx(styles.text, styles[`text${toUpperCase(type)}`]);

  return (
    <div className={styles.background}>
      <Header />
      <div className={classNamesText}>
        <div className={styles.textContent}>{content}</div>
      </div>
    </div>
  );
};
