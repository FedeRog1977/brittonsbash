import styles from './button.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import cx from 'classnames'
import { useScreenWidth, toUpperCase } from '../../../../scripts'
import { Grid, Typography } from '../../basics'
import { FC, ReactElement } from 'react'
import { TypographyProps } from '../../basics'
import { Url } from '../../reference'

export type ButtonProps = {
    variant?: 'default' | 'clear' | 'solid' | 'inverse'
    // Go into typography and type --> variant
    typeVariant?: TypographyProps['type']
    typeColor?: TypographyProps['color']
    typeLight?: boolean
    link?: Url['link']
    fill?: boolean
    forceWidth?: number
    transition?: boolean
    value?: string
    func?: (() => void) | ((e: any) => void)
    funcResp?: boolean
    content?: string | ReactElement
    subContent?: string | ReactElement
    subContentTop?: boolean
    padding?: 'default' | 'coarse'
}

export const Button: FC<ButtonProps> = ({
    variant = 'default',
    typeVariant = 'body',
    typeColor = 'white',
    typeLight = false,
    link,
    fill,
    forceWidth,
    transition,
    value,
    func,
    funcResp,
    content,
    subContent,
    subContentTop,
    padding = 'default',
}) => {
    const { isMobile } = useScreenWidth()

    const classNames = cx(
        styles[`button${toUpperCase(variant)}`],
        styles[`padded${toUpperCase(padding)}`],
        {
            [styles.fill]: fill,
            [styles.transition]: transition,
        }
    )

    const buttonContent: ReactElement = (
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
                                {!isMobile ? <>&nbsp;&nbsp;</> : null}
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
                        type={typeVariant}
                        color={
                            Boolean(funcResp === false && typeColor)
                                ? typeColor
                                : Boolean(funcResp === false)
                                ? 'white'
                                : 'lightBlue'
                        }
                        light={typeLight}
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
