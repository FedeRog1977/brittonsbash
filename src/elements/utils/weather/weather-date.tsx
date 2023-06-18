export const WeatherDate = ({ dt }: any) => {
    const nday = new Date(dt * 1000).toLocaleDateString('en-uk', {
        day: 'numeric',
    })
    var suffix = ''

    // st: 1, 21, 31
    // nd: 2, 22
    // rd: 3, 23
    // th: 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24, 25, 26, 27, 28, 29, 30

    if (nday === '1' || nday === '21' || nday === '31') {
        suffix = 'st'
    } else if (nday === '2' || nday === '22') {
        suffix = 'nd'
    } else if (nday === '3' || nday === '23') {
        suffix = 'rd'
    } else if (
        nday.endsWith('0') ||
        nday.endsWith('4') ||
        nday.endsWith('5') ||
        nday.endsWith('6') ||
        nday.endsWith('7') ||
        nday.endsWith('8') ||
        nday.endsWith('9') ||
        nday === '11' ||
        nday === '12' ||
        nday === '13'
    ) {
        suffix = 'th'
    }

    return (
        <h4>
            {new Date(dt * 1000).toLocaleDateString('en-uk', {
                day: 'numeric',
            })}
            {suffix}&#160;Of&#160;
            {new Date(dt * 1000).toLocaleDateString('en-uk', { month: 'long' })}
        </h4>
    )
}
