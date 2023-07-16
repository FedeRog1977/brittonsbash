import { FC } from 'react'
import { ImageMatrixProps, Typography } from '..'
import { useScreenWidth } from '../../../../scripts'
import { Flex } from './flex.component'

export const ImageMatrix: FC<ImageMatrixProps> = ({
    ...props
}: ImageMatrixProps) => {
    const { isMobile } = useScreenWidth()

    return (
        <>
            <Flex center>
                {props.items.map(({ url, alt, description }: any) => (
                    <Flex item key={alt}>
                        <img
                            style={{
                                width: isMobile ? '100%' : '100%',
                            }}
                            src={url}
                            alt={alt}
                        />
                        {description && (
                            <Typography
                                type="caption"
                                content={description}
                                textAlign="center"
                                mT={5}
                                mB={7.5}
                            />
                        )}
                    </Flex>
                ))}
            </Flex>
        </>
    )
}
