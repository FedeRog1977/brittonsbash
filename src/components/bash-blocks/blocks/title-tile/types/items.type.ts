import { Url } from '../../../reference'

type Link = {
    content: string
} & Url

export type Items = {
    content: string
    subContent: Link
}
