import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSun,
    faMoon,
    faCloud,
    faCloudSun,
    faCloudMoon,
    faCloudRain,
    faCloudSunRain,
    faThunderstorm,
    faSnowflake,
    faSmog,
    faCloudMoonRain,
} from '@fortawesome/free-solid-svg-icons'
import { WeatherIconProps } from '../types'
import { FC } from 'react'

export const WeatherIcon: FC<WeatherIconProps> = ({ icon }) => {
    if (icon === '01d') {
        return (
            <div style={{ color: `rgba(238, 40, 0, 0.6)` }}>
                <FontAwesomeIcon icon={faSun} fade />
            </div>
        )
    } else if (icon === '01n') {
        return (
            <div style={{ color: `rgba(25, 25, 112, 0.6)` }}>
                <FontAwesomeIcon icon={faMoon} />
            </div>
        )
    } else if (icon === '02d') {
        return (
            <div style={{ color: `rgba(238, 40, 0, 0.6)` }}>
                <FontAwesomeIcon icon={faCloudSun} />
            </div>
        )
    } else if (icon === '02n') {
        return (
            <div style={{ color: `rgba(25, 25, 112, 0.6)` }}>
                <FontAwesomeIcon icon={faCloudMoon} />
            </div>
        )
    } else if (icon === '03d' || icon === '04d') {
        return (
            <div style={{ color: `rgba(128, 128, 128, 0.6)` }}>
                <FontAwesomeIcon icon={faCloud} />
            </div>
        )
    } else if (icon === '03n' || icon === '04n') {
        return (
            <div style={{ color: `rgba(25, 25, 112, 0.6)` }}>
                <FontAwesomeIcon icon={faCloud} />
            </div>
        )
    } else if (icon === '09d') {
        return (
            <div style={{ color: `rgba(128, 128, 128, 0.6)` }}>
                <FontAwesomeIcon icon={faCloudSunRain} />
            </div>
        )
    } else if (icon === '09n') {
        return (
            <div style={{ color: `rgba(25, 25, 112, 0.6)` }}>
                <FontAwesomeIcon icon={faCloudMoonRain} />
            </div>
        )
    } else if (icon === '10d') {
        return (
            <div style={{ color: `rgba(128, 128, 128, 0.6)` }}>
                <FontAwesomeIcon icon={faCloudRain} />
            </div>
        )
    } else if (icon === '10n') {
        return (
            <div style={{ color: `rgba(25, 25, 112, 0.6)` }}>
                <FontAwesomeIcon icon={faCloudRain} />
            </div>
        )
    } else if (icon === '11d') {
        return (
            <div style={{ color: `rgba(128, 128, 128, 0.6)` }}>
                <FontAwesomeIcon icon={faThunderstorm} />
            </div>
        )
    } else if (icon === '11n') {
        return (
            <div style={{ color: `rgba(25, 25, 112, 0.6)` }}>
                <FontAwesomeIcon icon={faThunderstorm} />
            </div>
        )
    } else if (icon === '13d') {
        return (
            <div style={{ color: `rgba(0, 163, 224, 0.6)` }}>
                <FontAwesomeIcon icon={faSnowflake} />
            </div>
        )
    } else if (icon === '13n') {
        return (
            <div style={{ color: `rgba(0, 163, 224, 0.6)` }}>
                <FontAwesomeIcon icon={faSnowflake} />
            </div>
        )
    } else if (icon === '50d') {
        return (
            <div style={{ color: `rgba(128, 128, 128, 0.6)` }}>
                <FontAwesomeIcon icon={faSmog} />
            </div>
        )
    } else if (icon === '50n') {
        return (
            <div style={{ color: `rgba(25, 25, 112, 0.6)` }}>
                <FontAwesomeIcon icon={faSmog} />
            </div>
        )
    } else {
        return <></>
    }
}
