import { useState } from 'react'
import '../styles/image-slider.styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronCircleLeft,
    faChevronCircleRight,
    faEject,
} from '@fortawesome/free-solid-svg-icons'
import { Typography } from '../..'
import { useScreenWidth } from '../../../../scripts'

export const ImageSlider = ({ slides }: any) => {
    const { screenWidth, isMobile } = useScreenWidth()
    const photoWidth = screenWidth / 1.875

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
        <div className="image-slider">
            <FontAwesomeIcon
                icon={faChevronCircleLeft}
                className="left-arrow"
                onClick={prevSlide}
            />
            <FontAwesomeIcon
                icon={faChevronCircleRight}
                className="right-arrow"
                onClick={nextSlide}
            />
            {slides.map((slide, index) => {
                return (
                    <div
                        key={index}
                        className={index === current ? 'slide active' : 'slide'}
                    >
                        {slide.url ? (
                            <>
                                {index === current && (
                                    <div className="image-slider-container">
                                        <img
                                            className="image-slider-image"
                                            style={{
                                                width: isMobile
                                                    ? `${screenWidth}px`
                                                    : `${photoWidth}px`,
                                            }}
                                            src={slide.url}
                                            alt={slide.alt}
                                        />
                                        {slide.description && (
                                            <>
                                                <div className="image-slider-caption">
                                                    <Typography
                                                        type={
                                                            isMobile
                                                                ? 'body'
                                                                : 'h4'
                                                        }
                                                        fontFamily="sans-serif"
                                                        content={
                                                            slide.description
                                                        }
                                                        textAlign="left"
                                                        color="var(--white)"
                                                    />
                                                </div>
                                                <div className="image-slider-index">
                                                    <Typography
                                                        type={
                                                            isMobile
                                                                ? 'footnote'
                                                                : 'body'
                                                        }
                                                        content={
                                                            <>
                                                                {current + 1}/
                                                                {slides.length}
                                                            </>
                                                        }
                                                        color="var(--white)"
                                                    />
                                                </div>
                                            </>
                                        )}
                                    </div>
                                )}
                            </>
                        ) : (
                            <Typography
                                type="h3"
                                content={
                                    <>
                                        No Disc Inserted{' '}
                                        <FontAwesomeIcon
                                            icon={faEject}
                                            size="2xs"
                                        />
                                    </>
                                }
                            />
                        )}
                    </div>
                )
            })}
        </div>
    )
}
