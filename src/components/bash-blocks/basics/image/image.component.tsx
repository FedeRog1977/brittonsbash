import { FC } from 'react'
import { ImageProps } from '../../reference'
import { Typography } from '../typography'
import styles from './image.module.scss'

export const Image: FC<ImageProps> = ({ url, alt, description }) => (
    <div className={styles.imageContainer}>
        <img className={styles.image} src={url} alt={alt} />
        {description && (
            <div className={styles.imageCaption}>
                <Typography type="body" textAlign="left" color="white">
                    {description}
                </Typography>
            </div>
        )}
    </div>
)
