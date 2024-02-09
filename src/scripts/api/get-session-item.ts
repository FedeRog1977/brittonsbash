export const getSessionItem = (storageId: string) => {
    return JSON.parse(sessionStorage.getItem(storageId) as string)
}
