import cx from 'classnames'
import styles from './tile.module.scss'
import { toUpperCase } from '../../../../scripts'
import { Gradient } from '../gradient'
import { Image } from '../image'
import { FC } from 'react'
import { Img } from '../../reference'
import { GradientProps } from '../gradient'

export type TileProps = {
    type: 'clear' | 'solid'
    gap?: boolean
    dense?: boolean
    stacked?: boolean
    img?: Img
    gradient?: GradientProps
    children: React.ReactNode
}

export const Tile: FC<TileProps> = ({
    type,
    gap,
    dense,
    stacked,
    img,
    gradient,
    children,
}) => {
    const classNames = cx(
        styles.tile,
        [styles[`tile${toUpperCase(type)}`]],
        [styles[`tile${gap ? 'Gap' : 'NoGap'}`]],
        {
            [styles.marginsXDense]: !stacked,
            [styles[`marginsY${dense ? 'Dense' : 'Regular'}`]]: !stacked,
        }
    )

    const classNamesContainer = cx(styles.constrain, {
        [styles.stacked]: stacked,
    })

    const classNamesText = cx({
        [styles.text]: stacked,
        [styles.marginsXRegular]: stacked,
    })

    return (
        <div className={classNames}>
            <div className={classNamesContainer}>
                {img && <Image {...img} />}
                {gradient && <Gradient {...gradient} />}
                <div className={classNamesText}>{children}</div>
            </div>
        </div>
    )
}
