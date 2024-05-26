import { FC } from 'react'
import { useScreenWidth } from '../../../../scripts'
import { Anchor, Tile, TileProps, Typography } from '../../basics'

export type VideoTileProps = {
    type?: TileProps['type']
    anchor?: string
    heading?: string
    subHeading?: string
    video: string
    controls?: boolean
}

export const VideoTile: FC<VideoTileProps> = ({
    type = 'clear',
    anchor,
    heading,
    subHeading,
    video,
    controls = false,
}) => {
    const { isMobile } = useScreenWidth()

    return (
        <Tile type={type}>
            {anchor ? <Anchor id={anchor} /> : null}
            {subHeading && <Typography type="h2">{subHeading}</Typography>}
            {heading && (
                <Typography type="h1" paragraphMargins>
                    {heading}
                </Typography>
            )}
            <iframe
                frameBorder="none"
                width="100%"
                height={isMobile ? '250px' : '750px'}
                src={`https://www.youtube.com/embed/${video}${
                    controls ? '' : '?controls=0'
                }`}
            />
        </Tile>
    )
}
