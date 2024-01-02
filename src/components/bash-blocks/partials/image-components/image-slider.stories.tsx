import { imageTestData } from '../../../../data'
import { Tile, Typography } from '../../basics'
import { ImageSlider } from '.'

export const ImageSliderStories = () => (
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
