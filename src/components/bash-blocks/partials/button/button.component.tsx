import styles from './button.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import cx from 'classnames'
import { useScreenWidth, toUpperCase } from '../../../../scripts'
import { Grid, Typography } from '../../basics'
import { ButtonProps } from './button.types'

export const Button: React.FC<ButtonProps> = ({
    typeType = 'body',
    light,
    type = 'regularClear',
    fill,
    forceWidth,
    transition,
    value,
    func,
    funcResp,
    link,
    content,
    subContent,
    subContentTop,
    color,
    coarsePadding,
    removePadding,
}: ButtonProps) => {
    const { isMobile } = useScreenWidth()

    const classNames = cx(styles[`button${toUpperCase(type)}`], {
        [styles[`padded${toUpperCase(coarsePadding ? 'Coarse' : '')}`]]:
            !removePadding,
        [styles.fill]: fill,
        [styles.transition]: transition,
    })

    const buttonContent: React.ReactElement = (
        <button
            className={classNames}
            onClick={func}
            value={value}
            style={{
                width: forceWidth ? `${forceWidth}%` : undefined,
            }}
        >
            <Grid
                alignColumns={subContentTop ? undefined : 'auto auto'}
                alignRows={subContentTop ? 'auto auto' : undefined}
                justifyContent={Boolean(content) ? 'center' : undefined}
                alignContent="center"
                alignItems={isMobile ? undefined : 'center'}
            >
                {Boolean(subContent) && (
                    <Grid
                        columnItem={subContentTop ? undefined : [1, 2]}
                        rowItem={subContentTop ? [1, 2] : undefined}
                        textAlign={
                            Boolean(isMobile && content)
                                ? 'center'
                                : subContentTop
                                ? 'center'
                                : 'right'
                        }
                    >
                        <Typography
                            type="body"
                            color="mediumGrey"
                            content={
                                <>
                                    {subContent}
                                    {!isMobile && <>&nbsp;&nbsp;</>}
                                </>
                            }
                        />
                    </Grid>
                )}
                <Grid
                    columnItem={
                        subContentTop ? undefined : [subContent ? 2 : 1, 2]
                    }
                    rowItem={
                        subContentTop ? [subContent ? 2 : 1, 2] : undefined
                    }
                    textAlign={
                        Boolean(isMobile && content)
                            ? 'center'
                            : subContentTop
                            ? 'center'
                            : 'left'
                    }
                >
                    <Typography
                        type={typeType}
                        content={
                            content
                                ? content
                                : Boolean(funcResp === false)
                                ? 'Read more'
                                : 'Read less'
                        }
                        color={
                            Boolean(funcResp === false && color)
                                ? color
                                : Boolean(funcResp === false)
                                ? 'mediumGrey'
                                : 'lightBlue'
                        }
                        light={light}
                    />
                </Grid>
                {Boolean(!content) && (
                    <Grid
                        columnItem={subContentTop ? undefined : [2, 2]}
                        rowItem={subContentTop ? [2, 2] : undefined}
                        textAlign="right"
                    >
                        <Typography
                            type="footnote"
                            content={
                                funcResp === false ? (
                                    <FontAwesomeIcon icon={faChevronDown} />
                                ) : (
                                    <FontAwesomeIcon icon={faChevronUp} />
                                )
                            }
                            color={
                                funcResp === false ? 'mediumGrey' : 'lightBlue'
                            }
                            light
                        />
                    </Grid>
                )}
            </Grid>
        </button>
    )

    if (link?.url)
        return (
            <a target={link.newTab ? '_blank' : undefined} href={link.url}>
                {buttonContent}
            </a>
        )

    return buttonContent
}
