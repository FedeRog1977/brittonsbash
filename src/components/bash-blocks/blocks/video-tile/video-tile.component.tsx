import { useScreenWidth } from '../../../../scripts'
import { Tile, Typography } from '../../basics'
import { VideoTileProps } from './video-tile.types'

export const VideoTile: React.FC<VideoTileProps> = ({
    type = 'clear',
    anchor,
    heading,
    subHeading,
    video,
    controls = false,
}: VideoTileProps) => {
    const { isMobile } = useScreenWidth()

    return (
        <Tile type={type} anchor={anchor}>
            {subHeading && <Typography type="h2" content={subHeading} light />}
            {heading && (
                <Typography
                    type="h1"
                    content={heading}
                    light
                    paragraphMargins
                />
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
