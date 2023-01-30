import WeatherDeg from "../../../../elements/utils/weather/WeatherDeg";
import WeatherDir from "../../../../elements/utils/weather/WeatherDir";

const WeatherWindHourly = ({ windDeg, windSpd, windGst }) => {
    return (
        <div className={"weatherWind"}>
            <WeatherDir wind={windDeg} />
            <WeatherDeg wind={windDeg} />
            <div>
                <small>{windDeg}&deg;</small>
            </div>
            <div data-testid={"weatherWindConversionStd"}>
                <b>{(windSpd * 2.23694).toFixed(0)}mph</b>
            </div>
            <div data-testid={"weatherWindConversionGusts"}>
                <small>{(windGst * 2.23694).toFixed(0)}mph Gusts</small>
            </div>
        </div>
    )
};

export default WeatherWindHourly;