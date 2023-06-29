import { faCloudRain } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Typography } from '../../bash-blocks'

export const WeatherPop = ({ pop }: any) => (
    <Typography
        type="body"
        content={
            <>
                <FontAwesomeIcon icon={faCloudRain} />
                &nbsp;{(pop * 100).toFixed(0)}&#37;
            </>
        }
    />
)
