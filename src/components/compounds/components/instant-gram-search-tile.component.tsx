import { Button, Search, Spacing, Tile, Typography } from '../../bash-blocks'
import { InstantGramSearchList } from '../../elements'
import { eventData } from '../../../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useScreenWidth } from '../../../scripts'
import { FC } from 'react'
import { InstantGramSearchTileProps } from '..'

export const InstantGramSearchTile: FC<InstantGramSearchTileProps> = ({
    funcInput,
    funcButton,
    funcSelect,
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
                    placeholder="Search Events"
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
                <InstantGramSearchList
                    func={funcSelect}
                    items={eventData[2023]}
                    year="2023"
                    season="4"
                />
                <InstantGramSearchList
                    func={funcSelect}
                    items={eventData[2022]}
                    year="2022"
                    season="3"
                />
                <InstantGramSearchList
                    func={funcSelect}
                    items={eventData[2021]}
                    year="2021"
                    season="2"
                />
                <InstantGramSearchList
                    func={funcSelect}
                    items={eventData[2020]}
                    year="2020"
                    season="1"
                />
            </Spacing>
        </Tile>
    )
}