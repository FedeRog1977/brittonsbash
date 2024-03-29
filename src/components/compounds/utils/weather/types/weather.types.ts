import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

export type WeatherProps = {
    icon?: IconDefinition | string
}

export type WeatherTemperatureProps = {
    temp: number
    suffix?: string
} & WeatherProps

export type WeatherIconProps = WeatherProps
