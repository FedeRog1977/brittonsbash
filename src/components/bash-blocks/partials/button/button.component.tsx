import styles from './button.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import cx from 'classnames'
import { useScreenWidth, toUpperCase } from '../../../../scripts'
import { Grid, Typography } from '../../basics'
import { FC } from 'react'
import { TypographyProps } from '../../basics'
import { Color, Url } from '../../reference'

export type ButtonProps = {
    typeType?: TypographyProps['type']
    light?: boolean
    type?: 'regularClear' | 'regularSolid' | 'search' | 'inverse'
    fill?: boolean
    forceWidth?: number
    transition?: boolean
    value?: string
    func: (() => void) | ((e: any) => void)
    funcResp?: boolean
    link?: Url['link']
    content?: string | React.ReactElement
    subContent?: string | React.ReactElement
    subContentTop?: boolean
    color?: Color
    coarsePadding?: boolean
    removePadding?: boolean
}

export const Button: FC<ButtonProps> = ({
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
}) => {
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
                alignColumns={subContentTop ? 'auto' : 'auto auto'}
                alignRows={subContentTop ? 'auto auto' : undefined}
                justifyContent={Boolean(content) ? 'center' : undefined}
                alignContent="center"
                alignItems={isMobile ? undefined : 'center'}
            >
                {Boolean(subContent) && (
                    <Grid
                        columnItem={subContentTop ? [1, 1] : [1, 2]}
                        rowItem={subContentTop ? [1, 2] : undefined}
                        textAlign={
                            Boolean(isMobile && content)
                                ? 'center'
                                : subContentTop
                                ? 'center'
                                : 'right'
                        }
                    >
                        <Typography type="body" color="lightGrey">
                            <>
                                {subContent}
                                {!isMobile && <>&nbsp;&nbsp;</>}
                            </>
                        </Typography>
                    </Grid>
                )}
                <Grid
                    columnItem={
                        subContentTop ? [1, 1] : [subContent ? 2 : 1, 2]
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
                        color={
                            Boolean(funcResp === false && color)
                                ? color
                                : Boolean(funcResp === false)
                                ? 'white'
                                : 'lightBlue'
                        }
                        light={light}
                    >
                        {content
                            ? content
                            : Boolean(funcResp === false)
                            ? 'Read more'
                            : 'Read less'}
                    </Typography>
                </Grid>
                {Boolean(!content) && (
                    <Grid
                        columnItem={subContentTop ? undefined : [2, 2]}
                        rowItem={subContentTop ? [2, 2] : undefined}
                        textAlign="right"
                    >
                        <Typography
                            type="footnote"
                            color={funcResp === false ? 'white' : 'lightBlue'}
                            light
                        >
                            {funcResp === false ? (
                                <FontAwesomeIcon icon={faChevronDown} />
                            ) : (
                                <FontAwesomeIcon icon={faChevronUp} />
                            )}
                        </Typography>
                    </Grid>
                )}
            </Grid>
        </button>
    )

    if (link?.url)
        return (
            <a
                href={link.url}
                target={link.newTab ? '_blank' : undefined}
                rel={link.newTab ? 'noreferrer' : undefined}
            >
                {buttonContent}
            </a>
        )

    return buttonContent
}
