import { toUpperCase, useScreenWidth } from '../../../../scripts'
import cx from 'classnames'
import styles from './typography.module.scss'
import Markdown from 'markdown-to-jsx'
import { createElement, FC } from 'react'
import { tagType } from './constants/tag-type.constant'
import { Style, Text } from '../../reference'

export type TypographyProps = Text & Style

export const Typography: FC<TypographyProps> = ({
    type,
    children,
    color = 'white',
    inline,
    boldFace,
    italicize,
    smallCaps,
    textDecoration = 'none',
    link,
    shadow,
    fontFamily = 'sansSerif',
    textAlign = 'inherit',
    paragraphMargins = false,
}) => {
    const classNamesContainer = cx({
        [styles.inline]: inline,
        [styles.paragraphMargins]: paragraphMargins,
        [styles[`align${toUpperCase(textAlign)}`]]: textAlign,
    })

    const classNamesText = cx(
        styles.typography,
        styles[`${fontFamily}${toUpperCase(type)}`],
        {
            [styles[`${fontFamily}Bold`]]: boldFace,
            [styles[`${fontFamily}Italic`]]: italicize,
            [styles[`${fontFamily}BoldItalic`]]: Boolean(boldFace && italicize),
            [styles.smallCaps]: smallCaps,
            [styles[
                `textDecoration${
                    textDecoration ? toUpperCase(textDecoration) : 'None'
                }`
            ]]: textDecoration,
            [styles[`color${color ? toUpperCase(color) : 'DarkerGrey'}`]]:
                color,
            [styles.shadow]: shadow,
        }
    )

    // const parsedTagMappedText = createElement(tagType[type], {
    //     className: classNamesText,
    //     children,
    // })

    const parsedText =
        typeof children === 'string' ? (
            <Markdown>{children}</Markdown>
        ) : (
            <>{children}</>
        )

    if (link?.url)
        return (
            <div className={classNamesContainer}>
                <div className={classNamesText}>
                    <a
                        href={link.url}
                        target={link.newTab ? '_blank' : undefined}
                        rel={link.newTab ? 'noreferrer' : undefined}
                    >
                        {parsedText}
                    </a>
                </div>
            </div>
        )

    return (
        <div className={classNamesContainer}>
            <div className={classNamesText}>{parsedText}</div>
        </div>
    )
}
