import {
    faBiking,
    faMountainSun,
    faWalking,
    faTrophy,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SportSearchTileProps } from '..'
import { useScreenWidth } from '../../../../../scripts'
import { Tile, Button, Grid } from '../../../../bash-blocks'

export const SportSearchTile: React.FC<SportSearchTileProps> = ({
    ...props
}: SportSearchTileProps) => {
    const { isMobile } = useScreenWidth()

    return (
        <Tile type="solid" top>
            <Grid alignColumns="auto auto" justifyItems="center">
                <Grid columnItem={[1, 4]}>
                    <Button
                        typeType="t2"
                        type="regularClear"
                        value="roadies"
                        func={props.funcSelect}
                        funcResp={props.isRoadies}
                        content={<FontAwesomeIcon icon={faBiking} />}
                        subContent="Roadies"
                        subContentTop={isMobile}
                        color="darkerGrey"
                    />
                </Grid>
                <Grid columnItem={[2, 4]}>
                    <Button
                        typeType="t2"
                        type="regularClear"
                        value="projects"
                        func={props.funcSelect}
                        funcResp={props.isProjects}
                        content={<FontAwesomeIcon icon={faMountainSun} />}
                        subContent="Projects"
                        subContentTop={isMobile}
                        color="darkerGrey"
                    />
                </Grid>
                <Grid columnItem={[3, 4]}>
                    <Button
                        typeType="t2"
                        type="regularClear"
                        value="miles"
                        func={props.funcSelect}
                        funcResp={props.isMiles}
                        content={<FontAwesomeIcon icon={faWalking} />}
                        subContent="Miles"
                        subContentTop={isMobile}
                        color="darkerGrey"
                    />
                </Grid>
                <Grid columnItem={[4, 4]}>
                    <Button
                        typeType="t2"
                        type="regularClear"
                        value="tennis"
                        func={() => {}}
                        funcResp={false}
                        content={<FontAwesomeIcon icon={faTrophy} />}
                        subContent="Tennis"
                        subContentTop={isMobile}
                        color="darkerGrey"
                    />
                </Grid>
            </Grid>
        </Tile>
    )
}
