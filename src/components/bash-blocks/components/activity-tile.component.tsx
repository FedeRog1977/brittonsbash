import { ActivityTileProps, ActivityTileTempProps } from '..'
import { useScreenWidth } from '../../../scripts'
import { Spacing, Typography } from '..'

export const ActivityTile: React.FC<ActivityTileProps> = ({
    ...props
}: ActivityTileProps) => {
    const { isMobile } = useScreenWidth()

    return (
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
            <Spacing position="absolute">
                <Typography
                    type="footnote"
                    content={props.title.leftItem}
                    boldFace
                    inline
                />
            </Spacing>
            <Spacing textAlign="right" position="relative">
                {Array.isArray(props.title.rightItems) ? (
                    <>
                        {props.title.rightItems.map(
                            (
                                item: ActivityTileProps['title']['rightItems'],
                                index: number
                            ) => (
                                <div
                                    key={index}
                                    style={{
                                        width: isMobile
                                            ? '75px'
                                            : // : 'fit-content',
                                              '100px',
                                        // marginLeft: '1rem',
                                        display: 'inline-block',
                                    }}
                                >
                                    <Typography
                                        type="footnote"
                                        content={item as React.ReactElement}
                                        boldFace
                                        inline
                                    />
                                </div>
                            )
                        )}
                    </>
                ) : (
                    <Typography
                        type="footnote"
                        content={props.title.rightItems}
                        boldFace
                        inline
                    />
                )}
            </Spacing>
            {props.entries.map(({ leftItem, rightItems, index }: any) => (
                <>
                    {Boolean(leftItem && rightItems) && (
                        <div key={index}>
                            <Spacing mT={isMobile ? 3.75 : 7.5} />
                            <Spacing position="absolute">
                                <Typography
                                    type="footnote"
                                    content={leftItem}
                                    boldFace
                                    inline
                                />
                            </Spacing>
                            <Spacing
                                mL={Array.isArray(rightItems) ? 0 : 100}
                                textAlign="right"
                                position="relative"
                            >
                                {Array.isArray(rightItems) ? (
                                    <>
                                        {rightItems.map(
                                            (
                                                item: ActivityTileProps['entries'][0]['rightItems'],
                                                index: number
                                            ) => (
                                                <div
                                                    key={index}
                                                    style={{
                                                        width: isMobile
                                                            ? '75px'
                                                            : // : 'fit-content',
                                                              '100px',
                                                        // marginLeft: '1rem',
                                                        display: 'inline-block',
                                                    }}
                                                >
                                                    <Typography
                                                        type="footnote"
                                                        content={item}
                                                        inline
                                                    />
                                                </div>
                                            )
                                        )}
                                    </>
                                ) : (
                                    <Typography
                                        type="footnote"
                                        content={rightItems}
                                        inline
                                    />
                                )}
                            </Spacing>
                        </div>
                    )}
                </>
            ))}
        </Spacing>
    )
}

export const ActivityTileTemp: React.FC<ActivityTileTempProps> = ({
    ...props
}: ActivityTileTempProps) => {
    const { isMobile } = useScreenWidth()

    return (
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
            <Spacing position="absolute">
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
                    <>
                        {props.leftColumn.entries?.map(
                            (
                                entry: ActivityTileTempProps['leftColumn']['entries'][0],
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
                    </>
                </div>
            </Spacing>
            <Spacing textAlign="right" position="relative">
                {props.rightColumns.map(({ index, title, entries }: any) => (
                    <div
                        key={index}
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
                        <>
                            {entries?.map(
                                (
                                    entry: ActivityTileTempProps['rightColumns'][0]['entries'][0],
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
                        </>
                    </div>
                ))}
            </Spacing>
        </Spacing>
    )
}
