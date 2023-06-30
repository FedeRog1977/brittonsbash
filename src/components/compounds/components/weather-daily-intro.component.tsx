import { Spacing } from '../../bash-blocks'
import {
    WeatherIcon,
    WeatherDate,
    WeatherDay,
    WeatherTemp,
    WeatherPop,
    WeatherDesc,
    WeatherSrSs,
} from '../../elements'

export const WeatherIntro = ({
    dt,
    icon,
    temp,
    pop,
    main,
    desc,
    sr,
    ss,
}: any) => (
    <Spacing textAlign="center">
        <>
            <WeatherDay dt={dt} />
            <WeatherDate dt={dt} />
            <WeatherIcon icon={icon} />
            <WeatherTemp temp={temp} />
            <WeatherPop pop={pop} />
            <WeatherDesc main={main} desc={desc} />
            <WeatherSrSs sr={sr} ss={ss} />
        </>
    </Spacing>
)
