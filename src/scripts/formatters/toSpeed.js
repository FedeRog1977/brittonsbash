export function toSpeed(speed) {
    const speedFormatted =
        speed.toLocaleString('en-UK', { maximumFractionDigits: 1 }) + 'mph'

    return speedFormatted
}
