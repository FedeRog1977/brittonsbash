import { ImageProps } from '../../components/bash-blocks'

export function formatItems(items: ImageProps[], columns: number) {
    const itemsFormatted: ImageProps[][] = []

    for (let i = 0; i < items.length; i += columns) {
        itemsFormatted.push(items.slice(i, i + columns))
    }

    console.log('Unformatted Items:\n\n', items)
    console.log('Formatted Items:\n\n', itemsFormatted)
    return itemsFormatted
}
