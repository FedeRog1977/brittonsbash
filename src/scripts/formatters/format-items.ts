import { BookshelfProps, ImageProps } from '../../components/bash-blocks'

export function formatItems(
    columns: number,
    imageItems?: ImageProps[],
    bookItems?: BookshelfProps[]
) {
    const formattedImageItems: ImageProps[][] = []
    const formattedBookItems: BookshelfProps[][] = []

    if (imageItems) {
        for (let i = 0; i < imageItems.length; i += columns) {
            formattedImageItems.push(imageItems.slice(i, i + columns))
        }
    } else if (bookItems) {
        for (let i = 0; i < bookItems.length; i += columns) {
            formattedBookItems.push(bookItems.slice(i, i + columns))
        }
    }

    console.log('Unformatted Image Items:\n\n', imageItems)
    console.log('Unformatted Book Items:\n\n', bookItems)
    console.log('Formatted Image Items:\n\n', formattedImageItems)
    console.log('Formatted Book Items:\n\n', formattedBookItems)
    return { formattedImageItems, formattedBookItems }
}
