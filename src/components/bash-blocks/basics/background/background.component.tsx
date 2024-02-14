import { toUpperCase } from '../../../../scripts'
import styles from './background.module.scss'
import cx from 'classnames'
import { BackgroundProps } from './background.types'

export const Background: React.FC<BackgroundProps> = ({
    type = 'logo',
    content,
}: BackgroundProps) => {
    const classNamesText = cx(styles.text, styles[`text${toUpperCase(type)}`])

    return (
        <div className={styles.background}>
            <div className={classNamesText}>{content}</div>
        </div>
    )
}
