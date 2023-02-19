import WeatherAtmosphere from "./daily/WeatherAtmosphere";
import WeatherTemp from "./daily/WeatherTemp";
import WeatherIntro from "./daily/WeatherIntro";
import WeatherWind from "./daily/WeatherWind";

const WeatherColumn = ({
    dt,
    icon,
    temp,
    pop,
    main,
    desc,
    tempMax,
    tempMin,
    tempFlDay,
    tempFlNight,
    windDeg,
    windSpd,
    pressure,
    humidity,
    dp,
    uvi,
    sr,
    ss
}: any) => {
    return (
        <div className={"weatherCol"} key={dt}>
            <WeatherIntro
                dt={dt}
                icon={icon}
                temp={temp}
                pop={pop}
                main={main}
                desc={desc}
                sr={sr}
                ss={ss}
            />
            <WeatherTemp
                tempMax={tempMax}
                tempMin={tempMin}
                tempFlDay={tempFlDay}
                tempFlNight={tempFlNight}
            />
            <WeatherWind
                windDeg={windDeg}
                windSpd={windSpd}
            />
            <WeatherAtmosphere
                pressure={pressure}
                humidity={humidity}
                dp={dp}
                uvi={uvi}
            />
        </div>
    )
};

export default WeatherColumn;