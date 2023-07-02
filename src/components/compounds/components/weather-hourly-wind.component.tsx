import { toBearing, toSpeed, toWindArrow } from '../../../scripts'
import { Spacing, Typography } from '../../bash-blocks'

export const WeatherWindHourly = ({ windDeg, windSpd, windGst }: any) => {
    const { bearingFormatted: bearing, bearingCompass } = toBearing(windDeg)
    const arrow = toWindArrow(windDeg)
    const speed = toSpeed(windSpd, true)
    const gusts = toSpeed(windGst, true)

    return (
        <Spacing
            pY={20}
            backgroundColor="var(--lighter-grey)"
            textAlign="center"
        >
            <>
                <Typography type="body" content={bearingCompass} />
                <Typography type="body" content={arrow} />
                <Typography type="footnote" content={bearing} />
                <Typography type="footnote" content={speed} boldFace />
                <Typography
                    type="footnote"
                    content={gusts + ' gusts'}
                    boldFace
                />
            </>
        </Spacing>
    )
}
