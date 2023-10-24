import { ActionTileProps } from '.'
import { Spacing, Tile, Typography } from '..'

export const ActionTile: React.FC<ActionTileProps> = ({
    ...props
}: ActionTileProps) => {
    return (
        <Tile type="solid" margins img={props.img}>
            <Spacing mY={300}>
                <Typography
                    type="t1"
                    content={props.heading}
                    textAlign="center"
                    color="white"
                    shadow
                    paragraphMargins
                />
                <Typography
                    type="body"
                    content={props.body}
                    textAlign="justify"
                    color="white"
                    shadow
                    paragraphMargins
                />
                {props.children}
            </Spacing>
        </Tile>
    )
}
