import { FC } from 'react'
import { useScreenWidth } from '../../../../scripts'
import { Tile, Typography } from '../../basics'
import { Anchor } from '../../basics/anchor'
import { VideoTileProps } from './video-tile.types'

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
            {anchor ? <Anchor url={anchor} /> : null}
            {subHeading && (
                <Typography type="h2" light>
                    {subHeading}
                </Typography>
            )}
            {heading && (
                <Typography type="h1" light paragraphMargins>
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
