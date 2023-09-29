import {
    faBiking,
    faMountainSun,
    faWalking,
    faTrophy,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useScreenWidth } from '../../../../scripts'
import { Tile, Spacing, Button } from '../../../bash-blocks'

type SportSearchTileProps = {
    funcSelect: (e: any) => void
    isRoadies: boolean
    isProjects: boolean
    isMiles: boolean
}

export const SportSearchTile: React.FC<SportSearchTileProps> = ({
    ...props
}: SportSearchTileProps) => {
    const { isMobile } = useScreenWidth()

    return (
        <Tile type="solid" top>
            <Spacing
                mL={isMobile ? 0 : 70}
                mR={isMobile ? 0 : 70}
                textAlign="center"
            >
                <Button
                    typeType="t2"
                    buttonType="dense-clear"
                    value="roadies"
                    func={props.funcSelect}
                    funcResp={props.isRoadies}
                    content={<FontAwesomeIcon icon={faBiking} />}
                    subContent="Roadies"
                    color="darkerGrey"
                />
                <Button
                    typeType="t2"
                    buttonType="dense-clear"
                    value="projects"
                    func={props.funcSelect}
                    funcResp={props.isProjects}
                    content={<FontAwesomeIcon icon={faMountainSun} />}
                    subContent="Projects"
                    color="darkerGrey"
                />
                <Button
                    typeType="t2"
                    buttonType="dense-clear"
                    value="miles"
                    func={props.funcSelect}
                    funcResp={props.isMiles}
                    content={<FontAwesomeIcon icon={faWalking} />}
                    subContent="Miles"
                    color="darkerGrey"
                />
                <Button
                    typeType="t2"
                    buttonType="dense-clear"
                    value="tennis"
                    func={() => {}}
                    funcResp={false}
                    content={<FontAwesomeIcon icon={faTrophy} />}
                    subContent="Tennis"
                    color="darkerGrey"
                />
            </Spacing>
        </Tile>
    )
}
