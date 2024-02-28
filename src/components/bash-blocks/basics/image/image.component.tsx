import { ImageProps } from '../../reference'
import { Typography } from '../typography'
import styles from './image.module.scss'

export const Image: React.FC<ImageProps> = ({
    url,
    alt,
    description,
}: ImageProps) => (
    <div className={styles.imageContainer}>
        <img className={styles.image} src={url} alt={alt} />
        {description && (
            <div className={styles.imageCaption}>
                <Typography
                    type="body"
                    content={description}
                    textAlign="left"
                    color="white"
                />
            </div>
        )}
    </div>
)
