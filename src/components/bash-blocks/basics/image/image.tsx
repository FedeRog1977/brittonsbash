import { FC } from 'react';
import { Img } from '../../reference/index.js';
import { Typography } from '../typography/index.js';
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
