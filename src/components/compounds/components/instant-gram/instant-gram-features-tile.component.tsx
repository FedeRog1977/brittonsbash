import { FeaturesTileProps } from '../..'
import { Typography } from '../../../bash-blocks'

export const FeaturesTile: React.FC<FeaturesTileProps> = ({
    title,
    content,
}: FeaturesTileProps) => {
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
