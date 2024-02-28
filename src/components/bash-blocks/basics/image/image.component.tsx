import { ImageProps } from '../../reference'
import styles from './image.module.scss'

export const Image: React.FC<ImageProps> = ({
    url,
    alt,
    description,
}: ImageProps) => <img className={styles.image} src={url} alt={alt} />
