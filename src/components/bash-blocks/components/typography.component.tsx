import { toUpperCase, useScreenWidth } from '../../../scripts'
import { TypographyProps } from '..'
import cx from 'classnames'
import styles from '../styles/typography.module.scss'

export const Typography: React.FC<TypographyProps> = ({
    ...props
}: TypographyProps) => {
    const { isMobile } = useScreenWidth()
    const classNamesImgCont = cx(styles.imageContainer, {
        [styles.inline]: props.inline,
    })
    const classNamesImg = cx(
        ...(isMobile ? [styles.imageMobile] : [styles.imageDesktop])
    )
    const classNamesTxtCont = cx(
        ...(props.textAlign
            ? [styles[`align${toUpperCase(props.textAlign)}`]]
            : []),
        { [styles.inline]: props.inline }
    )
    const classNamesTxt = cx(
        ...(props.fontFamily === 'serif'
            ? [styles[`serif${toUpperCase(props.type ? props.type : '')}`]]
            : [
                  styles[
                      `sansSerif${toUpperCase(props.type ? props.type : '')}`
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
                `textDecoration${toUpperCase(
                    props.textDecoration ? props.textDecoration : 'None'
                )}`
            ]]: props.textDecoration,
            [styles[
                `color${props.color ? toUpperCase(props.color) : 'DarkerGrey'}`
            ]]: props.color,
        }
    )

    if (props.imageContent) {
        return (
            <div
                className={classNamesImgCont}
                style={{
                    marginTop: props.mT ? props.mT : '0px',
                    marginBottom: props.paragraphMargins
                        ? isMobile
                            ? '15px'
                            : '30px'
                        : props.mB
                        ? props.mB
                        : '0px',
                    marginLeft: props.mL ? props.mL : 0,
                    marginRight: props.mR ? props.mR : 0,
                }}
            >
                <img
                    className={classNamesImg}
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
            className={classNamesTxtCont}
            style={{
                marginTop: props.mT ? props.mT : '0px',
                marginBottom: props.paragraphMargins
                    ? isMobile
                        ? '15px'
                        : '30px'
                    : props.mB
                    ? props.mB
                    : '0px',
                marginLeft: props.mL ? props.mL : 0,
                marginRight: props.mR ? props.mR : 0,
            }}
        >
            <span className={classNamesTxt}>
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
