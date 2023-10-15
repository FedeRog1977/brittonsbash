import styles from './button.module.scss'
import { ButtonProps, Grid, Typography } from '..'
import { toUpperCase, useScreenWidth } from '../../../scripts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import cx from 'classnames'

export const Button: React.FC<ButtonProps> = ({ ...props }: ButtonProps) => {
    const { isMobile } = useScreenWidth()

    const classNames = cx({
        [styles[`button${toUpperCase(props.type)}`]]: props.type,
    })

    return (
        <button
            className={classNames}
            onClick={props.func}
            value={props.value}
            style={{
                width: props.dense ? '50%' : undefined,
                paddingTop: props.removePadding ? '0px' : '5px',
                paddingBottom: props.removePadding ? '0px' : '5px',
            }}
        >
            <Grid
                alignColumns={props.subContentTop ? undefined : 'auto auto'}
                alignRows={props.subContentTop ? 'auto auto' : undefined}
                justifyContent={Boolean(props.content) ? 'center' : undefined}
                alignContent="center"
                alignItems={isMobile ? undefined : 'center'}
            >
                {Boolean(props.subContent) && (
                    <Grid
                        columnItem={props.subContentTop ? undefined : [1, 2]}
                        rowItem={props.subContentTop ? [1, 2] : undefined}
                        textAlign={
                            Boolean(isMobile && props.content)
                                ? 'center'
                                : props.subContentTop
                                ? 'center'
                                : 'right'
                        }
                    >
                        <Typography
                            type="bodyLight"
                            color="mediumGrey"
                            content={
                                <>
                                    {props.subContent}
                                    {!isMobile && <>&nbsp;&nbsp;</>}
                                </>
                            }
                        />
                    </Grid>
                )}
                <Grid
                    columnItem={
                        props.subContentTop
                            ? undefined
                            : [props.subContent ? 2 : 1, 2]
                    }
                    rowItem={
                        props.subContentTop
                            ? [props.subContent ? 2 : 1, 2]
                            : undefined
                    }
                    textAlign={
                        Boolean(isMobile && props.content)
                            ? 'center'
                            : props.subContentTop
                            ? 'center'
                            : 'left'
                    }
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
                                : 'lightBlue'
                        }
                    />
                </Grid>
                {Boolean(!props.content) && (
                    <Grid
                        columnItem={props.subContentTop ? undefined : [2, 2]}
                        rowItem={props.subContentTop ? [2, 2] : undefined}
                        textAlign="right"
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
                    </Grid>
                )}
            </Grid>
        </button>
    )
}
