import { ActivityTileProps } from '..'
import { useScreenWidth } from '../../../scripts'
import { Spacing, Typography } from '..'

export const ActivityTile: React.FC<ActivityTileProps> = ({
    ...props
}: ActivityTileProps) => {
    const { isMobile } = useScreenWidth()

    const content: React.ReactElement = (
        <Spacing
            mL={isMobile ? 0 : 70}
            mR={isMobile ? 0 : 70}
            mT={isMobile ? 7.5 : 15}
            mB={isMobile ? 7.5 : 15}
            pL={isMobile ? 15 : 70}
            pR={isMobile ? 15 : 70}
            pT={isMobile ? 7.5 : 15}
            pB={isMobile ? 7.5 : 15}
            backgroundColor="var(--lighter-grey)"
            borderRadius={isMobile ? 'none' : 'var(--corners-small)'}
        >
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto auto',
                    border: '1px solid black',
                }}
            >
                <div
                    style={{
                        gridColumn: '1/2',
                        border: '1px solid black',
                    }}
                >
                    <div
                        style={{
                            width: 'fit-content',
                            marginRight: '1rem',
                            display: 'inline-block',
                            border: '1px solid black',
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
                                entry: ActivityTileProps['leftColumn']['entries'][0],
                                index: number
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
                </div>
                <div
                    style={{
                        gridColumn: '2/2',
                        textAlign: 'right',
                        border: '1px solid black',
                    }}
                >
                    {props.rightColumns.map(
                        ({ index, title, entries }: any) => (
                            <div
                                key={index}
                                style={{
                                    width: 'fit-content',
                                    maxWidth: isMobile ? '250px' : '500px',
                                    marginLeft: '1rem',
                                    display: 'inline-block',
                                    border: '1px solid black',
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
                                        entry: ActivityTileProps['rightColumns'][0]['entries'][0],
                                        index: number
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
                </div>
            </div>
        </Spacing>
    )

    if (isMobile) return <div style={{ overflowX: 'scroll' }}>{content}</div>

    return content
}
