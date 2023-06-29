import { Typography } from '../../bash-blocks'

export const WeatherDay = ({ dt }: any) => {
    const day = new Date(dt * 1000).toLocaleDateString('en-uk', {
        day: 'numeric',
    })

    return (
        <Typography
            type="h4"
            content={
                <>
                    {new Date(dt * 1000).toLocaleDateString('en-uk', {
                        weekday: 'long',
                    })}
                </>
            }
        />
    )
}
