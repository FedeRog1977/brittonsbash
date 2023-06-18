import { FC, ReactElement } from 'react'
import { Button } from '../..'
import { Typography } from '../..'
import '../styles/drop-down.styles.css'

type DropDownProps = {
    type?:
        | string
        | 't1'
        | 't2'
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'body'
        | 'caption'
        | 'footnote'
    backgroundType:
        | 'regular-clear'
        | 'dense-clear'
        | 'regular-solid'
        | 'dense-solid'
    func: () => void
    funcResp: boolean
    content?: string | ReactElement
}

export const DropDown: FC<DropDownProps> = ({
    type,
    backgroundType,
    func,
    funcResp,
    content,
}: any) => (
    <Button
        className={`expand-${backgroundType}`}
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
                        color="var(--font-3)"
                    />
                )}
            </>
        }
    />
)
