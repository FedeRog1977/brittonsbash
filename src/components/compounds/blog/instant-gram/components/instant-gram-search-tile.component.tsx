import {
    Button,
    //  Button,
    Grid,
    //  Search,
    //  Spacing,
    Tile,
} from '../../../../bash-blocks'
import { InstantGramSearchList } from '.'
import { eventData } from '../../../../../data'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useScreenWidth, useShowElement } from '../../../../../scripts'
import { InstantGramSearchTileProps } from '..'
import { useState } from 'react'

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
            <Grid alignColumns="auto auto auto auto" justifyItems="center">
                <Grid columnItem={[1, 4]}>
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
                <Grid columnItem={[2, 4]}>
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
                <Grid columnItem={[3, 4]}>
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
                <Grid columnItem={[4, 4]}>
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
