import {
    WeatherIcon,
    WeatherDate,
    WeatherDay,
    WeatherTemp,
    WeatherPop,
    WeatherDesc,
    WeatherSrSs,
} from '../../../../elements'

const WeatherIntro = ({ dt, icon, temp, pop, main, desc, sr, ss }: any) => {
    return (
        <div data-testId={'weatherIntro'} className={'weatherIntro'}>
            <WeatherDay dt={dt} />
            <WeatherDate dt={dt} />
            <WeatherIcon icon={icon} />
            <WeatherTemp temp={temp} />
            <WeatherPop pop={pop} />
            <WeatherDesc main={main} desc={desc} />
            <WeatherSrSs sr={sr} ss={ss} />
        </div>
    )
}

export default WeatherIntro
