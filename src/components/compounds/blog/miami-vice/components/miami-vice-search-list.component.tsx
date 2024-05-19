import { Button } from '../../../../bash-blocks'
import { generateUniqueKey, useScreenWidth } from '../../../../../scripts'
import { FC } from 'react'

export type MiamiViceSearchListProps = {
    funcSelect: (() => void) | ((e: any) => void)
    items: {
        heading?: string
        subHeading?: string
        video: string
    }[]
}

export const MiamiViceSearchList: FC<MiamiViceSearchListProps> = ({
    funcSelect,
    items,
}) => {
    const { isMobile } = useScreenWidth()

    return (
        <>
            {items.map(({ heading, subHeading }, index) => (
                <Button
                    key={generateUniqueKey(index)}
                    typeType={isMobile ? 'h4' : 'body'}
                    forceWidth={!isMobile ? 25 : 100}
                    value={heading}
                    link={{ url: '#/blog/miami-vice/#result' }}
                    func={funcSelect}
                    funcResp={false}
                    content={heading}
                    subContent={subHeading}
                    subContentTop
                    coarsePadding
                />
            ))}
        </>
    )
}
