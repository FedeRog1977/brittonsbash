import { faCloudRain } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const WeatherPop = ({ pop }: any) => (
    <p>
        <FontAwesomeIcon icon={faCloudRain} /> {(pop * 100).toFixed(0)}&#37;
    </p>
)
