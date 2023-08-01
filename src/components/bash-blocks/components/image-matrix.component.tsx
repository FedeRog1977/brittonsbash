import { ImageMatrixProps, ImageProps, Typography } from '..'
import { formatItems, useScreenWidth } from '../../../scripts'
import { Flex } from './flex.component'

export const ImageMatrix: React.FC<ImageMatrixProps> = ({
    ...props
}: ImageMatrixProps) => {
    const { isMobile } = useScreenWidth()

    const formattedItems = formatItems(
        props.items,
        props.columns ? props.columns : 3
    )

    return (
        <>
            {formattedItems.map((row: ImageProps[], index: number) => (
                <Flex key={index}>
                    {row.map((rowItem: ImageProps) => (
                        <Flex item key={rowItem.alt} center>
                            <img
                                style={{
                                    width:
                                        isMobile ||
                                        row.length === 1 ||
                                        props.columns === 1
                                            ? '100%'
                                            : '97.5%',
                                }}
                                src={rowItem.url}
                                alt={rowItem.alt}
                            />
                            {rowItem.description && (
                                <Typography
                                    type="caption"
                                    content={rowItem.description}
                                    textAlign="center"
                                    mT={5}
                                    mB={10}
                                />
                            )}
                        </Flex>
                    ))}
                </Flex>
            ))}
        </>
    )
}
