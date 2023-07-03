import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useScreenWidth } from '../../../scripts'
import {
    Button,
    Search,
    SearchList,
    Spacing,
    Tile,
    Typography,
} from '../../bash-blocks'
import { hillData } from '../../../data'

export const WeatherSearchTile = ({
    funcSelect,
    funcInput,
    funcButton,
}: any) => {
    const { isMobile } = useScreenWidth()

    return (
        <Tile type="solid" top>
            <Spacing
                mL={isMobile ? 0 : 70}
                mR={isMobile ? 0 : 70}
                mB={isMobile ? 7.5 : 15}
            >
                <Search
                    className="search"
                    func={funcInput}
                    placeholder="Search Hills"
                />
                <Button
                    type="search"
                    func={funcButton}
                    content={
                        <>
                            {isMobile ? (
                                <Typography
                                    type="body"
                                    content={
                                        <FontAwesomeIcon icon={faSearch} />
                                    }
                                    color="var(--white)"
                                />
                            ) : (
                                <Typography
                                    type="body"
                                    content="Search"
                                    color="var(--white)"
                                />
                            )}
                        </>
                    }
                />
            </Spacing>
            <Spacing mL={isMobile ? 0 : 70} mR={isMobile ? 0 : 70}>
                <SearchList
                    className="search"
                    func={funcSelect}
                    content={hillData.munros}
                    placeholder="Munro"
                />
                <SearchList
                    className="search"
                    func={funcSelect}
                    content={hillData.corbetts}
                    placeholder="Corbett"
                />
            </Spacing>
        </Tile>
    )
}
