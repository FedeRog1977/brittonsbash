import { FC } from 'react';
import { Img } from '../../../utils/types';
import { Typography } from '../typography';
import styles from './image.module.scss';

export const Image: FC<Img> = ({ url, alt, description }) => (
  <div className={styles.imageContainer}>
    <img className={styles.image} src={url} alt={alt} />

    {description ? (
      <div className={styles.imageCaption}>
        <Typography variant="body" textAlign="left" color="white">
          {description}
        </Typography>
      </div>
    ) : null}
  </div>
);
