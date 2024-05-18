import { toUpperCase, useScreenWidth } from '../../../../scripts'
import cx from 'classnames'
import styles from './typography.module.scss'
import { StyleProps, TextProps } from './types/typography.types'
import Markdown from 'markdown-to-jsx'
import { createElement, FC } from 'react'
import { tagType } from './constants/tag-type.constant'

export type TypographyProps = TextProps & StyleProps

export const Typography: FC<TypographyProps> = ({
    type,
    children,
    // element,
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

    // const reactElement = element ?? tagType[type]

    const contentText =
        typeof children === 'string' ? (
            <Markdown>{children}</Markdown>
        ) : (
            // createElement(reactElement, {
            //     children,
            // })
            children
        )

    return (
        <div className={classNamesContainer}>
            <span className={classNamesText}>
                {link ? (
                    <a
                        href={link.url}
                        target={link.newTab ? '_blank' : undefined}
                        rel={link.newTab ? 'noreferrer' : undefined}
                    >
                        <>{contentText}</>
                    </a>
                ) : (
                    <>{contentText}</>
                )}
            </span>
        </div>
    )
}
