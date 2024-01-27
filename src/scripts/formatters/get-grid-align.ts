export const getGridAlign = (array: any[]) => {
    const handleAlign: string[] = []
    array?.forEach(() => handleAlign.push('1fr'))

    return handleAlign.join(' ')
}
