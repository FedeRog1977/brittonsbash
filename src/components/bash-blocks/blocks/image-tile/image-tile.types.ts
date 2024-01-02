import { GradientProps } from '../../basics'
import { ArticleProps } from '../../partials'
import { AlignProps, CtaProps, ImageProps } from '../../reference'

export type ImageTileProps = {
    img?: ImageProps
    gradient?: GradientProps
    heading: string
    subHeading?: string
    body?: string | ArticleProps['sections']
    ctas?: CtaProps[]
    textAlign?: AlignProps
    invert?: boolean
}
