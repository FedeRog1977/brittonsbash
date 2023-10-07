import { FlexProps } from '..'
import styles from './flex.module.scss'

export const Flex: React.FC<FlexProps> = ({ ...props }: FlexProps) => {
    if (props.item) {
        return <div className={styles.flexCol}>{props.children}</div>
    }

    return <div className={styles.flexRow}>{props.children}</div>
}
