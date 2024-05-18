import { FC } from 'react'
import styles from './flex.module.scss'
import { FlexProps } from './flex.types'

export const Flex: FC<FlexProps> = ({ children, item }) => {
    if (item) {
        return <div className={styles.flexCol}>{children}</div>
    }

    return <div className={styles.flexRow}>{children}</div>
}
