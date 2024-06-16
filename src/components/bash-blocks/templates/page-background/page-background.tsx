import { toUpperCase } from '../../../../utils';
import styles from './page-background.module.scss';
import cx from 'classnames';
import { FC } from 'react';
import { Header } from '../../partials';

export type PageBackgroundProps = {
  type?: 'std' | 'logo' | 'ig' | 'sport' | 'audi' | 'miami';
  content: string;
};

export const PageBackground: FC<PageBackgroundProps> = ({
  type = 'logo',
  content,
}) => {
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
