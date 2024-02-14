import { TileProps } from '../../basics'

export type VideoTileProps = {
    type?: TileProps['type']
    anchor?: string
    heading?: string
    subHeading?: string
    video: string
    controls?: boolean
}
