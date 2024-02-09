import { useEffect, useState } from 'react'
import { setSessionItem } from '../set-session-item'
import { DailyProps, HourlyProps } from '../types'

export function useOpenWeatherCall(latIn: number, lonIn: number) {
    const [dailyResult, setDailyResult] = useState<DailyProps[]>([])
    const [hourlyResult, setHourlyResult] = useState<HourlyProps[]>([])

    // Sample URL
    // https://api.openweathermap.org/data/3.0/onecall?lat=50.5&lon=4.5&appid=6008c47adda4d19b4055c7058a622879&units=metric&lang=en

    const base = 'https://api.openweathermap.org/data/3.0/onecall?'
    const lat = `${latIn}`
    const lon = `${lonIn}`
    const appid = '6008c47adda4d19b4055c7058a622879'
    const units = 'metric'
    const lang = 'en'

    const url = `${base}lat=${lat}&lon=${lon}&appid=${appid}&units=${units}&lang=${lang}`
    const method = { method: 'GET' }

    useEffect(() => {
        const getData = async (url: string, method: {}) =>
            fetch(url, method).then((resolution) => {
                resolution
                    .json()
                    .then((data) => {
                        setSessionItem('weather-daily', data.daily)
                        setSessionItem('weather-hourly', data.hourly)

                        setDailyResult(data.daily)
                        setHourlyResult(data.hourly)
                    })
                    .catch((error: Error) => {
                        console.log(error)
                    })
                console.log(method)
            })

        getData(url, method)
        // setDailyResult(getSessionItem('weather-daily') as DailyProps[])
        // setHourlyResult(getSessionItem('weather-hourly') as HourlyProps[])
    }, [latIn, lonIn])

    return { dailyResult, hourlyResult }
}
