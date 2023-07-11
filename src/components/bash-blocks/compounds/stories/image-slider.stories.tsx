import { imageTestData } from '../../../../data'
import { Typography } from '../..'
import { ImageSlider, Tile } from '..'
import { useScreenWidth } from '../../../../scripts'

export const ImageSliderStories = () => {
    const { isMobile } = useScreenWidth()

    return (
        <>
            <Tile type="clear-condensed">
                <Typography
                    type="t1"
                    fontFamily="sans-serif"
                    content="Image Slider"
                    textAlign="center"
                    paragraphMargins
                />
            </Tile>
            <Tile type="solid" dense={isMobile && true}>
                <ImageSlider slides={imageTestData} />
            </Tile>
        </>
    )
}
