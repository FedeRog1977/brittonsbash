import { toUpperCase, useScreenWidth } from '../../../../scripts'
import cx from 'classnames'
import styles from './typography.module.scss'
import { TypographyProps } from './typography.types'
import Markdown from 'markdown-to-jsx'

export const Typography: React.FC<TypographyProps> = ({
    type = 'body',
    color = 'darkGrey',
    ...props
}: TypographyProps) => {
    const { isMobile } = useScreenWidth()

    const classNamesImgContainer = cx(styles.imageContainer, {
        [styles.inline]: props.inline,
        [styles[`paragraphMargins${isMobile ? 'Mobile' : 'Desktop'}`]]:
            props.paragraphMargins,
    })

    const classNamesImage = cx(
        styles[`image${isMobile ? 'Mobile' : 'Desktop'}`]
    )

    const classNamesTextContainer = cx(
        ...(props.textAlign
            ? [styles[`align${toUpperCase(props.textAlign)}`]]
            : []),
        {
            [styles.inline]: props.inline,
            [styles[`paragraphMargins${isMobile ? 'Mobile' : 'Desktop'}`]]:
                props.paragraphMargins,
        }
    )

    const classNamesText = cx(
        ...(props.fontFamily === 'serif'
            ? [styles[`serif${type ? toUpperCase(type) : ''}`]]
            : [
                  styles[
                      `sansSerif${
                          type
                              ? toUpperCase(type) + (props.light ? 'Light' : '')
                              : ''
                      }`
                  ],
              ]),
        ...(props.fontFamily === 'serif'
            ? props.boldFace
                ? [styles.serifBold]
                : []
            : props.boldFace
            ? [styles.sansSerifBold]
            : []),
        ...(props.fontFamily === 'serif'
            ? props.italicize
                ? [styles.serifItalic]
                : []
            : props.italicize
            ? [styles.sansSerifItalic]
            : []),
        ...(props.fontFamily === 'serif'
            ? Boolean(props.boldFace && props.italicize)
                ? [styles.serifBoldItalic]
                : []
            : Boolean(props.boldFace && props.italicize)
            ? [styles.sansSerifBoldItalic]
            : []),
        {
            [styles.smallCaps]: props.smallCaps,
            [styles[
                `textDecoration${
                    props.textDecoration
                        ? toUpperCase(props.textDecoration)
                        : 'None'
                }`
            ]]: props.textDecoration,
            [styles[`color${color ? toUpperCase(color) : 'DarkerGrey'}`]]:
                color,
            [styles.shadow]: props.shadow,
        }
    )

    if (props.imageContent) {
        return (
            <div
                className={classNamesImgContainer}
                style={{
                    marginTop: props.mT ? props.mT : 0,
                    marginBottom: Boolean(!props.paragraphMargins && props.mB)
                        ? props.mB
                        : undefined,
                    marginLeft: props.mL ? props.mL : 0,
                    marginRight: props.mR ? props.mR : 0,
                }}
            >
                <img
                    className={classNamesImage}
                    src={props.imageContent.url}
                    alt={props.imageContent.alt}
                />
                {props.imageContent.description && (
                    <Typography
                        type="caption"
                        content={props.imageContent.description}
                        fontFamily={props.fontFamily}
                        mT={5}
                    />
                )}
            </div>
        )
    }

    const content =
        typeof props.content === 'string' ? (
            <Markdown>{props.content}</Markdown>
        ) : (
            props.content
        )

    return (
        <div
            className={classNamesTextContainer}
            style={{
                marginTop: props.mT ? props.mT : 0,
                marginBottom: Boolean(!props.paragraphMargins && props.mB)
                    ? props.mB
                    : undefined,
                marginLeft: props.mL ? props.mL : 0,
                marginRight: props.mR ? props.mR : 0,
            }}
        >
            <span className={classNamesText}>
                {props.link ? (
                    <a
                        href={props.link.url}
                        target={props.link.newTab ? '_blank' : undefined}
                        rel={props.link.newTab ? 'noreferrer' : undefined}
                    >
                        <>{content}</>
                    </a>
                ) : (
                    <>{content}</>
                )}
            </span>
        </div>
    )
}
