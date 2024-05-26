import { Button, Grid, Spacing, Tile } from '../../../../bash-blocks'
import {
    compileEvents,
    useScreenWidth,
    useShowElement,
} from '../../../../../scripts'
import { FC, useState } from 'react'
import { SearchList } from './search-list.component'
import { BigSearch } from '../../../../bash-blocks'

type SearchTileProps = {
    url?: string
    funcCategory: (value: string) => void
    funcInput: (e: any) => void
    funcButton: () => void
    funcSelect: (e: any) => void
    is2024: boolean
    is2023: boolean
    is2022: boolean
    is2021: boolean
    is2020: boolean
}

export const SearchTile: FC<SearchTileProps> = ({
    url,
    funcCategory,
    funcInput,
    funcButton,
    funcSelect,
    is2024,
    is2023,
    is2022,
    is2021,
    is2020,
}) => {
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
            <Spacing mB={30}>
                <BigSearch
                    funcInput={funcInput}
                    funcButton={funcButton}
                    placeholder="Lookup Events"
                />
            </Spacing>
            <Spacing mB={showElement ? 30 : 0}>
                <Grid
                    alignColumns="auto auto auto"
                    alignRows="auto auto"
                    justifyItems="center"
                    rowGap={15}
                >
                    <Grid columnItem={[1, 3]} rowItem={[1, 2]}>
                        <Button
                            variant="clear"
                            typeVariant={isMobile ? 't1' : 't2'}
                            typeColor={
                                Boolean(showElement && is2024)
                                    ? 'lightBlue'
                                    : undefined
                            }
                            content="2024"
                            subContent="Season 5"
                            subContentTop={isMobile}
                            value="2024"
                            func={() => {
                                funcCategory('2024')
                                setShowElement(!showElement)
                                setParsedEventData(events[2024])
                            }}
                        />
                    </Grid>
                    <Grid columnItem={[2, 3]} rowItem={[1, 2]}>
                        <Button
                            variant="clear"
                            typeVariant={isMobile ? 't1' : 't2'}
                            typeColor={
                                Boolean(showElement && is2023)
                                    ? 'lightBlue'
                                    : undefined
                            }
                            content="2023"
                            subContent="Season 4"
                            subContentTop={isMobile}
                            value="2023"
                            func={() => {
                                funcCategory('2023')
                                setShowElement(!showElement)
                                setParsedEventData(events[2023])
                            }}
                        />
                    </Grid>
                    <Grid columnItem={[3, 3]} rowItem={[1, 2]}>
                        <Button
                            variant="clear"
                            typeVariant={isMobile ? 't1' : 't2'}
                            typeColor={
                                Boolean(showElement && is2022)
                                    ? 'lightBlue'
                                    : undefined
                            }
                            content="2022"
                            subContent="Season 3"
                            subContentTop={isMobile}
                            value="2022"
                            func={() => {
                                funcCategory('2022')
                                setShowElement(!showElement)
                                setParsedEventData(events[2022])
                            }}
                        />
                    </Grid>
                    <Grid columnItem={[1, 3]} rowItem={[2, 2]}>
                        <Button
                            variant="clear"
                            typeVariant={isMobile ? 't1' : 't2'}
                            typeColor={
                                Boolean(showElement && is2021)
                                    ? 'lightBlue'
                                    : undefined
                            }
                            content="2021"
                            subContent="Season 2"
                            subContentTop={isMobile}
                            value="2021"
                            func={() => {
                                funcCategory('2021')
                                setShowElement(!showElement)
                                setParsedEventData(events[2021])
                            }}
                        />
                    </Grid>
                    <Grid columnItem={[2, 3]} rowItem={[2, 2]}>
                        <Button
                            variant="clear"
                            typeVariant={isMobile ? 't1' : 't2'}
                            typeColor={
                                Boolean(showElement && is2020)
                                    ? 'lightBlue'
                                    : undefined
                            }
                            content="2020"
                            subContent="Season 1"
                            subContentTop={isMobile}
                            value="2020"
                            func={() => {
                                funcCategory('2020')
                                setShowElement(!showElement)
                                setParsedEventData(events[2020])
                            }}
                        />
                    </Grid>
                </Grid>
            </Spacing>
            {showElement ? (
                <SearchList
                    url={url}
                    funcSelect={funcSelect}
                    items={parsedEventData}
                />
            ) : null}
        </Tile>
    )
}
