import { BodyProps } from '../components/body.component'
import { BooksProps } from '../components/books.component'
import { ImagesProps } from '../components/images.component'

type OrderedSection<T extends string, P extends object> = {
    component: T
    content: P
}

export type Section =
    | OrderedSection<'body', BodyProps>
    | OrderedSection<'bookShelf', BooksProps>
    | OrderedSection<'imageMatrix', ImagesProps>
