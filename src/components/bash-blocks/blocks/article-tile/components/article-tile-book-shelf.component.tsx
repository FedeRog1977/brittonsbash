import { FC } from 'react'
import { formatItems, generateUniqueKey } from '../../../../../scripts'
import { Flex } from '../../../basics'
import { BookshelfProps, Bookshelf } from '../../../partials'
import { ArticleTileBookShelfProps } from '../article-tile.types'

export const ArticleTileBookShelf: FC<ArticleTileBookShelfProps> = ({
    items,
}) => {
    const formattedItems = formatItems(
        3,
        items ? items : []
    ) as BookshelfProps[][]

    return (
        <>
            {formattedItems.map((row) => (
                <Flex>
                    {row.map(({ heading, items }, index) => (
                        <Flex item key={generateUniqueKey(index)}>
                            <Bookshelf heading={heading} items={items} />
                        </Flex>
                    ))}
                </Flex>
            ))}
        </>
    )
}
