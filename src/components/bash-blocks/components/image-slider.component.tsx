import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronCircleLeft,
    faChevronCircleRight,
    faEject,
    faExchange,
} from '@fortawesome/free-solid-svg-icons'
import { ImageProps, ImageSliderProps, Typography } from '..'
import { useScreenWidth } from '../../../scripts'
import styles from '../styles/image.module.scss'

export const ImageSlider: React.FC<ImageSliderProps> = ({
    ...props
}: ImageSliderProps) => {
    const { isMobile } = useScreenWidth()

    const [current, setCurrent] = useState(0)
    const length = props.slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(props.slides) || props.slides.length <= 0) {
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
            {props.slides.map((slide: ImageProps, index: number) => {
                if (index === current) {
                    return (
                        <div key={index}>
                            {slide.description && (
                                <div className={styles.imageSliderCaption}>
                                    <Typography
                                        type={isMobile ? 'body' : 'h4'}
                                        fontFamily="sansSerif"
                                        content={slide.description}
                                        textAlign="left"
                                        color="white"
                                    />
                                </div>
                            )}
                            <div className={styles.imageSliderIndex}>
                                <Typography
                                    type={isMobile ? 'footnote' : 'body'}
                                    content={`${current + 1}/${
                                        props.slides.length
                                    }`}
                                    color="white"
                                />
                            </div>
                        </div>
                    )
                }

                return null
            })}
            {props.slides.map((slide: ImageProps, index: number) => (
                <div
                    key={index}
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
                            <Typography type="h3" content="No Disc Loaded" />
                            <Typography
                                type="h4"
                                content={
                                    <>
                                        Insert Disc{' '}
                                        <FontAwesomeIcon
                                            icon={faEject}
                                            size="2xs"
                                        />
                                    </>
                                }
                            />
                        </>
                    )}
                </div>
            ))}
        </div>
    )
}
