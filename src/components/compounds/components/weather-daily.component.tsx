import { WeatherColumnDaily, WeatherHourly } from '.'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Button, Flex, Spacing } from '../../bash-blocks'
import {
    useDropDown,
    useOpenWeatherCall,
    useScreenWidth,
} from '../../../scripts'

export const WeatherDaily = ({ latIn, lonIn }: any) => {
    const { isMobile } = useScreenWidth()
    const { showDropDown, setShowDropDown } = useDropDown()
    const { dailyResult } = useOpenWeatherCall(latIn, lonIn)

    return (
        <>
            <Flex>
                {dailyResult.map((value, idx) => {
                    {
                        if (idx <= 6) {
                            return (
                                <Flex item>
                                    <WeatherColumnDaily
                                        key={idx}
                                        dt={value.dt}
                                        icon={value.weather[0].icon}
                                        temp={value.temp.day}
                                        pop={value.pop}
                                        desc={value.weather[0].description}
                                        sr={value.sunrise}
                                        ss={value.sunset}
                                        tempMax={value.temp.max}
                                        tempMin={value.temp.min}
                                        tempFlDay={value.feels_like.day}
                                        tempFlNight={value.feels_like.night}
                                        windDeg={value.wind_deg}
                                        windSpd={value.wind_speed}
                                        pressure={value.pressure}
                                        humidity={value.humidity}
                                        dp={value.dew_point}
                                        uvi={value.uvi}
                                    />
                                </Flex>
                            )
                        }
                    }
                })}
            </Flex>
            <Spacing mT={isMobile ? 7.5 : 15} mB={isMobile ? 7.5 : 15}>
                <Button
                    buttonType="regular-clear"
                    func={() => setShowDropDown(!showDropDown)}
                    funcResp={showDropDown}
                />
            </Spacing>
            {showDropDown && <WeatherHourly latIn={latIn} lonIn={lonIn} />}
        </>
    )
}
