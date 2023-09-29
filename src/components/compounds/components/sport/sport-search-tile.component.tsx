import {
    faBiking,
    faMountainSun,
    faWalking,
    faTrophy,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useScreenWidth } from '../../../../scripts'
import { Tile, Spacing, Button } from '../../../bash-blocks'

type SportSearchTileProps = {}

export const SportSearchTile: React.FC<SportSearchTileProps> = () => {
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
                    func={() => {}}
                    funcResp={false}
                    content={<FontAwesomeIcon icon={faBiking} />}
                    subContent="Roadies"
                    color="darkerGrey"
                />
                <Button
                    typeType="t2"
                    buttonType="dense-clear"
                    func={() => {}}
                    funcResp={false}
                    content={<FontAwesomeIcon icon={faMountainSun} />}
                    subContent="Projects"
                    color="darkerGrey"
                />
                <Button
                    typeType="t2"
                    buttonType="dense-clear"
                    func={() => {}}
                    funcResp={false}
                    content={<FontAwesomeIcon icon={faWalking} />}
                    subContent="Miles"
                    color="darkerGrey"
                />
                <Button
                    typeType="t2"
                    buttonType="dense-clear"
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
