import { useScreenWidth } from '../../../scripts'
import '../styles/typography.styles.scss'
import { TypographyProps } from '..'

export const Typography: React.FC<TypographyProps> = ({
    ...props
}: TypographyProps) => {
    const { isMobile } = useScreenWidth()

    if (props.imageContent) {
        return (
            <div
                style={{
                    display: props.inline ? 'inline' : undefined,
                    textAlign: 'center',
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
                    padding: 0,
                }}
            >
                <img
                    style={{
                        width: isMobile ? '250px' : '500px',
                    }}
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
            className={
                props.fontFamily === 'serif'
                    ? `${props.type}-serif`
                    : `${props.type}-sans-serif`
            }
            style={{
                display: props.inline ? 'inline' : undefined,
                textAlign: props.textAlign,
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
                padding: 0,
            }}
        >
            <span
                className={
                    props.fontFamily === 'serif'
                        ? props.boldFace
                            ? props.italicize
                                ? 'bold-italic-serif'
                                : 'bold-serif'
                            : props.italicize
                            ? 'italic-serif'
                            : 'serif'
                        : props.boldFace
                        ? props.italicize
                            ? 'bold-italic-sans-serif'
                            : 'bold-sans-serif'
                        : props.italicize
                        ? 'italic-sans-serif'
                        : 'sans-serif'
                }
                style={{
                    color: props.color,
                    fontVariant: props.smallCaps ? 'small-caps' : undefined,
                    textDecoration: props.textDecoration,
                }}
            >
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
