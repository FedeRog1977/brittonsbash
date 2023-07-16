import { FC } from 'react'
import '../styles/button.styles.css'
import { ButtonProps, Spacing, Typography } from '..'
import { useScreenWidth } from '../../../../scripts'

export const Button: FC<ButtonProps> = ({ ...props }: ButtonProps) => {
    const { isMobile } = useScreenWidth()

    return (
        <button
            className={props.type}
            onClick={props.func}
            value={props.value}
            style={{
                textAlign: props.textAlign ? props.textAlign : 'center',
            }}
        >
            <Spacing
                mX={Boolean(!isMobile && props.dots) ? 20 : 0}
                mY={Boolean(!isMobile && props.dots) ? 10 : 0}
            >
                {Boolean(!isMobile && props.dots) ? (
                    <div
                        style={{
                            position: 'relative',
                            textAlign: 'center',
                            display: isMobile ? undefined : 'flex',
                            justifyContent: isMobile ? undefined : 'center',
                            alignItems: isMobile ? undefined : 'center',
                        }}
                    >
                        {props.subContent && (
                            <div
                                style={{
                                    float:
                                        props.textAlign === 'right'
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
                                            {props.subContent}
                                            &nbsp;
                                        </>
                                    }
                                />
                            </div>
                        )}
                        <div
                            style={{
                                fontSize: '20px',
                                color: 'var(--light-grey)',
                                position: 'absolute',
                                float: 'left',
                                zIndex: 10,
                                top: '-5px',
                                left: '-7.5px',
                            }}
                        >
                            &#x2022;
                        </div>
                        <div
                            style={{
                                fontSize: '20px',
                                color: 'var(--light-grey)',
                                position: 'absolute',
                                float: 'right',
                                zIndex: 10,
                                top: '-5px',
                                right: '-7.5px',
                            }}
                        >
                            &#x2022;
                        </div>
                        <div
                            style={{
                                fontSize: '20px',
                                color: 'var(--light-grey)',
                                position: 'absolute',
                                float: 'left',
                                zIndex: 10,
                                bottom: '-5px',
                                left: '-7.5px',
                            }}
                        >
                            &#x2022;
                        </div>
                        <div
                            style={{
                                fontSize: '20px',
                                color: 'var(--light-grey)',
                                position: 'absolute',
                                float: 'right',
                                zIndex: 10,
                                bottom: '-5px',
                                right: '-7.5px',
                            }}
                        >
                            &#x2022;
                        </div>
                        {props.content}
                    </div>
                ) : (
                    <div>
                        {props.subContent && (
                            <div
                                style={{
                                    float:
                                        props.textAlign === 'right'
                                            ? isMobile
                                                ? 'none'
                                                : 'left'
                                            : 'none',
                                }}
                            >
                                <Typography
                                    type="h5"
                                    color="var(--medium-grey)"
                                    content={<>{props.subContent}</>}
                                />
                            </div>
                        )}
                        {props.content}
                    </div>
                )}
            </Spacing>
        </button>
    )
}
