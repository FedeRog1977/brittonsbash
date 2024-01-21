import { useState } from 'react'
import { VideoTileProps } from '../../../../bash-blocks'
import { miamiViceContent } from '../content'

export function useMiamiVice() {
    // ---
    // compileMiamiViceVideos():
    const compiledVideos: VideoTileProps[] = []

    miamiViceContent.tileOne.season1.forEach((video) => {
        compiledVideos.push(video)
    })
    miamiViceContent.tileOne.season2.forEach((video) => {
        compiledVideos.push(video)
    })
    miamiViceContent.tileOne.season3.forEach((video) => {
        compiledVideos.push(video)
    })
    miamiViceContent.tileOne.season4.forEach((video) => {
        compiledVideos.push(video)
    })
    miamiViceContent.tileOne.season5.forEach((video) => {
        compiledVideos.push(video)
    })
    // ---

    const allVideos = compiledVideos

    const [video, setVideo] = useState(allVideos[0])

    const handleSelect = (e: any) => {
        for (var i in allVideos) {
            const fullName = allVideos[i].heading

            if (fullName?.includes(e.currentTarget.value)) {
                setVideo(allVideos[i])
            }
        }
    }

    return {
        handleSelect,
        video,
    }
}
