import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

export type WeatherProps = {
    icon: IconDefinition
}

export type WeatherTemperatureProps = {
    temp: number
} & WeatherProps

export type WeatherIconProps = WeatherProps
