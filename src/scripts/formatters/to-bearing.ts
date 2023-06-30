export function toBearing(bearing: number) {
    var bearingFormatted = ''

    if (bearing >= 348.76) {
        bearingFormatted = 'N'
    } else if (bearing >= 0 && bearing <= 11.25) {
        bearingFormatted = 'N'
    } else if (bearing >= 11.26 && bearing <= 33.75) {
        bearingFormatted = 'N/NE'
    } else if (bearing >= 33.76 && bearing <= 56.25) {
        bearingFormatted = 'NE'
    } else if (bearing >= 56.26 && bearing <= 78.75) {
        bearingFormatted = 'E/NE'
    } else if (bearing >= 78.76 && bearing <= 101.25) {
        bearingFormatted = 'E'
    } else if (bearing >= 101.26 && bearing <= 123.75) {
        bearingFormatted = 'E/SE'
    } else if (bearing >= 123.76 && bearing <= 146.25) {
        bearingFormatted = 'SE'
    } else if (bearing >= 146.26 && bearing <= 168.75) {
        bearingFormatted = 'S/SE'
    } else if (bearing >= 168.76 && bearing <= 191.25) {
        bearingFormatted = 'S'
    } else if (bearing >= 191.26 && bearing <= 213.75) {
        bearingFormatted = 'S/SW'
    } else if (bearing >= 213.76 && bearing <= 236.25) {
        bearingFormatted = 'SW'
    } else if (bearing >= 236.26 && bearing <= 258.75) {
        bearingFormatted = 'W/SW'
    } else if (bearing >= 258.76 && bearing <= 281.25) {
        bearingFormatted = 'W'
    } else if (bearing >= 281.26 && bearing <= 303.75) {
        bearingFormatted = 'W/NW'
    } else if (bearing >= 303.76 && bearing <= 326.25) {
        bearingFormatted = 'NW'
    } else if (bearing >= 326.26 && bearing <= 348.75) {
        bearingFormatted = 'N/NW'
    }

    return bearingFormatted
}
