export const WeatherDay = ({ dt }: any) => {
    const day = new Date(dt * 1000).toLocaleDateString('en-uk', {
        day: 'numeric',
    })

    return (
        <h2>
            {new Date(dt * 1000).toLocaleDateString('en-uk', {
                weekday: 'long',
            })}
        </h2>
    )
}
