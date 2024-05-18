import { FC, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronCircleLeft,
    faChevronCircleRight,
    faEject,
    faExchange,
} from '@fortawesome/free-solid-svg-icons'
import styles from './image-components.module.scss'
import { generateUniqueKey, useScreenWidth } from '../../../../scripts'
import { Typography } from '../../basics'
import { ImageSliderProps } from './image-components.types'
import { ImageProps } from '../../reference'

export const ImageSlider: FC<ImageSliderProps> = ({ slides }) => {
    const { isMobile } = useScreenWidth()

    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <div className={styles.imageSlider}>
            <FontAwesomeIcon
                icon={faExchange}
                className={styles.refresh}
                onClick={() => setCurrent(0)}
            />
            <FontAwesomeIcon
                icon={faChevronCircleLeft}
                className={styles.leftArrow}
                onClick={prevSlide}
            />
            <FontAwesomeIcon
                icon={faChevronCircleRight}
                className={styles.rightArrow}
                onClick={nextSlide}
            />
            {slides.map((slide, index) => {
                if (index === current) {
                    return (
                        <div>
                            {slide.description && (
                                <div className={styles.imageSliderCaption}>
                                    <Typography
                                        type={isMobile ? 'footnote' : 'body'}
                                        textAlign="left"
                                        color="white"
                                    >
                                        {slide.description}
                                    </Typography>
                                </div>
                            )}
                            <div className={styles.imageSliderIndex}>
                                <Typography
                                    type={isMobile ? 'footnote' : 'body'}
                                    color="white"
                                >{`${current + 1}/${
                                    slides.length
                                }`}</Typography>
                            </div>
                        </div>
                    )
                }

                return null
            })}
            {slides.map((slide, index) => (
                <div
                    key={generateUniqueKey(index)}
                    className={`${styles.imageSliderSlide} ${
                        index === current ? styles.imageSliderSlideActive : ''
                    }`}
                >
                    {slide.url ? (
                        <>
                            {index === current && (
                                <img
                                    className={styles.imageSliderImage}
                                    src={slide.url}
                                    alt={slide.alt}
                                />
                            )}
                        </>
                    ) : (
                        <>
                            <Typography type="h3">No Disc Loaded</Typography>
                            <Typography type="h4">
                                <>
                                    Insert Disc{' '}
                                    <FontAwesomeIcon
                                        icon={faEject}
                                        size="2xs"
                                    />
                                </>
                            </Typography>
                        </>
                    )}
                </div>
            ))}
        </div>
    )
}
