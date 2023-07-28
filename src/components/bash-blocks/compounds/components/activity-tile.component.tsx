import { ActivityTileProps } from '../../../bash-blocks'
import { useScreenWidth } from '../../../../scripts'
import { Spacing, Typography } from '../..'

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
            pL={isMobile ? 15 : 150}
            pR={isMobile ? 15 : 150}
            pT={isMobile ? 7.5 : 15}
            pB={isMobile ? 7.5 : 15}
            backgroundColor="var(--lighter-grey)"
            borderRadius={isMobile ? 'none' : 'var(--corners-small)'}
        >
            <Spacing position="absolute">
                <Typography
                    type="body"
                    content={props.title.leftItem}
                    boldFace={isMobile ? false : true}
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
                                    style={{
                                        width: isMobile ? '75px' : '100px',
                                        display: 'inline-block',
                                    }}
                                >
                                    <Typography
                                        key={index}
                                        type="body"
                                        content={item as React.ReactElement}
                                        boldFace={isMobile ? false : true}
                                        inline
                                    />
                                </div>
                            )
                        )}
                    </>
                ) : (
                    <Typography
                        type="body"
                        content={props.title.rightItems}
                        boldFace={isMobile ? false : true}
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
                                    type="body"
                                    content={leftItem}
                                    boldFace={isMobile ? false : true}
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
                                                    style={{
                                                        width: isMobile
                                                            ? '75px'
                                                            : '100px',
                                                        display: 'inline-block',
                                                    }}
                                                >
                                                    <Typography
                                                        key={index}
                                                        type={
                                                            isMobile
                                                                ? 'body-light'
                                                                : 'body'
                                                        }
                                                        content={item}
                                                        inline
                                                    />
                                                </div>
                                            )
                                        )}
                                    </>
                                ) : (
                                    <Typography
                                        type={isMobile ? 'body-light' : 'body'}
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
