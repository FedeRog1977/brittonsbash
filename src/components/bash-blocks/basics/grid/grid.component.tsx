import { FC } from 'react'
import { ItemsAdv, Items, Align } from '../../reference'

// Reminder: https://developer.mozilla.org/en-US/docs/Web/CSS/grid
// Reminder: https://css-tricks.com/snippets/css/complete-guide-grid/

export type GridProps = {
    alignColumns?: string
    alignRows?: string
    columnGap?: number
    rowGap?: number
    justifyContent?: ItemsAdv
    alignContent?: ItemsAdv
    justifyItems?: Items
    alignItems?: Items

    columnItem?: number[]
    rowItem?: number[]
    textAlign?: Align
    children: React.ReactNode
}

export const Grid: FC<GridProps> = ({
    alignColumns,
    alignRows,
    columnGap,
    rowGap,
    justifyContent,
    alignContent,
    justifyItems,
    alignItems,
    columnItem,
    rowItem,
    textAlign,
    children,
}) => {
    if (columnItem || rowItem) {
        return (
            <div
                style={{
                    gridColumn: `${columnItem ? [0] : undefined} / ${
                        columnItem ? [1] : undefined
                    }`,
                    gridRow: `${rowItem ? [0] : undefined} / ${
                        rowItem ? [1] : undefined
                    }`,
                    textAlign: textAlign ? textAlign : undefined,
                }}
            >
                {children}
            </div>
        )
    }

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: alignColumns,
                gridTemplateRows: alignRows,
                columnGap: `${columnGap}px`,
                rowGap: `${rowGap}px`,
                justifyContent: justifyContent, // Grid x-axis
                alignContent: alignContent, // Grid y-axis
                justifyItems: justifyItems, // Item x-axis
                alignItems: alignItems, // Item y-axis
            }}
        >
            {children}
        </div>
    )
}
