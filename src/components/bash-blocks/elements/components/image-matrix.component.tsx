import { ImageMatrixProps, Typography } from '..'
import { useScreenWidth } from '../../../../scripts'
import { Flex } from './flex.component'

export const ImageMatrix: React.FC<ImageMatrixProps> = ({
    ...props
}: ImageMatrixProps) => {
    const { isMobile } = useScreenWidth()

    return (
        <>
            <Flex>
                {props.items
                    .slice(0, 3)
                    .map(({ url, alt, description }: any) => (
                        <Flex item key={alt} center>
                            <img
                                style={{
                                    width: isMobile ? '100%' : '97.5%',
                                    textAlign: 'center',
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
            <Flex>
                {props.items
                    .slice(4, 7)
                    .map(({ url, alt, description }: any) => (
                        <Flex item key={alt} center>
                            <img
                                style={{
                                    width: isMobile ? '100%' : '97.5%',
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
