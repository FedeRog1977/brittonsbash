import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudRain } from '@fortawesome/free-solid-svg-icons'
import {
    toDate,
    toPrecipitation,
    toTemperature,
    toWeatherIcon,
} from '../../../scripts'
import { Spacing, Typography } from '../../bash-blocks'

export const WeatherIntro = ({
    dt,
    icon,
    temp,
    pop,
    main,
    desc,
    sr,
    ss,
}: any) => {
    const { weekday, dayOfMonth } = toDate(dt)
    const fullIcon = toWeatherIcon(icon)
    const temperature = toTemperature(temp)
    const precipitation = toPrecipitation(pop)
    const { time: sunrise } = toDate(sr)
    const { time: sunset } = toDate(ss)

    return (
        <Spacing
            pY={20}
            backgroundColor="var(--lighter-grey)"
            textAlign="center"
        >
            <>
                <Typography type="h4" content={weekday} />
                <Typography type="body" content={dayOfMonth} />
                <Typography type="h3" content={<>{fullIcon}</>} />
                <Typography type="h4" content={temperature} />
                <Typography
                    type="body"
                    content={
                        <>
                            <FontAwesomeIcon icon={faCloudRain} />
                            &nbsp;{precipitation}
                        </>
                    }
                />
                <>
                    <Typography
                        type="footnote"
                        content={main}
                        boldFace
                        inline
                    />
                    <Typography type="footnote" content=": " inline />
                    <Typography type="footnote" content={desc} inline />
                </>
                <table style={{ margin: 'auto' }}>
                    <tr>
                        <td style={{ columnWidth: '3.5em' }}>
                            <Typography
                                type="footnote"
                                content="Sunrise:"
                                boldFace
                            />
                        </td>
                        <td style={{ columnWidth: '3.5em' }}>
                            <Typography
                                type="footnote"
                                content="Sunset:"
                                boldFace
                            />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ columnWidth: '3.5em' }}>
                            <Typography type="footnote" content={sunrise} />
                        </td>
                        <td style={{ columnWidth: '3.5em' }}>
                            <Typography type="footnote" content={sunset} />
                        </td>
                    </tr>
                </table>
            </>
        </Spacing>
    )
}
