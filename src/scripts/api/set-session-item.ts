export const setSessionItem = (storageId: string, data: [] | {}) => {
    sessionStorage.setItem(storageId, JSON.stringify(data))
}
