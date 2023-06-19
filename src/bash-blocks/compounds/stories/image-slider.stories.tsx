import { imageSliderTestData } from '../../../data'
import { Typography } from '../..'
import { ImageSlider, Tile } from '..'

export const ImageSliderStories = () => (
    <>
        <Tile type="clear-condensed">
            <>
                <Typography
                    type="t1"
                    fontFamily="sans-serif"
                    content="Image Slider"
                    textAlign="center"
                    paragraphMargins
                />
                <Typography
                    type="h1"
                    fontFamily="sans-serif"
                    content="With Description"
                    textAlign="center"
                    paragraphMargins
                />
            </>
        </Tile>
        <Tile type="solid">
            <ImageSlider slides={imageSliderTestData.withDesc} />
        </Tile>
        <Tile type="clear-condensed">
            <Typography
                type="h1"
                fontFamily="sans-serif"
                content="Without Description"
                textAlign="center"
                paragraphMargins
            />
        </Tile>
        <Tile type="solid">
            <ImageSlider slides={imageSliderTestData.withoutDesc} />
        </Tile>
    </>
)
