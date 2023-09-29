import { ColumnTableProps, RowTableProps, Grid } from '..'
import { useScreenWidth } from '../../../scripts'
import { Spacing, Typography } from '..'

export const ColumnTable: React.FC<ColumnTableProps> = ({
    ...props
}: ColumnTableProps) => {
    const { isMobile } = useScreenWidth()

    const content: React.ReactElement = (
        <Spacing
            pL={isMobile ? 15 : 70}
            pR={isMobile ? 15 : 70}
            pT={isMobile ? 7.5 : 15}
            pB={isMobile ? 7.5 : 15}
            backgroundColor="var(--lighter-grey)"
            borderRadius={isMobile ? 'none' : 'var(--corners-small)'}
        >
            <Grid align="auto auto">
                <Grid columnItem={[1, 2]}>
                    <div
                        style={{
                            width: 'fit-content',
                            marginRight: '1rem',
                            display: 'inline-block',
                        }}
                    >
                        {props.leftColumn.title != null ? (
                            <Typography
                                type="footnote"
                                content={props.leftColumn.title}
                                boldFace
                                inline
                            />
                        ) : (
                            <Typography type="footnote" content={<>&nbsp;</>} />
                        )}
                        {props.leftColumn.entries?.map(
                            (
                                entry: ColumnTableProps['leftColumn']['entries'][0],
                                index
                            ) => {
                                if (entry)
                                    return (
                                        <Typography
                                            key={index}
                                            type="footnote"
                                            content={entry}
                                            boldFace
                                            mT={isMobile ? 3.75 : 7.5}
                                        />
                                    )

                                return null
                            }
                        )}
                    </div>
                </Grid>
                <Grid columnItem={[2, 2]} textAlign="right">
                    {props.rightColumns.map(
                        ({
                            title,
                            entries,
                        }: ColumnTableProps['rightColumns'][0]) => (
                            <div
                                key={title as string}
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
                                {entries?.map(
                                    (
                                        entry: ColumnTableProps['rightColumns'][0]['entries'][0],
                                        index
                                    ) => {
                                        if (entry)
                                            return (
                                                <Typography
                                                    key={index}
                                                    type="footnote"
                                                    content={entry}
                                                    mT={isMobile ? 3.75 : 7.5}
                                                />
                                            )

                                        return null
                                    }
                                )}
                            </div>
                        )
                    )}
                </Grid>
            </Grid>
        </Spacing>
    )

    if (props.scroll)
        return (
            <div style={{ maxHeight: '300px', overflowY: 'scroll' }}>
                {content}
            </div>
        )

    if (isMobile) return <div style={{ overflowX: 'scroll' }}>{content}</div>

    return content
}

export const RowTable: React.FC<RowTableProps> = ({
    ...props
}: RowTableProps) => {
    const { isMobile } = useScreenWidth()

    const content: React.ReactElement = (
        <Spacing
            pL={isMobile ? 15 : 70}
            pR={isMobile ? 15 : 70}
            pT={isMobile ? 7.5 : 15}
            pB={isMobile ? 7.5 : 15}
            backgroundColor="var(--lighter-grey)"
            borderRadius={isMobile ? 'none' : 'var(--corners-small)'}
        >
            <Grid align="auto auto">
                <Grid columnItem={[1, 2]} rowItem={[1, props.rows.length + 1]}>
                    <div
                        style={{
                            width: 'fit-content',
                            marginRight: '1rem',
                            display: 'inline-block',
                        }}
                    >
                        {props.titleRow.leftItem != null ? (
                            <Typography
                                type="footnote"
                                content={props.titleRow.leftItem}
                                boldFace
                            />
                        ) : (
                            <Typography type="footnote" content={<>&nbsp;</>} />
                        )}
                    </div>
                </Grid>
                <Grid
                    columnItem={[2, 2]}
                    rowItem={[1, props.rows.length + 1]}
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
                            content={props.titleRow.rightItem}
                            boldFace
                        />
                    </div>
                </Grid>
                <>
                    {props.rows?.map(
                        (
                            { leftItem, rightItem }: RowTableProps['rows'][0],
                            index
                        ) => {
                            if (Boolean(leftItem && rightItem)) {
                                return (
                                    <>
                                        <Grid
                                            columnItem={[1, 2]}
                                            rowItem={[
                                                index + 2,
                                                props.rows.length + 1,
                                            ]}
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
                                            rowItem={[
                                                index + 2,
                                                props.rows.length + 1,
                                            ]}
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
                        }
                    )}
                </>
            </Grid>
        </Spacing>
    )

    if (isMobile) return <div style={{ overflowX: 'scroll' }}>{content}</div>

    return content
}
