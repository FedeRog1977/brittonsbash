import { TileProps } from '..'
import cx from 'classnames'
import styles from '../styles/tile.module.scss'

export const Tile: React.FC<TileProps> = ({ ...props }: TileProps) => {
    const classNames = cx(
        props.type === 'clear' && styles.clear,
        props.type === 'solid' && styles.solid,
        props.top && styles.top,
        props.dense && styles.dense,
        props.outline && styles.outline,
        props.noShadow && styles.noShadow
    )

    return (
        <div
            className={classNames}
            style={{
                textAlign: props.textAlign,
            }}
        >
            {props.children}
        </div>
    )
}
