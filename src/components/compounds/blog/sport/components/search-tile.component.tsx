import {
    faBiking,
    faMountainSun,
    faWalking,
    faTrophy,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'
import { useScreenWidth } from '../../../../../scripts'
import { Tile, Button, Grid } from '../../../../bash-blocks'

export type SearchTileProps = {
    funcCategory: (e: any) => void
    isRoadies: boolean
    isProjects: boolean
    isMiles: boolean
}

export const SearchTile: FC<SearchTileProps> = ({
    funcCategory,
    isRoadies,
    isProjects,
    isMiles,
}) => {
    const { isMobile } = useScreenWidth()

    return (
        <Tile type="solid">
            <Grid alignColumns="1fr 1fr 1fr 1fr" justifyItems="center">
                <Grid columnItem={[1, 4]}>
                    <Button
                        variant="clear"
                        typeVariant="t2"
                        typeColor={isRoadies ? 'lightBlue' : undefined}
                        value="roadies"
                        func={funcCategory}
                        content={<FontAwesomeIcon icon={faBiking} />}
                        subContent="Roadies"
                        subContentTop={isMobile}
                    />
                </Grid>
                <Grid columnItem={[2, 4]}>
                    <Button
                        variant="clear"
                        typeVariant="t2"
                        typeColor={isProjects ? 'lightBlue' : undefined}
                        value="projects"
                        func={funcCategory}
                        content={<FontAwesomeIcon icon={faMountainSun} />}
                        subContent="Projects"
                        subContentTop={isMobile}
                    />
                </Grid>
                <Grid columnItem={[3, 4]}>
                    <Button
                        variant="clear"
                        typeVariant="t2"
                        typeColor={isMiles ? 'lightBlue' : undefined}
                        value="miles"
                        func={funcCategory}
                        content={<FontAwesomeIcon icon={faWalking} />}
                        subContent="Miles"
                        subContentTop={isMobile}
                    />
                </Grid>
                <Grid columnItem={[4, 4]}>
                    <Button
                        variant="clear"
                        typeVariant="t2"
                        value="tennis"
                        content={<FontAwesomeIcon icon={faTrophy} />}
                        subContent="Tennis"
                        subContentTop={isMobile}
                    />
                </Grid>
            </Grid>
        </Tile>
    )
}
