import { Gradient, TileProps } from '../..'
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
            [styles.contain]: !props.stacked,
            [styles.top]: props.top,
            [styles.stacked]: props.stacked,
            [styles.outline]: props.outline,
            [styles.margins]: props.margins,
        }
    )

    const classNamesStack = cx({ [styles.stacked]: props.stacked })

    const classNamesImage = cx({ [styles.image]: props.img })

    const classNamesText = cx({
        [styles.text]: props.stacked,
        [styles.contain]: props.stacked,
    })

    const content = (
        <>
            {props.img && <img className={classNamesImage} src={props.img} />}
            {props.gradient && (
                <Gradient
                    value={props.gradient.value}
                    opacity={props.gradient.opacity}
                    start={props.gradient.start}
                    fill={props.gradient.fill}
                    hide={props.gradient.hide}
                />
            )}
            <div className={classNamesText}>{props.children}</div>
        </>
    )

    return (
        <div id={props.anchor} className={classNames}>
            {props.stacked ? (
                <div className={classNamesStack}>{content}</div>
            ) : (
                content
            )}
        </div>
    )
}
