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
    light,
    shadow,
    fontFamily = 'sansSerif',
    textAlign,
    paragraphMargins = false,
}) => {
    const { isMobile } = useScreenWidth()

    const classNamesContainer = cx(
        ...(textAlign ? [styles[`align${toUpperCase(textAlign)}`]] : []),
        {
            [styles.inline]: inline,
            [styles[`paragraphMargins${isMobile ? 'Mobile' : 'Desktop'}`]]:
                paragraphMargins,
        }
    )

    const classNamesText = cx(
        ...(fontFamily === 'serif'
            ? [styles[`serif${type ? toUpperCase(type) : ''}`]]
            : [
                  styles[
                      `sansSerif${
                          type ? toUpperCase(type) + (light ? 'Light' : '') : ''
                      }`
                  ],
              ]),
        ...(fontFamily === 'serif'
            ? boldFace
                ? [styles.serifBold]
                : []
            : boldFace
            ? [styles.sansSerifBold]
            : []),
        ...(fontFamily === 'serif'
            ? italicize
                ? [styles.serifItalic]
                : []
            : italicize
            ? [styles.sansSerifItalic]
            : []),
        ...(fontFamily === 'serif'
            ? Boolean(boldFace && italicize)
                ? [styles.serifBoldItalic]
                : []
            : Boolean(boldFace && italicize)
            ? [styles.sansSerifBoldItalic]
            : []),
        {
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
