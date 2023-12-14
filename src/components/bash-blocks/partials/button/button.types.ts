import { TypographyProps } from '../../basics'
import { ColorProps, LinkProps } from '../../reference'

export type ButtonProps = {
    typeType?: TypographyProps['type']
    light?: boolean
    type: 'regularClear' | 'regularSolid' | 'search' | 'inverse'
    fill?: boolean
    forceWidth?: number
    transition?: boolean
    value?: string
    func: (() => void) | ((e: any) => void)
    funcResp?: boolean
    link?: LinkProps['link']
    content?: string | React.ReactElement
    subContent?: string | React.ReactElement
    subContentTop?: boolean
    color?: ColorProps
    dense?: boolean
    coarsePadding?: boolean
    removePadding?: boolean
}
