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
            {/* <Search func={props.funcInput} placeholder="Search Events" />
            <Button
                type="search"
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
            /> */}
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
        </Tile>
    )
}
