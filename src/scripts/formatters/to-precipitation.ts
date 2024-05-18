export const toPrecipitation = (precipitation: number) => {
    const precipitationFormatted = (precipitation * 100).toFixed(0) + '%'

    return precipitationFormatted
}
