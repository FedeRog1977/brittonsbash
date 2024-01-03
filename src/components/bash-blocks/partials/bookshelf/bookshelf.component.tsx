import { useShowElement } from '../../../../scripts'
import { Spacing, Typography } from '../../basics'
import { Button } from '../button'
import { BookProps, BookshelfProps } from './bookshelf.types'

export const Bookshelf: React.FC<BookshelfProps> = ({
    ...props
}: BookshelfProps) => {
    const { showElement, setShowElement } = useShowElement()

    return (
        <>
            <Button
                typeType="h3"
                light
                type="regularClear"
                fill
                transition
                func={() => setShowElement(!showElement)}
                funcResp={showElement}
                content={props.heading}
            />
            {showElement &&
                props.items.map(({ content, url }: BookProps, index) => (
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
