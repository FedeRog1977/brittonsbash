import cx from 'classnames'
import styles from './tile.module.scss'
import { toSentenceCase } from '../../../../scripts'
import { Gradient } from '../gradient'
import { TileProps } from './tile.types'
import { Image } from '../image'

export const Tile: React.FC<TileProps> = ({
    type,
    top,
    dense,
    stacked,
    img,
    gradient,
    textAlign,
    children,
    anchor,
}: TileProps) => {
    const classNames = cx(
        ...(textAlign ? [styles[`align${toSentenceCase(textAlign)}`]] : []),
        {
            [styles.clear]: type === 'clear',
            [styles.solid]: type === 'solid',
            [styles[`marginsY${dense ? 'Dense' : ''}`]]: !stacked,
            [styles.top]: top,
            [styles.stacked]: stacked,
        }
    )

    const classNamesText = cx({
        [styles.text]: stacked,
        [styles.marginsX]: stacked,
    })

    const content = (
        <>
            {img && <Image {...img} />}
            {gradient && <Gradient {...gradient} />}
            <div className={classNamesText}>{children}</div>
        </>
    )

    return (
        <div id={anchor} className={classNames}>
            <div className={styles.constrain}>
                {stacked ? (
                    <div className={styles.stacked}>{content}</div>
                ) : (
                    content
                )}
            </div>
        </div>
    )
}
