import { generateUniqueKey, useScreenWidth } from '../../../../scripts'
import { Grid, Typography } from '../../basics'
import styles from './table.module.scss'
import { ColumnTableProps, RowTableProps } from './table.types'

export const ColumnTable: React.FC<ColumnTableProps> = ({
    leftColumn,
    rightColumns,
    scroll,
}: ColumnTableProps) => {
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
                            <Typography
                                type="footnote"
                                content={leftColumn.title}
                                boldFace
                                inline
                            />
                        ) : (
                            <Typography type="footnote" content={<>&nbsp;</>} />
                        )}
                        {leftColumn.entries?.map((entry, index) => {
                            if (entry)
                                return (
                                    <Typography
                                        key={generateUniqueKey(index)}
                                        type="footnote"
                                        content={entry}
                                        boldFace
                                        mT={isMobile ? 3.75 : 7.5}
                                    />
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
                            <Typography
                                type="footnote"
                                content={title}
                                boldFace
                                inline
                            />
                            {entries?.map((entry, index) => {
                                if (entry)
                                    return (
                                        <Typography
                                            key={generateUniqueKey(index)}
                                            type="footnote"
                                            content={entry}
                                            mT={isMobile ? 3.75 : 7.5}
                                        />
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

export const RowTable: React.FC<RowTableProps> = ({
    titleRow,
    rows,
}: RowTableProps) => {
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
                            <Typography
                                type="footnote"
                                content={titleRow.leftItem}
                                boldFace
                            />
                        ) : (
                            <Typography type="footnote" content={<>&nbsp;</>} />
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
                        <Typography
                            type="footnote"
                            content={titleRow.rightItem}
                            boldFace
                        />
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
                                            <Typography
                                                type="footnote"
                                                content={leftItem}
                                                boldFace
                                                mT={isMobile ? 3.75 : 7.5}
                                            />
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
                                            <Typography
                                                type="footnote"
                                                content={rightItem}
                                                mT={isMobile ? 3.75 : 7.5}
                                            />
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
