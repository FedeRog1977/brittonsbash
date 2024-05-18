import { toUpperCase } from '../../../../scripts'
import styles from './background.module.scss'
import cx from 'classnames'
import { BackgroundProps } from './background.types'
import { FC } from 'react'

export const Background: FC<BackgroundProps> = ({ type = 'logo', content }) => {
    const classNamesText = cx(styles.text, styles[`text${toUpperCase(type)}`])

    return (
        <div className={styles.background}>
            <div className={classNamesText}>{content}</div>
        </div>
    )
}
