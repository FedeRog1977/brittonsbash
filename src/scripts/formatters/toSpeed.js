export function toSpeed(speed) {
    const speedFormatted =
        speed.toLocaleString('en-UK', { minimumFractionDigits: 1 }) + 'mph'

    return speedFormatted
}
