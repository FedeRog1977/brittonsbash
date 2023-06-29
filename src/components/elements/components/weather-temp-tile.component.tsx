import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Spacing, Typography } from '../../bash-blocks'

export const WeatherTempTile = ({ tempIcon, tempType }: any) => {
    let tempBgColor = ''
    let tempFtColor = ''

    if (tempType >= 30) {
        tempBgColor = 'rgba(238, 40, 0, 0.8)'
        tempFtColor = 'var(--white)'
    } else if (tempType >= 25 && tempType < 30) {
        tempBgColor = 'rgba(238, 102, 0, 0.8)'
        tempFtColor = 'var(--white)'
    } else if (tempType >= 15 && tempType < 25) {
        tempBgColor = 'rgba(255, 204, 51, 0.8)'
        tempFtColor = 'var(--white)'
    } else if (tempType >= 0 && tempType < 15) {
        tempBgColor = 'rgba(255, 255, 153, 0.6)'
        tempFtColor = 'var(--black)'
    } else if (tempType < 0) {
        tempBgColor = 'rgba(0, 163, 224, 0.2)'
        tempFtColor = 'var(--black)'
    }

    return (
        <div style={{ background: `${tempBgColor}`, color: `${tempFtColor}` }}>
            <Spacing pX={20} textAlign="center">
                <>
                    <FontAwesomeIcon icon={tempIcon} size="sm" />
                    <Typography
                        type="footnote"
                        content={<>{tempType.toFixed(0)}&deg;C</>}
                        color={tempFtColor}
                    />
                </>
            </Spacing>
        </div>
    )
}
