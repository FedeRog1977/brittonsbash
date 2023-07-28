import { FC } from 'react'
import '../styles/button.styles.css'
import { ButtonProps, Spacing, Typography } from '..'
import { useScreenWidth } from '../../../../scripts'

export const Button: FC<ButtonProps> = ({ ...props }: ButtonProps) => {
    const { isMobile } = useScreenWidth()

    return (
        <button
            className={props.buttonType}
            onClick={props.func}
            value={props.value}
        >
            <Spacing mY={Boolean(props.accents) ? 10 : 0}>
                <div
                    style={{
                        position: 'relative',
                        textAlign: props.textAlign ? props.textAlign : 'center',
                        display: isMobile
                            ? undefined
                            : props.accentsTop
                            ? undefined
                            : 'flex',
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
                    {Boolean(!isMobile && props.bars) && (
                        <>
                            <div
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
                            </div>
                        </>
                    )}
                    {props.subContent && (
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
                    )}
                    <>
                        {props.funcResp === false && (
                            <Typography
                                type={props.typeType ? props.typeType : 'body'}
                                content={
                                    <>
                                        {props.content ? (
                                            <>{props.content}</>
                                        ) : (
                                            <>Expand</>
                                        )}
                                    </>
                                }
                                color={
                                    props.color
                                        ? props.color
                                        : 'var(--medium-grey)'
                                }
                                mT={props.content ? 0 : 2.5}
                                mB={props.content ? 0 : 5}
                            />
                        )}
                        {props.funcResp === true && (
                            <Typography
                                type={props.typeType ? props.typeType : 'body'}
                                content={
                                    <>
                                        {props.content ? (
                                            <>{props.content}</>
                                        ) : (
                                            <>Contract</>
                                        )}
                                    </>
                                }
                                color="var(--light-blue)"
                                mT={props.content ? 0 : 2.5}
                                mB={props.content ? 0 : 5}
                            />
                        )}
                    </>
                    {props.accents && (
                        <Typography
                            type="h5"
                            color="var(--medium-grey)"
                            content={
                                <>
                                    {isMobile ? (
                                        ''
                                    ) : props.accentsTop ? (
                                        ''
                                    ) : (
                                        <>&nbsp;</>
                                    )}
                                    {isMobile ? (
                                        <>&#9135;</>
                                    ) : props.accentsTop ? (
                                        <>&#9135;</>
                                    ) : (
                                        <>&#124;</>
                                    )}
                                </>
                            }
                        />
                    )}
                </div>
            </Spacing>
        </button>
    )
}
