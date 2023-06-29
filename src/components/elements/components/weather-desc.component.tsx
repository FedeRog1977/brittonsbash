import { Typography } from '../../bash-blocks'

export const WeatherDesc = ({ main, desc }: any) => (
    <>
        <Typography type="footnote" content={main} boldFace inline />
        <Typography type="footnote" content=": " inline />
        <Typography type="footnote" content={desc} inline />
    </>
)
