export function ordnanceSurveyCall() {
    // Road 27700
    // const key = 'oV4hBtyHRKqV0tc61eylt8s7bxypAHkt';
    // const prefix = 'https://api.os.uk/maps/raster/v1/zxy/';
    // const apiUrl = `${urlPrefix}Leisure_27700/{z}/{x}/{y}.png?key=${urlKey}`

    // Outdoor 3857
    const key = 'VfSaBhJrLbr7vR7GLkAAGH02AZM6lzkP'
    const prefix = 'https://api.os.uk/maps/raster/v1/zxy/'
    const apiUrl = `${prefix}Outdoor_3857/{z}/{x}/{y}.png?key=${key}`

    // Open Street Maps 3857
    // const apiUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

    return apiUrl
}