import { FC } from 'react'
import { Button, DropDownProps } from '../..'
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
}: any) => {
    const { isMobile } = useScreenWidth()

    return (
        <Button
            type={`expand-${backgroundType}`}
            func={func}
            content={
                <>
                    {funcResp === false && (
                        <Typography
                            type={type ? type : 'body'}
                            content={
                                <>{content ? <>{content}</> : <>Expand</>}</>
                            }
                        />
                    )}
                    {funcResp === true && (
                        <Typography
                            type={type ? type : 'body'}
                            content={
                                <>{content ? <>{content}</> : <>Contract</>}</>
                            }
                            color="var(--light-blue)"
                            mR={
                                textAlign === 'right'
                                    ? isMobile
                                        ? '0'
                                        : '10px'
                                    : '0'
                            }
                        />
                    )}
                </>
            }
            subContent={subContent}
            textAlign={textAlign}
            dots={dots}
        />
    )
}
