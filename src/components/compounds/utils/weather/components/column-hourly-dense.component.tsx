import {
    toDate,
    toPrecipitation,
    toBearing,
    toSpeed,
} from '../../../../../scripts'
import { Spacing, Typography } from '../../../../bash-blocks'
import { Icon } from './icon.component'
import { Temperature } from './temperature.component'

export const ColumnHourlyDense = ({
    dt,
    icon,
    temp,
    pop,
    windDeg,
    windSpd,
    windGst,
    pressure,
    humidity,
    dp,
    vb,
    uvi,
}: any) =>
    // Add props
    {
        const { hour } = toDate(dt)
        const precipitation = toPrecipitation(pop)
        const {
            bearingFormatted: bearing,
            bearingCompass,
            bearingArrow,
        } = toBearing(windDeg)
        const speed = toSpeed(windSpd, true)
        const gusts = toSpeed(windGst, true)

        return (
            <>
                <Spacing pY={20} textAlign="center">
                    <Typography type="h4" paragraphMargins>
                        {hour}
                    </Typography>
                    <Typography type="h1">
                        <Icon icon={icon} />
                    </Typography>
                    <Spacing pY={20} textAlign="center">
                        <Temperature temp={temp} />
                    </Spacing>
                    <Typography type="body">{precipitation}</Typography>
                </Spacing>
                <Spacing pY={20} textAlign="center">
                    <Typography type="body">{bearingCompass}</Typography>
                    <Typography type="body">{bearingArrow}</Typography>
                    <Typography type="footnote">{bearing}</Typography>
                    <Typography type="footnote" boldFace>
                        {speed}
                    </Typography>
                    <Typography type="footnote" boldFace>
                        {gusts + ' gusts'}
                    </Typography>
                </Spacing>
            </>
        )
    }
