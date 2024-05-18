import { ElementType } from 'react'
import { Text } from '../../../reference/'

export const tagType: Record<Text['type'], ElementType> = {
    t1: 'h1',
    t2: 'h2',
    h1: 'h3',
    h2: 'h4',
    h3: 'h5',
    h4: 'h6',
    body: 'p',
    caption: 'p',
    footnote: 'p',
    tiny: 'p',
}
