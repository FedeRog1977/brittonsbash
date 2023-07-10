import { MarginProps } from './margin-padding.types'

export type ImageProps = {
    url: string
    alt: string
    caption?: string
    inline?: boolean
    paragraphMargins?: boolean
} & MarginProps
