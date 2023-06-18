export function toMiles(distance: number) {
    const distanceFormatted =
        distance.toLocaleString('en-UK', { minimumFractionDigits: 2 }) + ' mi'

    return distanceFormatted
}
