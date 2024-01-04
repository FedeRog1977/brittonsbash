import { FootnoteTileProps } from '../../../../bash-blocks'

type WeatherProps = {
    blockOne: FootnoteTileProps
}

export const weatherContent: WeatherProps = {
    blockOne: {
        content:
            'All weather data is provided by OpenWeather® One Call API 3.0',
    },
}
