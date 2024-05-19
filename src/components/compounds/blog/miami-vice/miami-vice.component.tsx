import { FC } from 'react'
import { VideoTile } from '../../../bash-blocks'
import { MiamiViceSearchTile } from './components/miami-vice-search-tile.component'
import { useMiamiVice } from './hooks/use-miami-vice.hook'

export const MiamiVice: FC = () => {
    const { handleSelect, video } = useMiamiVice()

    return (
        <>
            <MiamiViceSearchTile funcSelect={handleSelect} />
            <VideoTile
                type="solid"
                anchor="/blog/miami-vice/#result"
                heading={video.heading}
                subHeading={video.subHeading}
                video={video.video}
                controls
            />
        </>
    )
}
