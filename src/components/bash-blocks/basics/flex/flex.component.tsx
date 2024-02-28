import styles from './flex.module.scss'
import { FlexProps } from './flex.types'

export const Flex: React.FC<FlexProps> = ({ children, item }: FlexProps) => {
    if (item) {
        return <div className={styles.flexCol}>{children}</div>
    }

    return <div className={styles.flexRow}>{children}</div>
}
