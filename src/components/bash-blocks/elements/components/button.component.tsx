import '../styles/button.styles.scss'
import { ButtonProps, Spacing, Typography } from '..'
import { useScreenWidth } from '../../../../scripts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

export const Button: React.FC<ButtonProps> = ({ ...props }: ButtonProps) => {
    const { isMobile } = useScreenWidth()

    return (
        <button
            className={props.buttonType}
            onClick={props.func}
            value={props.value}
        >
            <Spacing
                mT={
                    Boolean(props.accents)
                        ? Boolean(props.content)
                            ? 5
                            : 0
                        : Boolean(props.content)
                        ? -2
                        : 5
                }
                mB={
                    Boolean(props.accents)
                        ? Boolean(props.content)
                            ? 5
                            : 0
                        : Boolean(props.content)
                        ? 0
                        : 5
                }
            >
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
                    {Boolean(props.subContent) && (
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
                    {Boolean(props.funcResp === false) ? (
                        <Typography
                            type={props.typeType ? props.typeType : 'body'}
                            content={props.content ? props.content : 'Expand'}
                            color={
                                props.color ? props.color : 'var(--medium-grey)'
                            }
                        />
                    ) : (
                        <Typography
                            type={props.typeType ? props.typeType : 'body'}
                            content={props.content ? props.content : 'Contract'}
                            color="var(--light-blue)"
                        />
                    )}
                    {Boolean(!props.content) && (
                        <div
                            style={{
                                position: 'absolute',
                                float: 'right',
                                zIndex: 10,
                                top: '0px',
                                right: '1px',
                            }}
                        >
                            <Typography
                                type="h5"
                                content={
                                    props.funcResp === false ? (
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    ) : (
                                        <FontAwesomeIcon icon={faChevronUp} />
                                    )
                                }
                                color={
                                    props.funcResp === false
                                        ? 'var(--medium-grey)'
                                        : 'var(--light-blue)'
                                }
                            />
                        </div>
                    )}
                    {Boolean(props.accents) && (
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
