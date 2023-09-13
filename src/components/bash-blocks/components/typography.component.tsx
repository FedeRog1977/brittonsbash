import { toUpperCase, useScreenWidth } from '../../../scripts'
import { TypographyProps } from '..'
import cx from 'classnames'
import styles from '../styles/typography.module.scss'

export const Typography: React.FC<TypographyProps> = ({
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
            ? [styles[`serif${props.type ? toUpperCase(props.type) : ''}`]]
            : [
                  styles[
                      `sansSerif${props.type ? toUpperCase(props.type) : ''}`
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
            [styles[
                `color${props.color ? toUpperCase(props.color) : 'DarkerGrey'}`
            ]]: props.color,
        }
    )

    if (props.imageContent) {
        return (
            <div
                className={classNamesImgContainer}
                // style={{
                //     marginTop: props.mT ? props.mT : 0,
                //     marginBottom: props.mB ? props.mB : 0,
                //     marginLeft: props.mL ? props.mL : 0,
                //     marginRight: props.mR ? props.mR : 0,
                // }}
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

    return (
        <div
            className={classNamesTextContainer}
            // style={{
            //     marginTop: props.mT ? props.mT : 0,
            //     marginBottom: props.mB ? props.mB : 0,
            //     marginLeft: props.mL ? props.mL : 0,
            //     marginRight: props.mR ? props.mR : 0,
            // }}
        >
            <span className={classNamesText}>
                {props.link ? (
                    <a
                        href={props.link.url}
                        target={props.link.newTab ? '_blank' : undefined}
                        rel={props.link.newTab ? 'noreferrer' : undefined}
                    >
                        <>{props.content}</>
                    </a>
                ) : (
                    <>{props.content}</>
                )}
            </span>
        </div>
    )
}
