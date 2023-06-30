import { useEffect, useState } from 'react'
import { DailyProps, HourlyProps } from '.'

export function useOpenWeatherCall(latIn: number, lonIn: number) {
    const [dailyResult, setDailyResult] = useState<DailyProps[]>([])
    const [hourlyResult, setHourlyResult] = useState<HourlyProps[]>([])

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
            setDailyResult(weatherData.daily)
            setHourlyResult(weatherData.hourly)
        }

        apiCall()
    }, [latIn, lonIn])

    return { dailyResult, hourlyResult }
}
