import React, { useState } from 'react'
import './styles/ImageSlider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronCircleLeft,
    faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons'
import Typography from '../elements/Typography'
import { useMobile } from '../../scripts/display/useMobile'
import { useScreenWidth } from '../../scripts/display/useScreenWidth'

const ImageSlider = ({ slides }: any) => {
    const isMobile = useMobile()
    const screenWidth = useScreenWidth()

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
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <div className="image-slider-container">
                                <img
                                    className="image-slider-image"
                                    style={{
                                        width: isMobile
                                            ? `${screenWidth}px`
                                            : `${screenWidth / 1.75}px`,
                                    }}
                                    src={slide.url}
                                    alt={slide.alt}
                                />
                                {slide.description && (
                                    <>
                                        <div className="image-slider-caption">
                                            <Typography
                                                type={isMobile ? 'body' : 'h4'}
                                                fontFamily="sans-serif"
                                                content={slide.description}
                                                textAlign="left"
                                                boldFace
                                                color="#FFFFFF"
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
                                                color="#FFFFFF"
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default ImageSlider
