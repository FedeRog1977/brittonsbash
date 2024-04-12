import { Button, Grid, Spacing, Tile } from '../../../../bash-blocks'
import {
    compileEvents,
    useScreenWidth,
    useShowElement,
} from '../../../../../scripts'
import { useState } from 'react'
import { InstantGramSearchTileProps } from '../types'
import { InstantGramSearchList } from './instant-gram-search-list.component'
import { BigSearch } from '../../../../bash-blocks'

export const InstantGramSearchTile: React.FC<InstantGramSearchTileProps> = ({
    url,
    funcInput,
    funcButton,
    funcSelect,
}: InstantGramSearchTileProps) => {
    const { isMobile } = useScreenWidth()
    const { showElement, setShowElement } = useShowElement()

    const { events } = compileEvents()

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
        <Tile type="solid">
            <BigSearch
                funcInput={funcInput}
                funcButton={funcButton}
                placeholder="Search Events"
            />
            <Spacing mY={30} />
            <Grid
                alignColumns="auto auto auto"
                alignRows="auto auto"
                justifyItems="center"
                rowGap={15}
            >
                <Grid columnItem={[1, 3]} rowItem={[1, 2]}>
                    <Button
                        typeType={isMobile ? 't1' : 't2'}
                        func={() => {
                            setShowElement(!showElement)
                            setParsedEventData(events[2024])
                        }}
                        funcResp={
                            showElement && parsedEventData === events[2024]
                        }
                        content="2024"
                        subContent="Season 5"
                        subContentTop={isMobile}
                        color="darkerGrey"
                    />
                </Grid>
                <Grid columnItem={[2, 3]} rowItem={[1, 2]}>
                    <Button
                        typeType={isMobile ? 't1' : 't2'}
                        func={() => {
                            setShowElement(!showElement)
                            setParsedEventData(events[2023])
                        }}
                        funcResp={
                            showElement && parsedEventData === events[2023]
                        }
                        content="2023"
                        subContent="Season 4"
                        subContentTop={isMobile}
                        color="darkerGrey"
                    />
                </Grid>
                <Grid columnItem={[3, 3]} rowItem={[1, 2]}>
                    <Button
                        typeType={isMobile ? 't1' : 't2'}
                        func={() => {
                            setShowElement(!showElement)
                            setParsedEventData(events[2022])
                        }}
                        funcResp={
                            showElement && parsedEventData === events[2022]
                        }
                        content="2022"
                        subContent="Season 3"
                        subContentTop={isMobile}
                        color="darkerGrey"
                    />
                </Grid>
                <Grid columnItem={[1, 3]} rowItem={[2, 2]}>
                    <Button
                        typeType={isMobile ? 't1' : 't2'}
                        func={() => {
                            setShowElement(!showElement)
                            setParsedEventData(events[2021])
                        }}
                        funcResp={
                            showElement && parsedEventData === events[2021]
                        }
                        content="2021"
                        subContent="Season 2"
                        subContentTop={isMobile}
                        color="darkerGrey"
                    />
                </Grid>
                <Grid columnItem={[2, 3]} rowItem={[2, 2]}>
                    <Button
                        typeType={isMobile ? 't1' : 't2'}
                        func={() => {
                            setShowElement(!showElement)
                            setParsedEventData(events[2020])
                        }}
                        funcResp={
                            showElement && parsedEventData === events[2020]
                        }
                        content="2020"
                        subContent="Season 1"
                        subContentTop={isMobile}
                        color="darkerGrey"
                    />
                </Grid>
            </Grid>
            {showElement && (
                <>
                    <Spacing mY={30} />
                    <InstantGramSearchList
                        url={url}
                        func={funcSelect}
                        items={parsedEventData}
                    />
                </>
            )}
        </Tile>
    )
}
