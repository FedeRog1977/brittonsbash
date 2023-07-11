import { FC } from 'react'
import { useScreenWidth } from '../../../../scripts'
import '../styles/typography.styles.css'
import { TypographyProps } from '..'

export const Typography: FC<TypographyProps> = ({
    type,
    content,
    imageContent,
    fontFamily,
    textAlign,
    color,
    inline,
    boldFace,
    italicize,
    smallCaps,
    textDecoration,
    paragraphMargins,
    link,
    mT,
    mB,
    mL,
    mR,
}: any) => {
    const { isMobile } = useScreenWidth()

    if (type === 'image') {
        return (
            <div
                style={{
                    display: inline && 'inline',
                    textAlign: 'center',
                    marginTop: paragraphMargins
                        ? isMobile
                            ? '15px'
                            : '30px'
                        : mT
                        ? mT
                        : '0px',
                    marginBottom: paragraphMargins
                        ? isMobile
                            ? '15px'
                            : '30px'
                        : mB
                        ? mB
                        : '0px',
                    marginLeft: mL ? mL : 0,
                    marginRight: mR ? mR : 0,
                    padding: 0,
                }}
            >
                <img
                    style={{
                        width: isMobile ? '250px' : '500px',
                    }}
                    src={imageContent.url}
                    alt={imageContent.alt}
                />
                {imageContent.description && (
                    <Typography
                        type="caption"
                        content={imageContent.description}
                        fontFamily={fontFamily}
                        mT={5}
                    />
                )}
            </div>
        )
    }

    return (
        <div
            className={
                fontFamily === 'serif' ? `${type}-serif` : `${type}-sans-serif`
            }
            style={{
                display: inline && 'inline',
                textAlign: textAlign,
                marginTop: paragraphMargins
                    ? isMobile
                        ? '15px'
                        : '30px'
                    : mT
                    ? mT
                    : '0px',
                marginBottom: paragraphMargins
                    ? isMobile
                        ? '15px'
                        : '30px'
                    : mB
                    ? mB
                    : '0px',
                marginLeft: mL ? mL : 0,
                marginRight: mR ? mR : 0,
                padding: 0,
            }}
        >
            <span
                style={{
                    color: color,
                    fontVariant: smallCaps && 'small-caps',
                    textDecoration: textDecoration,
                }}
            >
                {boldFace ? (
                    <>
                        {italicize ? (
                            <i
                                className={
                                    fontFamily === 'serif'
                                        ? 'italic-serif'
                                        : 'italic-sans-serif'
                                }
                            >
                                <b
                                    className={
                                        fontFamily === 'serif'
                                            ? 'bold-serif'
                                            : 'bold-sans-serif'
                                    }
                                >
                                    <>
                                        {link ? (
                                            <a href={link}>{content}</a>
                                        ) : (
                                            <>{content}</>
                                        )}
                                    </>
                                </b>
                            </i>
                        ) : (
                            <b
                                className={
                                    fontFamily === 'serif'
                                        ? 'bold-serif'
                                        : 'bold-sans-serif'
                                }
                            >
                                {link ? (
                                    <a href={link}>{content}</a>
                                ) : (
                                    <>{content}</>
                                )}
                            </b>
                        )}
                    </>
                ) : (
                    <>
                        {italicize ? (
                            <i
                                className={
                                    fontFamily === 'serif'
                                        ? 'italic-serif'
                                        : 'italic-sans-serif'
                                }
                            >
                                {link ? (
                                    <a href={link}>{content}</a>
                                ) : (
                                    <>{content}</>
                                )}
                            </i>
                        ) : (
                            <>
                                {link ? (
                                    <a href={link}>{content}</a>
                                ) : (
                                    <>{content}</>
                                )}
                            </>
                        )}
                    </>
                )}
            </span>
        </div>
    )
}
