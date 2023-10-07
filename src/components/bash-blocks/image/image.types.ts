export type ImageProps = {
    url: string
    alt: string
    description?: string
}

export type ImageMatrixProps = {
    items: ImageProps[]
    columns?: number
}

export type ImageSliderProps = {
    slides: ImageProps[]
}
