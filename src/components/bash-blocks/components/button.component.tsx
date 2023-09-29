import '../styles/button.styles.scss'
import { ButtonProps, Typography } from '..'
import { useScreenWidth } from '../../../scripts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

export const Button: React.FC<ButtonProps> = ({ ...props }: ButtonProps) => {
    const { isMobile } = useScreenWidth()

    return (
        <button
            className={props.buttonType}
            onClick={props.func}
            value={props.value}
            style={{
                width: props.dense ? '50%' : undefined,
                paddingTop: props.removePadding ? '0px' : '5px',
                paddingBottom: props.removePadding ? '0px' : '5px',
            }}
        >
            <div
                style={{
                    position: 'relative',
                    display: isMobile
                        ? props.subContent
                            ? undefined
                            : 'grid'
                        : props.subContentTop
                        ? undefined
                        : 'grid',
                    gridTemplateColumns: 'auto auto',
                    alignContent: 'center',
                    justifyContent: Boolean(props.content)
                        ? 'center'
                        : undefined,
                    alignItems: isMobile ? undefined : 'center',
                }}
            >
                {Boolean(props.subContent) && (
                    <div
                        style={{
                            gridColumn: '1 / 2',
                            textAlign: Boolean(isMobile && props.content)
                                ? 'center'
                                : props.subContentTop
                                ? 'center'
                                : 'right',
                        }}
                    >
                        <Typography
                            type="bodyLight"
                            color="mediumGrey"
                            content={<>{props.subContent}&nbsp;&nbsp;</>}
                        />
                    </div>
                )}
                <div
                    style={{
                        gridColumn: `${props.subContent ? '2' : '1'} / 2`,
                        textAlign: Boolean(isMobile && props.content)
                            ? 'center'
                            : props.subContentTop
                            ? 'center'
                            : 'left',
                    }}
                >
                    <Typography
                        type={props.typeType ? props.typeType : 'body'}
                        content={
                            props.content
                                ? props.content
                                : Boolean(props.funcResp === false)
                                ? 'Expand'
                                : 'Contract'
                        }
                        color={
                            Boolean(props.funcResp === false && props.color)
                                ? props.color
                                : Boolean(props.funcResp === false)
                                ? 'mediumGrey'
                                : // : props.color
                                  // ? props.color
                                  'lightBlue'
                        }
                    />
                </div>
                {Boolean(!props.content) && (
                    <div
                        style={{
                            gridColumn: '2 / 2',
                            textAlign: 'right',
                            border: isMobile
                                ? '1px solid var(--transparent)'
                                : 'none',
                        }}
                    >
                        <Typography
                            type="bodyLight"
                            content={
                                props.funcResp === false ? (
                                    <FontAwesomeIcon icon={faChevronDown} />
                                ) : (
                                    <FontAwesomeIcon icon={faChevronUp} />
                                )
                            }
                            color={
                                props.funcResp === false
                                    ? 'mediumGrey'
                                    : 'lightBlue'
                            }
                        />
                    </div>
                )}
            </div>
        </button>
    )
}
