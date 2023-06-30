import { toBearing, toWindArrow } from '../../../scripts'
import { Spacing, Typography } from '../../bash-blocks'

export const WeatherWind = ({ windDeg, windSpd }: any) => {
    const bearing = toBearing(windDeg)
    const arrow = toWindArrow(windDeg)

    return (
        <Spacing
            pY={20}
            backgroundColor="var(--lighter-grey)"
            textAlign="center"
        >
            <>
                <Typography type="body" content={bearing} />
                <Typography type="body" content={arrow} />
                <div>
                    <small>{windDeg}&deg;</small>
                </div>
                <div data-testid={'weatherWindConversion'}>
                    <b>{(windSpd * 2.23694).toFixed(0)}mph</b>
                </div>
            </>
        </Spacing>
    )
}
