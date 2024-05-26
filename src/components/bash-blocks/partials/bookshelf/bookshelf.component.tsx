import { FC } from 'react'
import { generateUniqueKey, useShowElement } from '../../../../scripts'
import { Spacing, Typography } from '../../basics'
import { Button } from '../button'
import { Book } from './types/book.type'

export type BookshelfProps = {
    heading: string
    items: Book[]
}

export const Bookshelf: FC<BookshelfProps> = ({ heading, items }) => {
    const { showElement, setShowElement } = useShowElement()

    return (
        <Spacing mY={20}>
            <Button
                variant="clear"
                typeVariant="h3"
                typeColor={showElement ? 'lightBlue' : undefined}
                transition
                func={() => setShowElement(!showElement)}
                content={heading}
                width="full"
            />
            {showElement &&
                items.map(({ content, url }, index) => (
                    <Spacing mY={20}>
                        <Typography
                            key={generateUniqueKey(index)}
                            type="body"
                            link={{ url: url, newTab: true }}
                        >
                            {content}
                        </Typography>
                    </Spacing>
                ))}
        </Spacing>
    )
}
