import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'
import { WeatherTemperatureProps } from '..'
import { toTemperature } from '../../../scripts'
import { Spacing, Typography } from '../../bash-blocks'

export const WeatherTemperature: FC<WeatherTemperatureProps> = ({
    icon,
    temp,
}: any) => {
    let backgroundColor = ''
    let fontColor = ''

    if (temp >= 30) {
        backgroundColor = 'rgba(238, 40, 0, 0.8)'
        fontColor = 'var(--white)'
    } else if (temp >= 25 && temp < 30) {
        backgroundColor = 'rgba(238, 102, 0, 0.8)'
        fontColor = 'var(--darker-grey)'
    } else if (temp >= 15 && temp < 25) {
        backgroundColor = 'rgba(255, 204, 51, 0.8)'
        fontColor = 'var(--darker-grey)'
    } else if (temp >= 0 && temp < 15) {
        backgroundColor = 'rgba(255, 255, 153, 0.6)'
        fontColor = 'var(--darker-grey)'
    } else if (temp < 0) {
        backgroundColor = 'rgba(0, 163, 224, 0.2)'
        fontColor = 'var(--darker-grey)'
    }

    return (
        <div style={{ background: backgroundColor }}>
            <Spacing pY={10} textAlign="center">
                <FontAwesomeIcon icon={icon} size="2xs" />
                <Typography
                    type="footnote"
                    content={toTemperature(temp)}
                    color={fontColor}
                />
            </Spacing>
        </div>
    )
}
