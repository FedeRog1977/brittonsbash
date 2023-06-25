import { faCloudRain } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { WeatherIcon } from '../../elements'

export const WeatherIntroHourly = ({ dt, icon, temp, tempFl, pop }: any) => (
    <div data-testid={'weatherIntro'} className={'weatherIntro'}>
        <h4>
            {new Date(dt * 1000).toLocaleTimeString('en-us', {
                hour: 'numeric',
            })}
        </h4>
        <h1 className={'weatherIcon'}>
            <WeatherIcon icon={icon} />
        </h1>
        <h4>{temp.toFixed(0)}&deg;C</h4>
        <p>{tempFl.toFixed(0)}&deg;C (FL)</p>
        <p>
            <FontAwesomeIcon icon={faCloudRain} /> {(pop * 100).toFixed(0)}
            &#37;
        </p>
    </div>
)
