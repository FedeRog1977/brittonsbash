export function toSentenceCase(str: string) {
    return str.replace(/\w\S*/g, function (txt: string) {
        return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
    })
}

export function toUpperCase(str: string) {
    return `${str.slice(0, 1).toUpperCase()}${str.slice(1)}` as Capitalize<any>
}
