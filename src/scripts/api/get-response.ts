import { setSessionItem } from './set-session-item'

export const getResponse = async (
    url: string,
    method: string,
    arrayKey?: string
) => {
    fetch(url, { method: method }).then((response) => {
        response
            .json()
            .then((data) => {
                Array.isArray(data)
                    ? setSessionItem(`response-${arrayKey}`, data)
                    : Object.keys(data).filter((key) => {
                          setSessionItem(`response-${key}`, data[key])
                      })

                console.log(data)
            })
            .catch((error: Error) => {
                console.log(error)
            })
    })
}
