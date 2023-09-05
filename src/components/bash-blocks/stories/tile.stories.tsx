import { Tile, Typography } from '..'

export const TileStories = () => (
    <>
        <Tile type="clear" outline>
            <Typography
                type="t1"
                fontFamily="sans-serif"
                content="Tile"
                textAlign="center"
            />
        </Tile>
        <Tile type="clear" top outline>
            <Typography
                type="h1"
                fontFamily="sans-serif"
                content="Clear top tile"
                textAlign="center"
            />
            <Typography
                type="body"
                fontFamily="sans-serif"
                content="A border is used here to demonstrate bounds"
                textAlign="center"
            />
            <Typography
                type="body"
                fontFamily="sans-serif"
                content="Top tiles are used to remove space between the page heading and the first tile on mobile view"
                textAlign="center"
            />
        </Tile>
        <Tile type="clear" outline>
            <Typography
                type="h1"
                fontFamily="sans-serif"
                content="Clear tile"
                textAlign="center"
            />
            <Typography
                type="body"
                fontFamily="sans-serif"
                content="A border is used here to demonstrate bounds"
                textAlign="center"
            />
        </Tile>
        <Tile type="solid">
            <Typography
                type="h1"
                fontFamily="sans-serif"
                content="Solid tile"
                textAlign="center"
            />
        </Tile>
        <Tile type="solid" dense>
            <Typography
                type="h1"
                fontFamily="sans-serif"
                content="Solid dense tile"
                textAlign="center"
            />
            <Typography
                type="body"
                fontFamily="sans-serif"
                content="Dense tiles are used to remove padding on the x-axis and y-axis on desktop view, and on the x-axis on mobile view"
                textAlign="center"
            />
        </Tile>
        <Tile type="solid" noShadow>
            <Typography
                type="h1"
                fontFamily="sans-serif"
                content="Solid no-shadow tile"
                textAlign="center"
            />
        </Tile>
    </>
)