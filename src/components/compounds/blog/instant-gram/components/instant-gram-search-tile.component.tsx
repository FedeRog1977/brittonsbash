import {
    Button,
    Grid,
    //  Search,
    Spacing,
    Tile,
} from '../../../../bash-blocks'
import { eventData } from '../../../../../data'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useScreenWidth, useShowElement } from '../../../../../scripts'
import { useState } from 'react'
import { InstantGramSearchTileProps } from '../types'
import { InstantGramSearchList } from './instant-gram-search-list.component'

export const InstantGramSearchTile: React.FC<InstantGramSearchTileProps> = ({
    ...props
}: InstantGramSearchTileProps) => {
    const { isMobile } = useScreenWidth()
    const { showElement, setShowElement } = useShowElement()

    const emptyEventData = [
        {
            id: '',
            names: [''],
            startDate: '',
            images: [
                {
                    url: '',
                    alt: '',
                },
            ],
        },
    ]
    const [parsedEventData, setParsedEventData] = useState(emptyEventData)

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
            />
            <Spacing mY={30} /> */}
            <Grid alignColumns="auto" justifyItems="center">
                <Grid columnItem={[1, 3]}>
                    <Button
                        typeType={isMobile ? 't1' : 't2'}
                        type="regularClear"
                        func={() => {
                            setShowElement(!showElement)
                            setParsedEventData(eventData[2023])
                        }}
                        funcResp={
                            showElement && parsedEventData === eventData[2023]
                        }
                        content="2024"
                        subContent="Season 5"
                        subContentTop={isMobile}
                        color="darkerGrey"
                    />
                </Grid>
                <Grid columnItem={[2, 3]}>
                    <Button
                        typeType={isMobile ? 't1' : 't2'}
                        type="regularClear"
                        func={() => {
                            setShowElement(!showElement)
                            setParsedEventData(eventData[2023])
                        }}
                        funcResp={
                            showElement && parsedEventData === eventData[2023]
                        }
                        content="2023"
                        subContent="Season 4"
                        subContentTop={isMobile}
                        color="darkerGrey"
                    />
                </Grid>
                <Grid columnItem={[3, 3]}>
                    <Button
                        typeType={isMobile ? 't1' : 't2'}
                        type="regularClear"
                        func={() => {
                            setShowElement(!showElement)
                            setParsedEventData(eventData[2022])
                        }}
                        funcResp={
                            showElement && parsedEventData === eventData[2022]
                        }
                        content="2022"
                        subContent="Season 3"
                        subContentTop={isMobile}
                        color="darkerGrey"
                    />
                </Grid>
            </Grid>
            <Spacing mY={30} />
            <Grid alignColumns="auto" justifyItems="center">
                <Grid columnItem={[1, 2]}>
                    <Button
                        typeType={isMobile ? 't1' : 't2'}
                        type="regularClear"
                        func={() => {
                            setShowElement(!showElement)
                            setParsedEventData(eventData[2021])
                        }}
                        funcResp={
                            showElement && parsedEventData === eventData[2021]
                        }
                        content="2021"
                        subContent="Season 2"
                        subContentTop={isMobile}
                        color="darkerGrey"
                    />
                </Grid>
                <Grid columnItem={[2, 2]}>
                    <Button
                        typeType={isMobile ? 't1' : 't2'}
                        type="regularClear"
                        func={() => {
                            setShowElement(!showElement)
                            setParsedEventData(eventData[2020])
                        }}
                        funcResp={
                            showElement && parsedEventData === eventData[2020]
                        }
                        content="2020"
                        subContent="Season 1"
                        subContentTop={isMobile}
                        color="darkerGrey"
                    />
                </Grid>
            </Grid>
            {showElement && (
                <InstantGramSearchList
                    func={props.funcSelect}
                    items={parsedEventData}
                />
            )}
        </Tile>
    )
}
