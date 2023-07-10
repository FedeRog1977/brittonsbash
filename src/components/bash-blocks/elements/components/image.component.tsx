import { FC } from 'react'
import { useScreenWidth } from '../../../../scripts'
import { ImageProps } from '..'
import { Spacing, Typography } from '.'

export const Image: FC<ImageProps> = ({
    url,
    alt,
    caption,
    paragraphMargins,
    inline,
    mT,
    mB,
    mL,
    mR,
}: any) => {
    const { isMobile } = useScreenWidth()

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
                src={url}
                alt={alt}
            />
            {caption && (
                <>
                    <Spacing mT={isMobile ? 7.5 : 15} />
                    <Typography type="caption" content={caption} />
                </>
            )}
        </div>
    )
}
