import { GridProps } from '..'
import styles from '../styles/grid.module.scss'

export const Grid: React.FC<GridProps> = ({ ...props }: GridProps) => {
    if (props.columnItem || props.rowItem) {
        return (
            <div
                className={styles.gridItem}
                style={{
                    gridColumn: `${props.columnItem ? [0] : undefined} / ${
                        props.columnItem ? [1] : undefined
                    }`,
                    gridRow: `${props.rowItem ? [0] : undefined} / ${
                        props.rowItem ? [1] : undefined
                    }`,
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
