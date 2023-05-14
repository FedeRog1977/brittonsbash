export function toFeet(elevation) {
    const elevationFormatted =
        elevation.toLocaleString(
            "en-UK",
            { maximumFractionDigits: 0 }
        ) + 'ft';

    return elevationFormatted;
}