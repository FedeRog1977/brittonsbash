import { ContentTileProps } from '.'
import { Tile, Typography } from '..'
import { useScreenWidth } from '../../../scripts'

export const ContentTile: React.FC<ContentTileProps> = ({
    ...props
}: ContentTileProps) => {
    const { isMobile } = useScreenWidth()

    return (
        <Tile
            type="clear"
            margins={!isMobile}
            img={props.img}
            gradient={{ start: 'left' }}
        >
            <Typography
                type="h4"
                content={props.subHeading}
                textAlign={props.textAlign ? props.textAlign : 'center'}
                color="white"
                light
                shadow
            />
            <Typography
                type="t1"
                content={props.heading}
                textAlign={props.textAlign ? props.textAlign : 'center'}
                color="white"
                light
                shadow
                paragraphMargins
            />
            {props.body && (
                <Typography
                    type="body"
                    content={props.body}
                    textAlign="justify"
                    color="white"
                    light
                    shadow
                    paragraphMargins
                />
            )}
            {props.children}
        </Tile>
    )
}
