import { FC } from 'react'
import { Button, DropDownProps, Spacing } from '../..'
import { Typography } from '../..'
import { useScreenWidth } from '../../../../scripts'
import '../styles/drop-down.styles.css'

export const DropDown: FC<DropDownProps> = ({
    type,
    backgroundType,
    func,
    funcResp,
    content,
    subContent,
    textAlign,
    dots,
}: any) => (
    <Button
        type={`expand-${backgroundType}`}
        func={func}
        content={
            <>
                {funcResp === false && (
                    <Typography
                        type={type ? type : 'body'}
                        content={<>{content ? <>{content}</> : <>Expand</>}</>}
                    />
                )}
                {funcResp === true && (
                    <Typography
                        type={type ? type : 'body'}
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
