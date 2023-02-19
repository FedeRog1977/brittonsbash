import { faCloudRain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WeatherPop = ({ pop }: any) => {
    return (
        <p>
            <FontAwesomeIcon icon={faCloudRain} /> {(pop * 100).toFixed(0)}&#37;
        </p>
    )
};

export default WeatherPop;