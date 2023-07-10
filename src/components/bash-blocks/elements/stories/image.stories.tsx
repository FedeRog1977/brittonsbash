import { imageSliderTestData } from '../../../../data'
import { Tile } from '../..'
import { Image, Typography } from '..'

export const ImageStories = () => (
    <>
        <Tile type="clear-condensed" top>
            <Typography
                type="t1"
                fontFamily="sans-serif"
                content="Image"
                textAlign="center"
                paragraphMargins
            />
        </Tile>
        <Tile type="solid">
            <Image
                url={imageSliderTestData[0].url}
                alt={imageSliderTestData[0].alt}
                caption={imageSliderTestData[0].description}
            />
        </Tile>
    </>
)
