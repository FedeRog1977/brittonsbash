export function toMiles(distance) {
    const distanceFormatted =
        distance.toLocaleString(
            "en-UK",
            { minimumFractionDigits: 2 }
        ) + 'mi';

    return distanceFormatted;
}