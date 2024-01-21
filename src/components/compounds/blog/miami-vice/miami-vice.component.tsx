import { VideoTile } from '../../../bash-blocks'
import { MiamiViceSearchTile } from './components'
import { useMiamiVice } from './hooks/use-miami-vice.hook'

export const MiamiVice: React.FC = () => {
    const { handleSelect, video } = useMiamiVice()

    return (
        <>
            <MiamiViceSearchTile funcSelect={handleSelect} />
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
