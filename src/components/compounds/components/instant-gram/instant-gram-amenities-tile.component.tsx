import { AmenitiesTileProps } from '../..'
import { Typography } from '../../../bash-blocks'

export const AmenitiesTile: React.FC<AmenitiesTileProps> = ({
    title,
    content,
}: AmenitiesTileProps) => {
    return (
        <Typography
            type="body"
            content={
                <>
                    <Typography content={title} boldFace inline />
                    <Typography content={content} inline />
                </>
            }
            textAlign="center"
            paragraphMargins
        />
    )
}
