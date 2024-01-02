import { ImageProps } from '../../reference'
import styles from './image.module.scss'

export const Image: React.FC<ImageProps> = ({ ...props }: ImageProps) => (
    <img className={styles.image} src={props.url} alt={props.alt} />
)
