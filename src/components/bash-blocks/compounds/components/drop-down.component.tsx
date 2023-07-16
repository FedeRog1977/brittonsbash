import { FC } from 'react'
import { Button, DropDownProps } from '../..'
import { Typography } from '../..'

export const DropDown: FC<DropDownProps> = ({ ...props }: DropDownProps) => (
    <Button
        type={props.buttonType}
        func={props.func}
        content={
            <>
                {props.funcResp === false && (
                    <Typography
                        type={props.typeType ? props.typeType : 'body'}
                        content={
                            <>
                                {props.content ? (
                                    <>{props.content}</>
                                ) : (
                                    <>Expand</>
                                )}
                            </>
                        }
                        mT={props.content ? 0 : 2.5}
                        mB={props.content ? 0 : 5}
                    />
                )}
                {props.funcResp === true && (
                    <Typography
                        type={props.typeType ? props.typeType : 'body'}
                        content={
                            <>
                                {props.content ? (
                                    <>{props.content}</>
                                ) : (
                                    <>Contract</>
                                )}
                            </>
                        }
                        color="var(--light-blue)"
                        mT={props.content ? 0 : 2.5}
                        mB={props.content ? 0 : 5}
                    />
                )}
            </>
        }
        subContent={props.subContent}
        textAlign={props.textAlign}
        dots={props.dots}
    />
)
