import { WeatherAtmosphere, WeatherTemp, WeatherIntro, WeatherWind } from '.'
import { Spacing } from '../../bash-blocks'

export const WeatherColumn = ({
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
    ss,
}: any) => (
    <Spacing key={dt} mX={30}>
        <>
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
            <WeatherWind windDeg={windDeg} windSpd={windSpd} />
            <WeatherAtmosphere
                pressure={pressure}
                humidity={humidity}
                dp={dp}
                uvi={uvi}
            />
        </>
    </Spacing>
)
