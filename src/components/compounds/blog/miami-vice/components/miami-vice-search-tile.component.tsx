import {
    Button,
    Grid,
    Spacing,
    Tile,
    VideoTileProps,
} from '../../../../bash-blocks'
import { useScreenWidth, useShowElement } from '../../../../../scripts'
import { FC, useState } from 'react'
import { MiamiViceSearchList } from './miami-vice-search-list.component'
import { miamiViceContent } from '../content'

export type MiamiViceSearchTileProps = {
    funcSelect: (e: any) => void
}

export const MiamiViceSearchTile: FC<MiamiViceSearchTileProps> = ({
    funcSelect,
}) => {
    const { isMobile } = useScreenWidth()
    const { showElement, setShowElement } = useShowElement()

    const emptyVideoData: VideoTileProps[] = [
        {
            heading: '',
            subHeading: '',
            video: '',
        },
    ]
    const [parsedVideoData, setParsedEventData] = useState(emptyVideoData)

    return (
        <Tile type="solid">
            <Spacing mB={showElement ? 30 : 0}>
                <Grid alignColumns="1fr 1fr 1fr 1fr 1fr" justifyItems="center">
                    <Grid columnItem={[1, 5]}>
                        <Button
                            typeType={isMobile ? 't1' : 't2'}
                            func={() => {
                                setShowElement(!showElement)
                                setParsedEventData(
                                    miamiViceContent.tileOne.season1
                                )
                            }}
                            funcResp={
                                showElement &&
                                parsedVideoData ===
                                    miamiViceContent.tileOne.season1
                            }
                            content="1"
                            subContent="Season"
                            subContentTop={isMobile}
                        />
                    </Grid>
                    <Grid columnItem={[2, 5]}>
                        <Button
                            typeType={isMobile ? 't1' : 't2'}
                            func={() => {
                                setShowElement(!showElement)
                                setParsedEventData(
                                    miamiViceContent.tileOne.season2
                                )
                            }}
                            funcResp={
                                showElement &&
                                parsedVideoData ===
                                    miamiViceContent.tileOne.season2
                            }
                            content="2"
                            subContent="Season"
                            subContentTop={isMobile}
                        />
                    </Grid>
                    <Grid columnItem={[3, 5]}>
                        <Button
                            typeType={isMobile ? 't1' : 't2'}
                            func={() => {
                                setShowElement(!showElement)
                                setParsedEventData(
                                    miamiViceContent.tileOne.season3
                                )
                            }}
                            funcResp={
                                showElement &&
                                parsedVideoData ===
                                    miamiViceContent.tileOne.season3
                            }
                            content="3"
                            subContent="Season"
                            subContentTop={isMobile}
                        />
                    </Grid>
                    <Grid columnItem={[4, 5]}>
                        <Button
                            typeType={isMobile ? 't1' : 't2'}
                            func={() => {
                                setShowElement(!showElement)
                                setParsedEventData(
                                    miamiViceContent.tileOne.season4
                                )
                            }}
                            funcResp={
                                showElement &&
                                parsedVideoData ===
                                    miamiViceContent.tileOne.season4
                            }
                            content="4"
                            subContent="Season"
                            subContentTop={isMobile}
                        />
                    </Grid>
                    <Grid columnItem={[5, 5]}>
                        <Button
                            typeType={isMobile ? 't1' : 't2'}
                            func={() => {
                                setShowElement(!showElement)
                                setParsedEventData(
                                    miamiViceContent.tileOne.season5
                                )
                            }}
                            funcResp={
                                showElement &&
                                parsedVideoData ===
                                    miamiViceContent.tileOne.season5
                            }
                            content="5"
                            subContent="Season"
                            subContentTop={isMobile}
                        />
                    </Grid>
                </Grid>
            </Spacing>
            {showElement && (
                <MiamiViceSearchList
                    funcSelect={funcSelect}
                    items={parsedVideoData}
                />
            )}
        </Tile>
    )
}
