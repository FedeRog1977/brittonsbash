export const getGridAlign = (
    array: any[],
    leftWidth?: string,
    rightWidth?: string
) => {
    const rightWidths: string[] = [];

    for (var i in array) {
        rightWidths.push(rightWidth ?? '1fr');
    }

    return `${leftWidth ?? ''}${rightWidths.join(' ')}`;
};
