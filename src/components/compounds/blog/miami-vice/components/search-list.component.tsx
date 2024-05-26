import { Button } from '../../../../bash-blocks'
import { generateUniqueKey, useScreenWidth } from '../../../../../scripts'
import { FC } from 'react'

export type SearchListProps = {
    funcSelect: (() => void) | ((e: any) => void)
    items: {
        heading?: string
        subHeading?: string
        video: string
    }[]
}

export const SearchList: FC<SearchListProps> = ({ funcSelect, items }) => {
    const { isMobile } = useScreenWidth()

    return (
        <>
            {items.map(({ heading, subHeading }, index) => (
                <Button
                    key={generateUniqueKey(index)}
                    variant="clear"
                    typeVariant={isMobile ? 'h4' : 'body'}
                    value={heading}
                    func={funcSelect}
                    // () => {
                    //     funcSelect
                    //     window.location.href = '#/blog/miami-vice/#result'
                    // }
                    content={heading}
                    subContent={subHeading}
                    subContentTop
                    width="quarter"
                    padding="coarse"
                />
            ))}
        </>
    )
}
