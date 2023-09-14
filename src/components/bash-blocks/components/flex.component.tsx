import { FlexProps } from '..'
import styles from '../styles/flex.module.scss'

export const Flex: React.FC<FlexProps> = ({ ...props }: FlexProps) => {
    if (props.item) {
        return (
            <div
                className={styles.flexCol}
                style={{
                    textAlign: props.center ? 'center' : 'left',
                    border: '1px solid black',
                }}
            >
                {props.children}
            </div>
        )
    }

    return <div className={styles.flexRow}>{props.children}</div>
}
