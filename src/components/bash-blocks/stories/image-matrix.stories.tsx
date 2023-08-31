import { ImageMatrix, Tile, Typography } from '..'
import { imageTestData } from '../../../data'

export const ImageMatrixStories = () => (
    <>
        <Tile type="clear">
            <Typography
                type="t1"
                fontFamily="sans-serif"
                content="Image Matrix"
                textAlign="center"
            />
        </Tile>
        <Tile type="solid">
            <Typography
                type="h1"
                fontFamily="sans-serif"
                content="Default"
                textAlign="center"
                paragraphMargins
            />
            <ImageMatrix items={imageTestData} />
        </Tile>
        <Tile type="solid">
            <Typography
                type="h1"
                fontFamily="sans-serif"
                content="Custom Columns"
                textAlign="center"
                paragraphMargins
            />
            <ImageMatrix items={imageTestData} columns={5} />
        </Tile>
    </>
)
