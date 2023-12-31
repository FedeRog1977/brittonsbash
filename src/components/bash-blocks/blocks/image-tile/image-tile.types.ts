import { ArticleProps } from '../../partials'
import { AlignProps } from '../../reference'
import { CtaProps } from '../../reference/types/cta.types'

export type ImageTileProps = {
    img?: string
    heading: string
    subHeading?: string
    body?: string | ArticleProps['sections']
    ctas: CtaProps[]
    textAlign?: AlignProps
}
