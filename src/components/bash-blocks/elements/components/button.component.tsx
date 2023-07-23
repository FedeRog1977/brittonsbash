import { FC } from 'react'
import '../styles/button.styles.css'
import { ButtonProps, Spacing, Typography } from '..'
import { useScreenWidth } from '../../../../scripts'

export const Button: FC<ButtonProps> = ({ ...props }: ButtonProps) => {
    const { isMobile } = useScreenWidth()

    return (
        <button className={props.type} onClick={props.func} value={props.value}>
            <Spacing
                mX={Boolean(!isMobile && props.accents) ? 20 : 0}
                mY={Boolean(!isMobile && props.accents) ? 10 : 0}
            >
                <div
                    style={{
                        position: 'relative',
                        textAlign: props.textAlign ? props.textAlign : 'center',
                        display: isMobile ? undefined : 'flex',
                        justifyContent: isMobile
                            ? undefined
                            : props.textAlign
                            ? props.textAlign
                            : 'center',
                        alignItems: isMobile
                            ? undefined
                            : props.textAlign
                            ? props.textAlign
                            : 'center',
                    }}
                >
                    {Boolean(!isMobile && props.accents) && (
                        <>
                            {/* <div
                                style={{
                                    fontSize: '12.5px',
                                    color: 'var(--lighter-grey)',
                                    position: 'absolute',
                                    float: 'left',
                                    zIndex: 10,
                                    top: '-5px',
                                    left: '-12.5px',
                                }}
                            >
                                &#x25E4;
                            </div>
                            <div
                                style={{
                                    fontSize: '12.5px',
                                    color: 'var(--lighter-grey)',
                                    position: 'absolute',
                                    float: 'right',
                                    zIndex: 10,
                                    top: '-5px',
                                    right: '-12.5px',
                                }}
                            >
                                &#x25E5;
                            </div>
                            <div
                                style={{
                                    fontSize: '12.5px',
                                    color: 'var(--lighter-grey)',
                                    position: 'absolute',
                                    float: 'left',
                                    zIndex: 10,
                                    bottom: '-5px',
                                    left: '-12.5px',
                                }}
                            >
                                &#x25E3;
                            </div>
                            <div
                                style={{
                                    fontSize: '12.5px',
                                    color: 'var(--lighter-grey)',
                                    position: 'absolute',
                                    float: 'right',
                                    zIndex: 10,
                                    bottom: '-5px',
                                    right: '-12.5px',
                                }}
                            >
                                &#x25E2;
                            </div> */}
                        </>
                    )}
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
                                        {isMobile ? '' : <>&nbsp;</>}
                                    </>
                                }
                            />
                        </div>
                    )}
                    {props.content}
                    {props.accents && (
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
                                        {isMobile ? '' : <>&nbsp;</>}
                                        {isMobile ? <>&#9135;</> : <>&#124;</>}
                                    </>
                                }
                            />
                        </div>
                    )}
                </div>
            </Spacing>
        </button>
    )
}
