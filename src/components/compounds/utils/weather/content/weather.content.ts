import { BackgroundProps, FootnoteTileProps } from '../../../../bash-blocks'

type WeatherProps = {
    background: BackgroundProps
    blockOne: FootnoteTileProps
}

export const weatherContent: WeatherProps = {
    background: { content: 'Mountain Weather' },
    blockOne: {
        content:
            'All weather data is provided by OpenWeather® One Call API 3.0',
    },
}
