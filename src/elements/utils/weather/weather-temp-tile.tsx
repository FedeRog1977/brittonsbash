import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const WeatherTempTile = ({ tempIcon, tempType }: any) => {
    let tempBgColor = ''
    let tempFtColor = ''

    if (tempType >= 30) {
        tempBgColor = 'rgba(238, 40, 0, 0.8)'
        tempFtColor = '#FFFFFF'
    } else if (tempType >= 25 && tempType < 30) {
        tempBgColor = 'rgba(238, 102, 0, 0.8)'
        tempFtColor = '#FFFFFF'
    } else if (tempType >= 15 && tempType < 25) {
        tempBgColor = 'rgba(255, 204, 51, 0.8)'
        tempFtColor = '#FFFFFF'
    } else if (tempType >= 0 && tempType < 15) {
        tempBgColor = 'rgba(255, 255, 153, 0.6)'
        tempFtColor = '#000000'
    } else if (tempType < 0) {
        tempBgColor = 'rgba(0, 163, 224, 0.2)'
        tempFtColor = '#000000'
    }

    return (
        <div
            data-testid={'weatherTempTile'}
            className={'flexCol'}
            style={{ background: `${tempBgColor}`, color: `${tempFtColor}` }}
        >
            <div className={'weatherComponent'}>
                <FontAwesomeIcon icon={tempIcon} />
            </div>
            <div className={'weatherComponent'}>
                {tempType.toFixed(0)}&deg;C
            </div>
        </div>
    )
}
