import { useEffect, useState } from 'react'
import { DailyProps, HourlyProps } from './types'

export function useOpenWeatherCall(latIn: number, lonIn: number) {
    const [dailyResult, setDailyResult] = useState<DailyProps[]>([])
    const [hourlyResult, setHourlyResult] = useState<HourlyProps[]>([])

    // Sample URL
    // https://api.openweathermap.org/data/3.0/onecall?lat=50.5&lon=4.5&appid=6008c47adda4d19b4055c7058a622879&units=metric&lang=en

    useEffect(() => {
        const url = 'https://api.openweathermap.org/data/3.0/onecall?'
        const lat = `${latIn}`
        const lon = `${lonIn}`
        const appid = '6008c47adda4d19b4055c7058a622879'
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
