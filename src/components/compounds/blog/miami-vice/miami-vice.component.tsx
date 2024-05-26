import { FC } from 'react'
import { VideoTile } from '../../../bash-blocks'
import { SearchTile } from './components/search-tile.component'
import { useMiamiVice } from './hooks/use-miami-vice.hook'

export const MiamiVice: FC = () => {
    const { handleSelect, video } = useMiamiVice()

    return (
        <>
            <SearchTile funcSelect={handleSelect} />
            <VideoTile
                type="solid"
                heading={video.heading}
                subHeading={video.subHeading}
                video={video.video}
                controls
            />
        </>
    )
}
