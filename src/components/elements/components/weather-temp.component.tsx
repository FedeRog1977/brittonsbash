import { Typography } from '../../bash-blocks'

export const WeatherTemp = ({ temp }: any) => (
    <Typography type="h4" content={<>{temp.toFixed(0)}&deg;</>} />
)
