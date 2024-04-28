import { Button } from '../../../../bash-blocks'
import { generateUniqueKey, useScreenWidth } from '../../../../../scripts'
import { MiamiViceSearchListProps } from '../types'

export const MiamiViceSearchList: React.FC<MiamiViceSearchListProps> = ({
    func,
    items,
}: MiamiViceSearchListProps) => {
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
                    func={func}
                    funcResp={false}
                    content={heading}
                    subContent={subHeading}
                    subContentTop
                    color="darkerGrey"
                    coarsePadding
                />
            ))}
        </>
    )
}
