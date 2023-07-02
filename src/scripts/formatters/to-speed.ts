export function toSpeed(speed: number, isKmh: boolean) {
    var speedFormatted = ''

    isKmh
        ? (speedFormatted =
              (speed * 2.23694).toLocaleString('en-UK', {
                  maximumFractionDigits: 0,
              }) + 'mph')
        : (speedFormatted =
              speed.toLocaleString('en-UK', { maximumFractionDigits: 1 }) +
              'mph')

    return speedFormatted
}
