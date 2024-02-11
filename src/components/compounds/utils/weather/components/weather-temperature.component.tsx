import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toTemperature, useScreenWidth } from '../../../../../scripts'
import { ColorProps, Spacing, Typography } from '../../../../bash-blocks'
import { WeatherTemperatureProps } from '../types'

export const WeatherTemperature: React.FC<WeatherTemperatureProps> = ({
    ...props
}: WeatherTemperatureProps) => {
    const { isMobile } = useScreenWidth()

    let backgroundColor = undefined
    let fontColor: ColorProps = undefined

    if (props.temp >= 30) {
        backgroundColor = 'rgba(238, 40, 0, 0.8)'
        fontColor = 'white'
    } else if (props.temp >= 25 && props.temp < 30) {
        backgroundColor = 'rgba(238, 102, 0, 0.8)'
        fontColor = 'darkerGrey'
    } else if (props.temp >= 15 && props.temp < 25) {
        backgroundColor = 'rgba(255, 204, 51, 0.8)'
        fontColor = 'darkerGrey'
    } else if (props.temp >= 0 && props.temp < 15) {
        backgroundColor = 'rgba(255, 255, 153, 0.6)'
        fontColor = 'darkerGrey'
    } else if (props.temp < 0) {
        backgroundColor = 'rgba(0, 163, 224, 0.2)'
        fontColor = 'darkerGrey'
    }

    return (
        <div style={{ background: backgroundColor }}>
            <Spacing pY={isMobile ? 5 : 10} textAlign="center">
                <Typography
                    type="footnote"
                    content={toTemperature(props.temp)}
                    color={fontColor}
                    inline
                />
                {props.suffix && (
                    <Typography
                        type="footnote"
                        content={<>&nbsp;{props.suffix}</>}
                        color={fontColor}
                        inline
                    />
                )}
                {props.icon && (
                    <>
                        &nbsp;
                        <FontAwesomeIcon
                            icon={props.icon as IconProp}
                            size="2xs"
                        />
                    </>
                )}
            </Spacing>
        </div>
    )
}
