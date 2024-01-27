export const handleGridAlign = (array: any[]) => {
    const handleAlign: string[] = []
    array?.forEach(() => handleAlign.push('1fr'))

    return handleAlign.join(' ')
}
