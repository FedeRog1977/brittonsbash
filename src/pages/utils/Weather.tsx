import React from 'react';
import '../../App.css';
import WeatherSearch from '../../components/utils/weather/WeatherSearch';
import Background from '../../elements/Background';

function Weather() {
    return (
        <div>
            <Background text={"Weather Forecast"} />
            <div className={"body"}>
                <WeatherSearch />
            </div>
        </div>
    );
}

export default Weather;