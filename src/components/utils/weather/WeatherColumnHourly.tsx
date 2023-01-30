import WeatherAtmosphereHourly from "./hourly/WeatherAtmosphere";
import WeatherIntroHourly from "./hourly/WeatherIntro";
import WeatherWindHourly from "./hourly/WeatherWind";

const WeatherColumnHourly = ({
    dt,
    icon,
    temp,
    tempFl,
    pop,
    windDeg,
    windSpd,
    windGst,
    pressure,
    humidity,
    dp,
    vb,
    uvi
}) => {
    return (
        <div className={"weatherCol"} key={dt}>
            <WeatherIntroHourly
                dt={dt}
                icon={icon}
                temp={temp}
                tempFl={tempFl}
                pop={pop}
            />
            <WeatherWindHourly
                windDeg={windDeg}
                windSpd={windSpd}
                windGst={windGst}
            />
            <WeatherAtmosphereHourly
                pressure={pressure}
                humidity={humidity}
                dp={dp}
                vb={vb}
                uvi={uvi}
            />
        </div>
    )
};

export default WeatherColumnHourly;