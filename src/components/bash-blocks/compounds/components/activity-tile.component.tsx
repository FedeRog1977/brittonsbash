import { FC } from 'react'
import { ActivityTileProps } from '../../../bash-blocks'
import { useScreenWidth } from '../../../../scripts'
import { Spacing, Typography } from '../..'

export const ActivityTile: FC<ActivityTileProps> = ({
    title,
    entries,
}: any) => {
    const { isMobile } = useScreenWidth()

    return (
        <Spacing
            mL={isMobile ? 0 : 70}
            mR={isMobile ? 0 : 70}
            mT={isMobile ? 7.5 : 15}
            mB={isMobile ? 7.5 : 15}
            pL={isMobile ? 7.5 : 150}
            pR={isMobile ? 7.5 : 150}
            pT={isMobile ? 7.5 : 15}
            pB={isMobile ? 7.5 : 15}
            backgroundColor="var(--lighter-grey)"
            borderRadius={isMobile ? 'none' : 'var(--corners-small)'}
        >
            <Spacing position="absolute">
                <Typography
                    type="body"
                    content={title.leftItem}
                    boldFace={isMobile ? false : true}
                    inline
                />
            </Spacing>
            <Spacing textAlign="right" position="relative">
                {Array.isArray(title.rightItems) ? (
                    <>
                        {title.rightItems.map((item: string, index: number) => (
                            <div
                                style={{
                                    width: isMobile ? '75px' : '100px',
                                    display: 'inline-block',
                                    // border: '1px solid black',
                                }}
                            >
                                <Typography
                                    key={index}
                                    type="body"
                                    content={item}
                                    boldFace={isMobile ? false : true}
                                    inline
                                />
                            </div>
                        ))}
                    </>
                ) : (
                    <Typography
                        type="body"
                        content={title.rightItems}
                        boldFace={isMobile ? false : true}
                        inline
                    />
                )}
            </Spacing>
            {entries.map(({ leftItem, rightItems, index }: any) => (
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
                                            (item: string, index: number) => (
                                                <div
                                                    style={{
                                                        width: isMobile
                                                            ? '75px'
                                                            : '100px',
                                                        display: 'inline-block',
                                                        // border: '1px solid black',
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
