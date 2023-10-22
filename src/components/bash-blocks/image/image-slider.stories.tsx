import { ImageSlider, Tile, Typography } from '..'
import { imageTestData } from '../../../data'
import { useScreenWidth } from '../../../scripts'

export const ImageSliderStories = () => {
    const { isMobile } = useScreenWidth()

    return (
        <>
            <Tile type="clear">
                <Typography
                    type="t1"
                    fontFamily="sansSerif"
                    content="Image Slider"
                    textAlign="center"
                />
            </Tile>
            <Tile type="solid">
                <ImageSlider slides={imageTestData} />
            </Tile>
        </>
    )
}
