import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronUp,
    faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Button from "../../../elements/page/Button";
import WeatherHourly from "./WeatherHourly";
import React from "react";

const WeatherToggle = ({ lat, lon }: any) => {
    const [showWeather, setShowWeather] = useState(false);
    const [weatherLabel, setWeatherLabel] = useState(<FontAwesomeIcon icon={faChevronDown} />);

    const handleInput = () => {
        if (showWeather === false) {
            setShowWeather(true);
            setWeatherLabel(<FontAwesomeIcon icon={faChevronUp} />);
        } else {
            setShowWeather(false);
            setWeatherLabel(<FontAwesomeIcon icon={faChevronDown} />);
        }
    }

    return (
        <div>
            <Button id={"expandWeather"} text={weatherLabel} func={() => handleInput()} />
            {showWeather && <WeatherHourly latIn={lat} lonIn={lon} />}
        </div>
    );
};

export default WeatherToggle;