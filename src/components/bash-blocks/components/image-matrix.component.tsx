import { ImageMatrixProps, ImageProps, Typography } from '..'
import { formatItems } from '../../../scripts'
import { Flex } from './flex.component'
import styles from '../styles/image.module.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component'

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
                                    type="bodyLight"
                                    content={rowItem.description}
                                    textAlign="center"
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
