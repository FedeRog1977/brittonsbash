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
import { WeatherIconProps } from '../..'

export const WeatherIcon: React.FC<WeatherIconProps> = ({
    ...props
}: WeatherIconProps) => {
    if (props.icon === '01d') {
        return (
            <div style={{ color: `rgba(238, 40, 0, 0.6)` }}>
                <FontAwesomeIcon icon={faSun} fade />
            </div>
        )
    } else if (props.icon === '01n') {
        return (
            <div style={{ color: `rgba(25, 25, 112, 0.6)` }}>
                <FontAwesomeIcon icon={faMoon} />
            </div>
        )
    } else if (props.icon === '02d') {
        return (
            <div style={{ color: `rgba(238, 40, 0, 0.6)` }}>
                <FontAwesomeIcon icon={faCloudSun} />
            </div>
        )
    } else if (props.icon === '02n') {
        return (
            <div style={{ color: `rgba(25, 25, 112, 0.6)` }}>
                <FontAwesomeIcon icon={faCloudMoon} />
            </div>
        )
    } else if (props.icon === '03d' || props.icon === '04d') {
        return (
            <div style={{ color: `rgba(128, 128, 128, 0.6)` }}>
                <FontAwesomeIcon icon={faCloud} />
            </div>
        )
    } else if (props.icon === '03n' || props.icon === '04n') {
        return (
            <div style={{ color: `rgba(25, 25, 112, 0.6)` }}>
                <FontAwesomeIcon icon={faCloud} />
            </div>
        )
    } else if (props.icon === '09d') {
        return (
            <div style={{ color: `rgba(128, 128, 128, 0.6)` }}>
                <FontAwesomeIcon icon={faCloudSunRain} />
            </div>
        )
    } else if (props.icon === '09n') {
        return (
            <div style={{ color: `rgba(25, 25, 112, 0.6)` }}>
                <FontAwesomeIcon icon={faCloudMoonRain} />
            </div>
        )
    } else if (props.icon === '10d') {
        return (
            <div style={{ color: `rgba(128, 128, 128, 0.6)` }}>
                <FontAwesomeIcon icon={faCloudRain} />
            </div>
        )
    } else if (props.icon === '10n') {
        return (
            <div style={{ color: `rgba(25, 25, 112, 0.6)` }}>
                <FontAwesomeIcon icon={faCloudRain} />
            </div>
        )
    } else if (props.icon === '11d') {
        return (
            <div style={{ color: `rgba(128, 128, 128, 0.6)` }}>
                <FontAwesomeIcon icon={faThunderstorm} />
            </div>
        )
    } else if (props.icon === '11n') {
        return (
            <div style={{ color: `rgba(25, 25, 112, 0.6)` }}>
                <FontAwesomeIcon icon={faThunderstorm} />
            </div>
        )
    } else if (props.icon === '13d') {
        return (
            <div style={{ color: `rgba(0, 163, 224, 0.6)` }}>
                <FontAwesomeIcon icon={faSnowflake} />
            </div>
        )
    } else if (props.icon === '13n') {
        return (
            <div style={{ color: `rgba(0, 163, 224, 0.6)` }}>
                <FontAwesomeIcon icon={faSnowflake} />
            </div>
        )
    } else if (props.icon === '50d') {
        return (
            <div style={{ color: `rgba(128, 128, 128, 0.6)` }}>
                <FontAwesomeIcon icon={faSmog} />
            </div>
        )
    } else if (props.icon === '50n') {
        return (
            <div style={{ color: `rgba(25, 25, 112, 0.6)` }}>
                <FontAwesomeIcon icon={faSmog} />
            </div>
        )
    } else {
        return <></>
    }
}
