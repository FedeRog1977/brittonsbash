import { GridProps } from '.'

// Reminder: https://css-tricks.com/snippets/css/complete-guide-grid/

export const Grid: React.FC<GridProps> = ({ ...props }: GridProps) => {
    if (props.columnItem || props.rowItem) {
        return (
            <div
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
            style={{
                display: 'grid',
                gridTemplateColumns: props.alignColumns,
                gridTemplateRows: props.alignRows,
                columnGap: `${props.columnGap}px`,
                rowGap: `${props.rowGap}px`,
                justifyContent: props.justifyContent, // Grid x-axis
                alignContent: props.alignContent, // Grid y-axis
                justifyItems: props.justifyItems, // Item x-axis
                alignItems: props.alignItems, // Item y-axis
            }}
        >
            {props.children}
        </div>
    )
}
