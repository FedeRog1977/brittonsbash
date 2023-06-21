import { FC } from 'react'
import { Button, DropDownProps } from '../..'
import { Typography } from '../..'
import '../styles/drop-down.styles.css'

export const DropDown: FC<DropDownProps> = ({
    type,
    backgroundType,
    func,
    funcResp,
    content,
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
    />
)
