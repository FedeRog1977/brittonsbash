import { FC } from 'react'
import { generateUniqueKey, useScreenWidth } from '../../../../scripts'
import { Grid, Spacing, Typography } from '../../basics'
import styles from './table.module.scss'
import { ColumnTableProps, RowTableProps } from './table.types'

export const ColumnTable: FC<ColumnTableProps> = ({
    leftColumn,
    rightColumns,
    scroll,
}) => {
    const { isMobile } = useScreenWidth()

    const content: React.ReactElement = (
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
                            <Typography type="footnote" boldFace inline>
                                {leftColumn.title}
                            </Typography>
                        ) : (
                            <Typography type="footnote">
                                <>&nbsp;</>
                            </Typography>
                        )}
                        {leftColumn.entries?.map((entry, index) => {
                            if (entry)
                                return (
                                    <Spacing mT={isMobile ? 3.75 : 7.5}>
                                        <Typography
                                            key={generateUniqueKey(index)}
                                            type="footnote"
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
                            <Typography type="footnote" boldFace inline>
                                {title}
                            </Typography>
                            {entries?.map((entry, index) => {
                                if (entry)
                                    return (
                                        <Spacing mT={isMobile ? 3.75 : 7.5}>
                                            <Typography
                                                key={generateUniqueKey(index)}
                                                type="footnote"
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

export const RowTable: FC<RowTableProps> = ({ titleRow, rows }) => {
    const { isMobile } = useScreenWidth()

    return (
        <div className={styles.table}>
            <Grid alignColumns="auto auto">
                <Grid columnItem={[1, 2]} rowItem={[1, rows.length + 1]}>
                    <div
                        style={{
                            width: 'fit-content',
                            marginRight: '1rem',
                            display: 'inline-block',
                        }}
                    >
                        {titleRow.leftItem != null ? (
                            <Typography type="footnote" boldFace>
                                {titleRow.leftItem}
                            </Typography>
                        ) : (
                            <Typography type="footnote">
                                <>&nbsp;</>
                            </Typography>
                        )}
                    </div>
                </Grid>
                <Grid
                    columnItem={[2, 2]}
                    rowItem={[1, rows.length + 1]}
                    textAlign="right"
                >
                    <div
                        style={{
                            width: 'fit-content',
                            maxWidth: isMobile ? '250px' : '500px',
                            marginLeft: '1rem',
                            display: 'inline-block',
                        }}
                    >
                        <Typography type="footnote" boldFace>
                            {titleRow.rightItem}
                        </Typography>
                    </div>
                </Grid>
                <>
                    {rows?.map(({ leftItem, rightItem }, index) => {
                        if (Boolean(leftItem && rightItem)) {
                            return (
                                <>
                                    <Grid
                                        key={generateUniqueKey(index)}
                                        columnItem={[1, 2]}
                                        rowItem={[index + 2, rows.length + 1]}
                                    >
                                        <div
                                            style={{
                                                width: 'fit-content',
                                                marginRight: '1rem',
                                                display: 'inline-block',
                                            }}
                                        >
                                            <Spacing mT={isMobile ? 3.75 : 7.5}>
                                                <Typography
                                                    type="footnote"
                                                    boldFace
                                                >
                                                    {leftItem}
                                                </Typography>
                                            </Spacing>
                                        </div>
                                    </Grid>
                                    <Grid
                                        columnItem={[2, 2]}
                                        rowItem={[index + 2, rows.length + 1]}
                                        textAlign="right"
                                    >
                                        <div
                                            style={{
                                                width: 'fit-content',
                                                maxWidth: isMobile
                                                    ? '250px'
                                                    : '500px',
                                                marginLeft: '1rem',
                                                display: 'inline-block',
                                            }}
                                        >
                                            <Spacing mT={isMobile ? 3.75 : 7.5}>
                                                <Typography type="footnote">
                                                    {rightItem}
                                                </Typography>
                                            </Spacing>
                                        </div>
                                    </Grid>
                                </>
                            )
                        }

                        return null
                    })}
                </>
            </Grid>
        </div>
    )
}
