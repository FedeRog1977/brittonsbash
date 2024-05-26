import { FC } from 'react'
import { useScreenWidth } from '../../../../scripts'
import { Tile, TileProps, Typography } from '../../basics'

export type VideoTileProps = {
    type?: TileProps['type']
    heading: string
    subHeading?: string
    video: string
    controls?: boolean
}

export const VideoTile: FC<VideoTileProps> = ({
    type = 'clear',
    heading,
    subHeading,
    video,
    controls = false,
}) => {
    const { isMobile } = useScreenWidth()

    return (
        <Tile type={type}>
            {subHeading && <Typography variant="h2">{subHeading}</Typography>}
            {heading && (
                <Typography variant="h1" paragraphMargins>
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
