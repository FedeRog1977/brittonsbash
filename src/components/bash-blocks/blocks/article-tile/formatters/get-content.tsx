import { FC } from 'react'
import { Body } from '../components/body.component'
import { Books } from '../components/books.component'
import { Images } from '../components/images.component'
import { Section } from '../types/section.type'

export const getContent: FC<Section> = (section) => (
    <>
        {section.component === 'body' && <Body {...section.content} />}
        {section.component === 'bookShelf' && <Books {...section.content} />}
        {section.component === 'imageMatrix' && <Images {...section.content} />}
    </>
)
