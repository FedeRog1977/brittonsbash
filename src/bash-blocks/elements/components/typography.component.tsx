import { FC, ReactElement } from 'react'
import { useMobile } from '../../../scripts'
import '../styles/typography.styles.css'

export type TypographyProps = {
    type:
        | 't1'
        | 't2'
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'body'
        | 'caption'
        | 'footnote'
    content: string | ReactElement
    fontFamily?: 'serif' | 'sans-serif'
    textAlign?: 'left' | 'center' | 'justify' | 'right'
    color?: string
    inline?: boolean
    boldFace?: boolean
    italicize?: boolean
    smallCaps?: boolean
    textDecoration?: 'overline' | 'underline' | 'line-through'
    paragraphMargins?: boolean
    link?: string
    refKey?: string
    mT?: string
    mB?: string
    mL?: string
    mR?: string
}

export const Typography: FC<TypographyProps> = ({
    type,
    content,
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
    refKey,
    mT,
    mB,
    mL,
    mR,
}: any) => {
    const isMobile = useMobile()

    return (
        <div
            key={refKey}
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
