import { GridProps } from '..'
import styles from '../styles/grid.module.scss'

export const Grid: React.FC<GridProps> = ({ ...props }: GridProps) => {
    if (props.item) {
        return (
            <div
                className={styles.gridItem}
                style={{
                    gridColumn: `${props.item[0]} / ${props.item[1]}`,
                    textAlign: props.textAlign ? props.textAlign : undefined,
                }}
            >
                {props.children}
            </div>
        )
    }

    return (
        <div
            className={styles.gridContainer}
            style={{
                gridTemplateColumns: props.align,
            }}
        >
            {props.children}
        </div>
    )
}
