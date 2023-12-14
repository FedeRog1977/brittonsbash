import { formatItems } from '../../../../scripts'
import styles from './image.module.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Flex, Typography } from '../../basics'
import { ImageMatrixProps, ImageProps } from '.'

export const ImageMatrix: React.FC<ImageMatrixProps> = ({
    ...props
}: ImageMatrixProps) => {
    const formattedItems = formatItems(
        props.items,
        props.columns ? props.columns : 3
    )

    return (
        <>
            {formattedItems.map((row: ImageProps[]) => (
                <Flex>
                    {row.map((rowItem: ImageProps) => (
                        <Flex item key={rowItem.alt}>
                            <LazyLoadImage
                                className={styles.image}
                                src={rowItem.url}
                                alt={rowItem.alt}
                            />
                            {rowItem.description && (
                                <Typography
                                    type="body"
                                    content={rowItem.description}
                                    textAlign="center"
                                    light
                                    mT={3.75}
                                />
                            )}
                        </Flex>
                    ))}
                </Flex>
            ))}
        </>
    )
}
