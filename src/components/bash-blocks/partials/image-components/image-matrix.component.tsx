import { formatItems } from '../../../../scripts'
import styles from './image-components.module.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Flex, Typography } from '../../basics'
import { ImageProps } from '../../reference'
import { ImageMatrixProps } from './image-components.types'
import Markdown from 'markdown-to-jsx'

export const ImageMatrix: React.FC<ImageMatrixProps> = ({
    ...props
}: ImageMatrixProps) => {
    const { formattedImageItems } = formatItems(
        props.columns ? props.columns : 3,
        props.items
    )

    return (
        <>
            {formattedImageItems.map((row: ImageProps[]) => (
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
