import { faCloudRain } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toWeatherIcon } from '../../../scripts'
import { Typography } from '../../bash-blocks'

export const WeatherIntroHourly = ({ dt, icon, temp, tempFl, pop }: any) => {
    const fullIcon = toWeatherIcon(icon)

    return (
        <>
            <h4>
                {new Date(dt * 1000).toLocaleTimeString('en-us', {
                    hour: 'numeric',
                })}
            </h4>
            <Typography type="h3" content={<>{fullIcon}</>} />
            <h4>{temp.toFixed(0)}&deg;C</h4>
            <p>{tempFl.toFixed(0)}&deg;C (FL)</p>
            <p>
                <FontAwesomeIcon icon={faCloudRain} /> {(pop * 100).toFixed(0)}
                &#37;
            </p>
        </>
    )
}
