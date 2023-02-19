import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationArrow
} from "@fortawesome/free-solid-svg-icons";

const WeatherDeg = ({ wind }: any) => {
    const angle = (-45 + 180) + wind;

    return (
        <div
            data-testid={"weatherDeg"}
            style={{ transform: `rotate(${angle}deg)` }}
        >
            <FontAwesomeIcon icon={faLocationArrow} />
        </div>
    )
};

export default WeatherDeg;