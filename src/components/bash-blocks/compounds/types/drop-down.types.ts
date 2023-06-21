import { TypographyProps } from '../..'

export type DropDownProps = {
    type?: TypographyProps['type']
    backgroundType:
        | 'regular-clear'
        | 'dense-clear'
        | 'regular-solid'
        | 'dense-solid'
    func: () => void
    funcResp: boolean
    content?: string | React.ReactElement
}
