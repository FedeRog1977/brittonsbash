export function toFeet(elevation: number) {
    const elevationFormatted =
        elevation.toLocaleString('en-UK', { maximumFractionDigits: 0 }) + ' ft'

    return elevationFormatted
}
