import { Tile, Typography } from '..'
import { imageTestData } from '../../../data'

export const ImageStories = () => (
    <>
        <Tile type="clear" top>
            <Typography
                type="t1"
                fontFamily="sansSerif"
                content="Image"
                textAlign="center"
            />
        </Tile>
        <Tile type="solid">
            <Typography
                imageContent={{
                    url: imageTestData[0].url,
                    alt: imageTestData[0].alt,
                    description: imageTestData[0].description,
                }}
            />
        </Tile>
    </>
)
