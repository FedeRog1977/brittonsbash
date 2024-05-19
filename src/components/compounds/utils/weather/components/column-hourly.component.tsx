import {
    toDate,
    toPrecipitation,
    toBearing,
    toSpeed,
} from '../../../../../scripts'
import { Flex, Grid, Spacing, Typography } from '../../../../bash-blocks'
import { Icon } from './icon.component'
import { Temperature } from './temperature.component'

export const ColumnHourly = ({
    dt,
    icon,
    temp,
    tempFl,
    pop,
    windDeg,
    windSpd,
    windGst,
    pressure,
    humidity,
    dp,
    vb,
    uvi,
}: any) => {
    // App props
    const { hour } = toDate(dt)
    const precipitation = toPrecipitation(pop)
    const {
        bearingFormatted: bearing,
        bearingCompass,
        bearingArrow,
    } = toBearing(windDeg)
    const speed = toSpeed(windSpd, true)
    const gusts = toSpeed(windGst, true)

    return (
        <>
            <Spacing pY={20} textAlign="center">
                <Typography type="h4" paragraphMargins>
                    {hour}
                </Typography>
                <Typography type="h1" paragraphMargins>
                    <Icon icon={icon} />
                </Typography>
                <Typography type="body">{precipitation}</Typography>
            </Spacing>
            <Spacing pY={20}>
                <Grid alignColumns="auto">
                    <Grid columnItem={[1, 2]}>
                        <Temperature temp={temp} />
                    </Grid>
                    <Grid columnItem={[1, 2]}>
                        <Temperature temp={tempFl} suffix="(FL)" />
                    </Grid>
                </Grid>
            </Spacing>
            <Spacing pY={20} textAlign="center">
                <Typography type="body">{bearingCompass}</Typography>
                <Typography type="body">{bearingArrow}</Typography>
                <Typography type="footnote">{bearing}</Typography>
                <Typography type="footnote" boldFace>
                    {speed}
                </Typography>
                <Typography type="footnote" boldFace>
                    {gusts + ' gusts'}
                </Typography>
            </Spacing>
            <Spacing pY={20} textAlign="center">
                <Flex>
                    <Flex item>
                        <Spacing textAlign="center" mR={2.5}>
                            <Typography
                                type="footnote"
                                textAlign="right"
                                boldFace
                            >
                                Pressure:
                            </Typography>
                            <Typography
                                type="footnote"
                                textAlign="right"
                                boldFace
                            >
                                Humidity:
                            </Typography>
                            <Typography
                                type="footnote"
                                textAlign="right"
                                boldFace
                            >
                                Dew Pt.:
                            </Typography>
                            <Typography
                                type="footnote"
                                textAlign="right"
                                boldFace
                            >
                                Visibility:
                            </Typography>
                            <Typography
                                type="footnote"
                                textAlign="right"
                                boldFace
                            >
                                UV Index:
                            </Typography>
                        </Spacing>
                    </Flex>
                    <Flex item>
                        <Spacing textAlign="center" mL={2.5}>
                            <Typography type="footnote" textAlign="left">
                                {pressure + 'mb'}
                            </Typography>
                            <Typography type="footnote" textAlign="left">
                                {humidity + '%'}
                            </Typography>
                            <Typography type="footnote" textAlign="left">
                                {dp}
                            </Typography>
                            <Typography type="footnote" textAlign="left">
                                {vb / 100 + '%'}
                            </Typography>
                            <Typography type="footnote" textAlign="left">
                                {uvi}
                            </Typography>
                        </Spacing>
                    </Flex>
                </Flex>
            </Spacing>
        </>
    )
}
