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
}: DropDownProps) => (
    <Button
        type={buttonType}
        func={func}
        content={
            <>
                {funcResp === false && (
                    <Typography
                        type={typeType ? typeType : 'body'}
                        content={<>{content ? <>{content}</> : <>Expand</>}</>}
                        mT={content ? 0 : 2.5}
                        mB={content ? 0 : 5}
                    />
                )}
                {funcResp === true && (
                    <Typography
                        type={typeType ? typeType : 'body'}
                        content={
                            <>{content ? <>{content}</> : <>Contract</>}</>
                        }
                        color="var(--light-blue)"
                        mT={content ? 0 : 2.5}
                        mB={content ? 0 : 5}
                    />
                )}
            </>
        }
        subContent={subContent}
        textAlign={textAlign}
        dots={dots}
    />
)
