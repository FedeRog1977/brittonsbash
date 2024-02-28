import { formatItems } from '../../../../../scripts'
import { Flex } from '../../../basics'
import { BookshelfProps, Bookshelf } from '../../../partials'
import { ArticleTileBookShelfProps } from '../article-tile.types'

export const ArticleTileBookShelf: React.FC<ArticleTileBookShelfProps> = ({
    items,
}: ArticleTileBookShelfProps) => {
    const formattedItems = formatItems(
        3,
        items ? items : []
    ) as BookshelfProps[][]

    return (
        <>
            {formattedItems.map((row) => (
                <Flex>
                    {row.map(({ heading, items }, index) => (
                        <Flex item key={index}>
                            <Bookshelf heading={heading} items={items} />
                        </Flex>
                    ))}
                </Flex>
            ))}
        </>
    )
}
