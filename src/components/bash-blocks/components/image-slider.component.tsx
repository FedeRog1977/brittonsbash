import { useState } from 'react'
import '../styles/image-slider.styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronCircleLeft,
    faChevronCircleRight,
    faEject,
    faRedo,
} from '@fortawesome/free-solid-svg-icons'
import { ImageSliderProps, Typography } from '..'
import { useScreenWidth } from '../../../scripts'

export const ImageSlider: React.FC<ImageSliderProps> = ({
    ...props
}: ImageSliderProps) => {
    const { screenWidth, isMobile } = useScreenWidth()

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
        <div className="image-slider">
            <FontAwesomeIcon
                icon={faRedo}
                className="refresh"
                onClick={() => setCurrent(0)}
            />
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
            {props.slides.map((slide, index) => (
                <>
                    {index === current && (
                        <div key={index}>
                            {slide.description && (
                                <div className="image-slider-caption">
                                    <Typography
                                        type={isMobile ? 'body' : 'h4'}
                                        fontFamily="sans-serif"
                                        content={slide.description}
                                        textAlign="left"
                                        color="var(--white)"
                                    />
                                </div>
                            )}
                            <div className="image-slider-index">
                                <Typography
                                    type={isMobile ? 'footnote' : 'body'}
                                    content={
                                        <>
                                            {current + 1}/{props.slides.length}
                                        </>
                                    }
                                    color="var(--white)"
                                />
                            </div>
                        </div>
                    )}
                </>
            ))}
            {props.slides.map((slide, index) => (
                <div
                    key={index}
                    className={index === current ? 'slide active' : 'slide'}
                >
                    {slide.url ? (
                        <>
                            {index === current && (
                                <img
                                    className="image-slider-image"
                                    style={{
                                        width: isMobile ? screenWidth : '100%',
                                    }}
                                    src={slide.url}
                                    alt={slide.alt}
                                />
                            )}
                        </>
                    ) : (
                        <div style={{ textAlign: 'center' }}>
                            <Typography
                                type="h3"
                                content="No Disc Loaded"
                                textAlign="center"
                            />
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
                                textAlign="center"
                            />
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}