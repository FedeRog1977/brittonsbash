import { toBearing, toWindArrow } from '../../../scripts'
import { Typography } from '../../bash-blocks'

export const WeatherWindHourly = ({ windDeg, windSpd, windGst }: any) => {
    const bearing = toBearing(windDeg)
    const arrow = toWindArrow(windSpd)

    return (
        <>
            <Typography type="body" content={bearing} />
            <Typography type="body" content={arrow} />
            <div>
                <small>{windDeg}&deg;</small>
            </div>
            <div data-testid={'weatherWindConversionStd'}>
                <b>{(windSpd * 2.23694).toFixed(0)}mph</b>
            </div>
            <div data-testid={'weatherWindConversionGusts'}>
                <small>{(windGst * 2.23694).toFixed(0)}mph Gusts</small>
            </div>
        </>
    )
}
