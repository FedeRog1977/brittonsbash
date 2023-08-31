import { TileProps } from '..'
import cx from 'classnames'
import styles from '../styles/tile.module.scss'
import { toSentenceCase } from '../../../scripts'

export const Tile: React.FC<TileProps> = ({ ...props }: TileProps) => {
    const classNames = cx(
        ...(props.textAlign
            ? [styles[`align${toSentenceCase(props.textAlign)}`]]
            : []),
        {
            [styles.clear]: props.type === 'clear',
            [styles.solid]: props.type === 'solid',
            [styles.top]: props.top,
            [styles.dense]: props.dense,
            [styles.outline]: props.outline,
            [styles.noShadow]: props.noShadow,
        }
    )

    return <div className={classNames}>{props.children}</div>
}
