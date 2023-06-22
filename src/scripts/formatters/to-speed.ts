export function toSpeed(speed: number) {
    const speedFormatted =
        speed.toLocaleString('en-UK', { maximumFractionDigits: 1 }) + 'mph'

    return speedFormatted
}
