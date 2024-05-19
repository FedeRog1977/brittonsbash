import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

export type Daily = {
    dt: number
    sunrise: number
    sunset: number
    temp: {
        day: number
        min: number
        max: number
        night: number
        eve: number
        morn: number
    }
    feels_like: {
        day: number
        night: number
        eve: number
        morn: number
    }
    pressure: number
    humidity: number
    dew_point: number
    wind_speed: number
    wind_deg: number
    weather: [
        {
            id: number
            main: string
            description: string
            icon: string | IconDefinition
        }
    ]
    clouds: number
    pop: number
    rain: number
    uvi: number
}
