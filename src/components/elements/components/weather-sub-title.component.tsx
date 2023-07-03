import { toCoords } from '../../../scripts'
import { Typography } from '../../bash-blocks'

export const WeatherSubTitle = ({ type, elev, lat, lon, mark }: any) => {
    const { latFormatted, lonFormatted } = toCoords(lat, lon)

    if (type !== 'munro') {
        return (
            <>
                {latFormatted}, {lonFormatted}
            </>
        )
    } else {
        return (
            <>
                Munro at {elev} - {latFormatted}, {lonFormatted}
                <Typography type="h4" content={'Marked by ' + mark} />
            </>
        )
    }
}
