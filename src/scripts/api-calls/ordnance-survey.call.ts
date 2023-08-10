import { appendScript, appendStyle } from '..'

export function ordnanceSurveyCall() {
    appendStyle('https://unpkg.com/leaflet@1.9.4/dist/leaflet.css')
    appendStyle(
        'https://cdn.jsdelivr.net/gh/OrdnanceSurvey/os-api-branding@0.3.1/os-api-branding.css'
    )
    appendScript('https://unpkg.com/leaflet@1.9.4/dist/leaflet.js')
    appendScript(
        'https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.7.0/proj4.js'
    )
    appendScript(
        'https://cdnjs.cloudflare.com/ajax/libs/proj4leaflet/1.0.2/proj4leaflet.min.js'
    )
    appendScript(
        'https://cdn.jsdelivr.net/gh/OrdnanceSurvey/os-api-branding@0.3.1/os-api-branding.js'
    )
    appendScript(
        'https://cdn.jsdelivr.net/npm/@mapbox/togeojson@0.16.0/togeojson.min.js'
    )

    // Road 27700
    const key = 'VfSaBhJrLbr7vR7GLkAAGH02AZM6lzkP'
    const prefix = 'https://api.os.uk/maps/raster/v1/zxy/'
    const apiUrl = `${prefix}Leisure_27700/{z}/{x}/{y}.png?key=${key}`

    // Outdoor 3857
    // const key = 'VfSaBhJrLbr7vR7GLkAAGH02AZM6lzkP'
    // const prefix = 'https://api.os.uk/maps/raster/v1/zxy/'
    // const apiUrl = `${prefix}Outdoor_3857/{z}/{x}/{y}.png?key=${key}`

    // OpenStreetMap (Temporary)
    // const apiUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

    return apiUrl
}
