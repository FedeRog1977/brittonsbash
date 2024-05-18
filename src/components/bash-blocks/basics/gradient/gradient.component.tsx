import cx from 'classnames'
import { FC } from 'react'
import { toUpperCase } from '../../../../scripts'
import styles from './gradient.module.scss'
import { GradientProps } from './gradient.types'

export const Gradient: FC<GradientProps> = ({
    value = 'dark',
    opacity = 60,
    start = 'left',
    fill = false,
    hide = false,
}) => {
    const classNames = cx(styles.gradient, {
        [styles[`${value}${opacity}${toUpperCase(start)}Align`]]: !fill,
        [styles[`${value}Fill${opacity}`]]: fill,
        [styles.hide]: hide,
    })

    return <div className={classNames} />
}
