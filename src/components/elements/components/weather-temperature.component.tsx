import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toTemperature } from '../../../scripts'
import { Spacing, Typography } from '../../bash-blocks'

export const WeatherTemperature = ({ tempIcon, tempType }: any) => {
    let tempBgColor = ''
    let tempFtColor = ''

    if (tempType >= 30) {
        tempBgColor = 'rgba(238, 40, 0, 0.8)'
        tempFtColor = 'var(--white)'
    } else if (tempType >= 25 && tempType < 30) {
        tempBgColor = 'rgba(238, 102, 0, 0.8)'
        tempFtColor = 'var(--darker-grey)'
    } else if (tempType >= 15 && tempType < 25) {
        tempBgColor = 'rgba(255, 204, 51, 0.8)'
        tempFtColor = 'var(--darker-grey)'
    } else if (tempType >= 0 && tempType < 15) {
        tempBgColor = 'rgba(255, 255, 153, 0.6)'
        tempFtColor = 'var(--darker-grey)'
    } else if (tempType < 0) {
        tempBgColor = 'rgba(0, 163, 224, 0.2)'
        tempFtColor = 'var(--darker-grey)'
    }

    return (
        <div style={{ background: `${tempBgColor}`, color: `${tempFtColor}` }}>
            <Spacing pY={10} textAlign="center">
                <FontAwesomeIcon icon={tempIcon} size="2xs" />
                <Typography
                    type="footnote"
                    content={toTemperature(tempType)}
                    color={tempFtColor}
                />
            </Spacing>
        </div>
    )
}
