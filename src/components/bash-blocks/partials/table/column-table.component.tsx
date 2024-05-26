import { FC, ReactElement } from 'react'
import { generateUniqueKey, useScreenWidth } from '../../../../scripts'
import { Grid, Spacing, Typography } from '../../basics'
import styles from './table.module.scss'
import { Column } from './types/column.type'

export type ColumnTableProps = {
    leftColumn: Column
    rightColumns: Column[]
    scroll?: boolean
}

export const ColumnTable: FC<ColumnTableProps> = ({
    leftColumn,
    rightColumns,
    scroll,
}) => {
    const { isMobile } = useScreenWidth()

    const content: ReactElement = (
        <div className={styles.table}>
            <Grid alignColumns="auto auto">
                <Grid columnItem={[1, 2]}>
                    <div
                        style={{
                            width: 'fit-content',
                            marginRight: '1rem',
                            display: 'inline-block',
                        }}
                    >
                        {leftColumn.title != null ? (
                            <Typography variant="footnote" boldFace inline>
                                {leftColumn.title}
                            </Typography>
                        ) : (
                            <Typography variant="footnote">
                                <>&nbsp;</>
                            </Typography>
                        )}
                        {leftColumn.entries?.map((entry, index) => {
                            if (entry)
                                return (
                                    <Spacing mT={isMobile ? 3.75 : 7.5}>
                                        <Typography
                                            key={generateUniqueKey(index)}
                                            variant="footnote"
                                            boldFace
                                        >
                                            {entry}
                                        </Typography>
                                    </Spacing>
                                )

                            return null
                        })}
                    </div>
                </Grid>
                <Grid columnItem={[2, 2]} textAlign="right">
                    {rightColumns.map(({ title, entries }, index) => (
                        <div
                            key={generateUniqueKey(index)}
                            style={{
                                width: 'fit-content',
                                maxWidth: isMobile ? '250px' : '500px',
                                marginLeft: '1rem',
                                display: 'inline-block',
                            }}
                        >
                            <Typography variant="footnote" boldFace inline>
                                {title}
                            </Typography>
                            {entries?.map((entry, index) => {
                                if (entry)
                                    return (
                                        <Spacing mT={isMobile ? 3.75 : 7.5}>
                                            <Typography
                                                key={generateUniqueKey(index)}
                                                variant="footnote"
                                            >
                                                {entry}
                                            </Typography>
                                        </Spacing>
                                    )

                                return null
                            })}
                        </div>
                    ))}
                </Grid>
            </Grid>
        </div>
    )

    if (scroll)
        return (
            <div style={{ maxHeight: '300px', overflowY: 'scroll' }}>
                {content}
            </div>
        )

    if (isMobile) return <div className={styles.scrollX}>{content}</div>

    return content
}
