import { Button, Search, Spacing, Tile } from '../../../../bash-blocks'
import { InstantGramSearchList } from '.'
import { eventData } from '../../../../../data'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useScreenWidth } from '../../../../../scripts'
import { InstantGramSearchTileProps } from '..'

export const InstantGramSearchTile: React.FC<InstantGramSearchTileProps> = ({
    ...props
}: InstantGramSearchTileProps) => {
    const { isMobile } = useScreenWidth()

    return (
        <Tile type="solid" top>
            {/* <Spacing
                mL={isMobile ? 0 : 70}
                mR={isMobile ? 0 : 70}
                mB={isMobile ? 7.5 : 15}
            >
                <Search
                    className="search"
                    func={props.funcInput}
                    placeholder="Search Events"
                />
                <Button
                    buttonType="search"
                    func={props.funcButton}
                    funcResp={false}
                    content={
                        <>
                            {isMobile ? (
                                <FontAwesomeIcon icon={faSearch} />
                            ) : (
                                'Search'
                            )}
                        </>
                    }
                    color="white"
                />
            </Spacing> */}
            <Spacing mL={isMobile ? 0 : 70} mR={isMobile ? 0 : 70}>
                <InstantGramSearchList
                    func={props.funcSelect}
                    items={eventData[2023]}
                    year="2023"
                    season="4"
                />
                <InstantGramSearchList
                    func={props.funcSelect}
                    items={eventData[2022]}
                    year="2022"
                    season="3"
                />
                <InstantGramSearchList
                    func={props.funcSelect}
                    items={eventData[2021]}
                    year="2021"
                    season="2"
                />
                <InstantGramSearchList
                    func={props.funcSelect}
                    items={eventData[2020]}
                    year="2020"
                    season="1"
                />
            </Spacing>
        </Tile>
    )
}
