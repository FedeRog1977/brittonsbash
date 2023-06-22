import { FC } from 'react'
import { Button, DropDownProps } from '../..'
import { Typography } from '../..'
import { useMobile } from '../../../../scripts'
import '../styles/drop-down.styles.css'

export const DropDown: FC<DropDownProps> = ({
    type,
    backgroundType,
    func,
    funcResp,
    content,
    subContent,
    textAlign,
    borders,
}: any) => {
    const isMobile = useMobile()

    return (
        <Button
            type={`expand-${backgroundType}`}
            func={func}
            content={
                <>
                    {subContent && (
                        <div style={{ float: isMobile ? 'none' : 'left' }}>
                            <Typography
                                type="h5"
                                color="var(--medium-grey)"
                                content={subContent}
                                mT={
                                    textAlign === 'right'
                                        ? isMobile
                                            ? '0'
                                            : '5px'
                                        : '0'
                                }
                                mL={
                                    textAlign === 'right'
                                        ? isMobile
                                            ? '0'
                                            : '10px'
                                        : '0'
                                }
                            />
                        </div>
                    )}
                    {funcResp === false && (
                        <Typography
                            type={type ? type : 'body'}
                            content={
                                <>{content ? <>{content}</> : <>Expand</>}</>
                            }
                            mR={
                                textAlign === 'right'
                                    ? isMobile
                                        ? '0'
                                        : '10px'
                                    : '0'
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
            textAlign={textAlign}
            borders={borders}
        />
    )
}
