import { FC } from 'react'
import '../styles/button.styles.css'
import { ButtonProps, Spacing, Typography } from '..'
import { useScreenWidth } from '../../../../scripts'

export const Button: FC<ButtonProps> = ({
    type,
    func,
    value,
    content,
    subContent,
    textAlign,
    dots,
}: any) => {
    const { isMobile } = useScreenWidth()

    return (
        <button
            className={type}
            onClick={func}
            value={value}
            style={{
                textAlign: textAlign ? textAlign : 'center',
            }}
        >
            <Spacing mX={10} mY={20}>
                {Boolean(!isMobile && dots) ? (
                    <div
                        style={{
                            position: 'relative',
                            textAlign: 'center',
                            display: isMobile ? undefined : 'flex',
                            justifyContent: isMobile ? undefined : 'center',
                            alignItems: isMobile ? undefined : 'center',
                        }}
                    >
                        {subContent && (
                            <div
                                style={{
                                    float:
                                        textAlign === 'right'
                                            ? isMobile
                                                ? 'none'
                                                : 'left'
                                            : 'none',
                                }}
                            >
                                <Typography
                                    type="h5"
                                    color="var(--medium-grey)"
                                    content={
                                        <>
                                            {subContent}
                                            &nbsp;
                                        </>
                                    }
                                />
                            </div>
                        )}
                        <div
                            style={{
                                fontSize: '20px',
                                color: 'var(--darker-grey-50)',
                                position: 'absolute',
                                float: 'left',
                                zIndex: 10,
                                top: '-3px',
                                left: '2px',
                            }}
                        >
                            &#x2022;
                        </div>
                        <div
                            style={{
                                fontSize: '20px',
                                color: 'var(--darker-grey-50)',
                                position: 'absolute',
                                float: 'right',
                                zIndex: 10,
                                top: '-3px',
                                right: '2px',
                            }}
                        >
                            &#x2022;
                        </div>
                        <div
                            style={{
                                fontSize: '20px',
                                color: 'var(--darker-grey-50)',
                                position: 'absolute',
                                float: 'left',
                                zIndex: 10,
                                bottom: '-3px',
                                left: '2px',
                            }}
                        >
                            &#x2022;
                        </div>
                        <div
                            style={{
                                fontSize: '20px',
                                color: 'var(--darker-grey-50)',
                                position: 'absolute',
                                float: 'right',
                                zIndex: 10,
                                bottom: '-3px',
                                right: '2px',
                            }}
                        >
                            &#x2022;
                        </div>
                        {content}
                    </div>
                ) : (
                    <div>
                        {subContent && (
                            <div
                                style={{
                                    float:
                                        textAlign === 'right'
                                            ? isMobile
                                                ? 'none'
                                                : 'left'
                                            : 'none',
                                }}
                            >
                                <Typography
                                    type="h5"
                                    color="var(--medium-grey)"
                                    content={<>{subContent}</>}
                                />
                            </div>
                        )}
                        {content}
                    </div>
                )}
            </Spacing>
        </button>
    )
}
