import { Gradient, TileProps, Image } from '../..'
import cx from 'classnames'
import styles from './tile.module.scss'
import { toSentenceCase } from '../../../../scripts'

export const Tile: React.FC<TileProps> = ({ ...props }: TileProps) => {
    const classNames = cx(
        ...(props.textAlign
            ? [styles[`align${toSentenceCase(props.textAlign)}`]]
            : []),
        {
            [styles.clear]: props.type === 'clear',
            [styles.solid]: props.type === 'solid',
            [styles[`contain${props.dense ? 'Dense' : ''}`]]: !props.stacked,
            [styles.top]: props.top,
            [styles.stacked]: props.stacked,
            [styles.outline]: props.outline,
            [styles.margins]: props.margins,
        }
    )

    const classNamesText = cx({
        [styles.text]: props.stacked,
        [styles.contain]: props.stacked,
    })

    const content = (
        <>
            {props.img && <Image {...props.img} />}
            {props.gradient && <Gradient {...props.gradient} />}
            <div className={classNamesText}>{props.children}</div>
        </>
    )

    return (
        <div id={props.anchor} className={classNames}>
            {props.stacked ? (
                <div className={styles.stacked}>{content}</div>
            ) : (
                content
            )}
        </div>
    )
}
