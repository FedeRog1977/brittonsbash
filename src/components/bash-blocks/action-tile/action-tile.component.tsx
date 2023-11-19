import { ActionTileProps } from '.'
import { Spacing, Tile, Typography } from '..'

export const ActionTile: React.FC<ActionTileProps> = ({
    ...props
}: ActionTileProps) => {
    return (
        <Tile type="solid" margins img={props.img}>
            <Spacing mY={200}>
                <Typography
                    type="t1"
                    content={props.heading}
                    textAlign="left"
                    color="white"
                    light
                    shadow
                    paragraphMargins
                />
                <Typography
                    type="h4"
                    content={props.body}
                    textAlign="left"
                    color="white"
                    light
                    shadow
                    paragraphMargins
                />
                {props.children}
            </Spacing>
        </Tile>
    )
}
