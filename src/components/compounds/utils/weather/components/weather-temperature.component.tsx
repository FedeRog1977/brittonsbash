import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toTemperature, useScreenWidth } from '../../../../../scripts'
import { ColorProps, Spacing, Typography } from '../../../../bash-blocks'
import { WeatherTemperatureProps } from '../types'

export const WeatherTemperature: React.FC<WeatherTemperatureProps> = ({
    temp,
    suffix,
    icon,
}: WeatherTemperatureProps) => {
    const { isMobile } = useScreenWidth()

    let backgroundColor = undefined
    let fontColor: ColorProps = undefined

    if (temp >= 30) {
        backgroundColor = 'rgba(238, 40, 0, 0.8)'
        fontColor = 'white'
    } else if (temp >= 25 && temp < 30) {
        backgroundColor = 'rgba(238, 102, 0, 0.8)'
        fontColor = 'darkerGrey'
    } else if (temp >= 15 && temp < 25) {
        backgroundColor = 'rgba(255, 204, 51, 0.8)'
        fontColor = 'darkerGrey'
    } else if (temp >= 0 && temp < 15) {
        backgroundColor = 'rgba(255, 255, 153, 0.6)'
        fontColor = 'darkerGrey'
    } else if (temp < 0) {
        backgroundColor = 'rgba(0, 163, 224, 0.2)'
        fontColor = 'darkerGrey'
    }

    return (
        <div style={{ background: backgroundColor }}>
            <Spacing pY={isMobile ? 5 : 10} textAlign="center">
                <Typography
                    type="footnote"
                    content={toTemperature(temp)}
                    color={fontColor}
                    inline
                />
                {suffix && (
                    <Typography
                        type="footnote"
                        content={<>&nbsp;{suffix}</>}
                        color={fontColor}
                        inline
                    />
                )}
                {icon && (
                    <>
                        &nbsp;
                        <FontAwesomeIcon icon={icon as IconProp} size="2xs" />
                    </>
                )}
            </Spacing>
        </div>
    )
}
