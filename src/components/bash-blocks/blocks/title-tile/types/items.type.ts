import { Url } from '../../../reference'

type Link = {
    content: string
    link?: Url
}

export type Items = {
    content: string
    subContent: Link
}
