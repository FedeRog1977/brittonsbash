import { ContentTileProps } from '.'
import { Tile, Typography } from '..'

export const ContentTile: React.FC<ContentTileProps> = ({
    ...props
}: ContentTileProps) => {
    return (
        <Tile type="solid" margins img={props.img} gradient={{ start: 'left' }}>
            <Typography
                type="t1"
                content={props.heading}
                textAlign={props.textAlign ? props.textAlign : 'center'}
                color="white"
                light
                shadow
                paragraphMargins
            />
            <Typography
                type="h4"
                content={props.subHeading}
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
