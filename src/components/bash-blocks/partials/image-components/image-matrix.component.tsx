import { formatItems } from '../../../../scripts'
import styles from './image-components.module.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Flex, Typography } from '../../basics'
import { ImageProps } from '../../reference'
import { ImageMatrixProps } from './image-components.types'

export const ImageMatrix: React.FC<ImageMatrixProps> = ({
    items,
    columns,
}: ImageMatrixProps) => {
    const formattedItems = formatItems(
        columns ? columns : 3,
        items
    ) as ImageProps[][]

    return (
        <>
            {formattedItems.map((row) => (
                <Flex>
                    {row.map(({ url, alt, description }) => (
                        <Flex item key={alt}>
                            <LazyLoadImage
                                className={styles.image}
                                src={url}
                                alt={alt}
                            />
                            {description && (
                                <Typography
                                    type="body"
                                    content={description}
                                    mT={3.75}
                                    mB={7.5}
                                />
                            )}
                        </Flex>
                    ))}
                </Flex>
            ))}
        </>
    )
}
