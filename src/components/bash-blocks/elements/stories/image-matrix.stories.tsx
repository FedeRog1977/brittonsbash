import { imageTestData } from '../../../../data'
import { Tile } from '../..'
import { ImageMatrix, Typography } from '..'

export const ImageMatrixStories = () => (
    <>
        <Tile type="clear-condensed" top>
            <Typography
                type="t1"
                fontFamily="sans-serif"
                content="Image Matrix"
                textAlign="center"
                paragraphMargins
            />
        </Tile>
        <Tile type="solid">
            <ImageMatrix items={imageTestData} />
        </Tile>
    </>
)
