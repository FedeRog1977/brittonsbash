import '../styles/button.styles.scss'
import { ButtonProps, Grid, Typography } from '..'
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
            <Grid
                displayOverwrite={
                    isMobile
                        ? props.subContent
                            ? undefined
                            : 'grid'
                        : props.subContentTop
                        ? undefined
                        : 'grid'
                }
                alignColumns="auto auto"
                justifyContent={Boolean(props.content) ? 'center' : undefined}
                alignContent="center"
                alignItems={isMobile ? undefined : 'center'}
            >
                {Boolean(props.subContent) && (
                    <Grid
                        columnItem={[1, 2]}
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
                    columnItem={[props.subContent ? 2 : 1, 2]}
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
                    <Grid columnItem={[2, 2]} textAlign="right">
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
