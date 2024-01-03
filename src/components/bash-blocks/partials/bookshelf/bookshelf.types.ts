export type BookProps = {
    content: string
    url: string
}

export type BookshelfProps = {
    heading: string
    items: BookProps[]
}
