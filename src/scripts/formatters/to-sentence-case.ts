export function toSentenceCase(str: any) {
    return str.replace(/\w\S*/g, function (txt: any) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
}

export function toUpperCase(str: any) {
    return `${str.slice(0, 1).toUpperCase()}${str.slice(1)}` as Capitalize<any>
}
