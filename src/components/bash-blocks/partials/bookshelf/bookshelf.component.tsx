import { useShowElement } from '../../../../scripts'
import { Spacing, Typography } from '../../basics'
import { Button } from '../button'
import { BookProps, BookshelfProps } from './bookshelf.types'

export const Bookshelf: React.FC<BookshelfProps> = ({
    heading,
    items,
}: BookshelfProps) => {
    const { showElement, setShowElement } = useShowElement()

    return (
        <>
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
                    <>
                        <Spacing mY={20} />
                        <Typography
                            key={index}
                            type="body"
                            content={content}
                            link={{ url: url, newTab: true }}
                        />
                    </>
                ))}
            <Spacing mY={20} />
        </>
    )
}
