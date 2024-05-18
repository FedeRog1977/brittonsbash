import {
    formatItems,
    generateUniqueKey,
    useShowElement,
} from '../../../../scripts'
import styles from './image-components.module.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Flex, Image, Spacing, Typography } from '../../basics'
import { ImageProps } from '../../reference'
import { ImageMatrixProps } from './image-components.types'
import { Modal } from '../../blocks'
import { FC, useState } from 'react'

export const ImageMatrix: FC<ImageMatrixProps> = ({ items, columns }) => {
    const formattedItems = formatItems(
        columns ? columns : 3,
        items
    ) as ImageProps[][]

    const { showElement: showModal, setShowElement: setShowModal } =
        useShowElement()

    const [image, setImage] = useState<ImageProps>()

    return (
        <>
            {formattedItems.map((row) => (
                <Flex>
                    {row.map(({ url, alt, description }, index) => (
                        <Flex item key={generateUniqueKey(index)}>
                            <a
                                onClick={() => {
                                    setImage({ url, alt, description })
                                    setShowModal(!showModal)
                                }}
                            >
                                <LazyLoadImage
                                    className={styles.image}
                                    src={url}
                                    alt={alt}
                                />
                            </a>
                            {description && (
                                <Spacing mY={15}>
                                    <Typography type="body">
                                        {description}
                                    </Typography>
                                </Spacing>
                            )}
                        </Flex>
                    ))}
                </Flex>
            ))}
            <Modal isOpen={showModal} onClose={() => setShowModal(!showModal)}>
                <Image {...(image as ImageProps)} />
            </Modal>
        </>
    )
}
