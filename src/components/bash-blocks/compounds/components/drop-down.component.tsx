import { FC } from 'react'
import { Button, DropDownProps } from '../..'
import { Typography } from '../..'

export const DropDown: FC<DropDownProps> = ({
    typeType,
    buttonType,
    func,
    funcResp,
    content,
    subContent,
    textAlign,
    dots,
}: any) => (
    <Button
        type={buttonType}
        func={func}
        content={
            <>
                {funcResp === false && (
                    <Typography
                        type={typeType ? typeType : 'body'}
                        content={<>{content ? <>{content}</> : <>Expand</>}</>}
                    />
                )}
                {funcResp === true && (
                    <Typography
                        type={typeType ? typeType : 'body'}
                        content={
                            <>{content ? <>{content}</> : <>Contract</>}</>
                        }
                        color="var(--light-blue)"
                    />
                )}
            </>
        }
        subContent={subContent}
        textAlign={textAlign}
        dots={dots}
    />
)
