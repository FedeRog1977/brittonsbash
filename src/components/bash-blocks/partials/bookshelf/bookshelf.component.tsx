import { FC } from 'react'
import { generateUniqueKey, useShowElement } from '../../../../scripts'
import { Spacing, Typography } from '../../basics'
import { Button } from '../button'
import { BookProps, BookshelfProps } from './bookshelf.types'

export const Bookshelf: FC<BookshelfProps> = ({ heading, items }) => {
    const { showElement, setShowElement } = useShowElement()

    return (
        <Spacing mY={20}>
            <Button
                typeType="h3"
                light
                fill
                transition
                func={() => setShowElement(!showElement)}
                funcResp={showElement}
                content={heading}
            />
            {showElement &&
                items.map(({ content, url }: BookProps, index) => (
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
