import { useEffect, useState } from 'react'
import { HourlyProps } from './types'

export const WeatherHourlyCall = ({ latIn, lonIn }: any) => {
    const [result, setResult] = useState<HourlyProps[]>([])

    useEffect(() => {
        const url = 'http://api.openweathermap.org/data/3.0/onecall?'
        const lat = `${latIn}`
        const lon = `${lonIn}`
        const appid = '8cd20943bde0b48ee5d7a9b271ac1f43'
        const units = 'metric'
        const lang = 'en'

        const apiCall = async () => {
            const data = await fetch(
                `${url}lat=${lat}&lon=${lon}&appid=${appid}&units=${units}&lang=${lang}`,
                { method: 'GET' }
            )
            const weatherData = await data.json()
            setResult(weatherData.hourly)
        }

        apiCall()
    }, [latIn, lonIn])

    return result
}
