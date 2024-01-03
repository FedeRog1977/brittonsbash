import { Grid, Spacing, Tile, Typography } from '../../basics'
import { TitleTileItemsProps, TitleTileProps } from './title-tile.types'

export const TitleTile: React.FC<TitleTileProps> = ({
    heading,
    titleItems,
    bodyItems,
}: TitleTileProps) => (
    <Tile type="clear" dense>
        {heading && (
            <>
                <Typography
                    type="h3"
                    textAlign="center"
                    content={heading}
                    light
                />
                <Spacing mY={20} />
            </>
        )}
        {titleItems && (
            <Grid alignColumns="auto auto" rowGap={10}>
                {titleItems?.map(
                    ({ content, subContent }: TitleTileItemsProps, index) => (
                        <>
                            <Grid
                                columnItem={[1, 2]}
                                rowItem={[index + 1, titleItems.length + 1]}
                                textAlign="right"
                            >
                                <Typography
                                    type="h3"
                                    content={content}
                                    inline
                                />
                            </Grid>
                            <Grid
                                columnItem={[2, 2]}
                                rowItem={[index + 1, titleItems.length + 1]}
                                textAlign="left"
                            >
                                <Typography
                                    type="h3"
                                    content={
                                        <>&nbsp;&#124;&nbsp;{subContent}</>
                                    }
                                    light
                                    inline
                                />
                            </Grid>
                        </>
                    )
                )}
            </Grid>
        )}
        {Boolean(titleItems && bodyItems) && <Spacing mY={10} />}
        {bodyItems && (
            <Grid alignColumns="auto auto" rowGap={10}>
                {bodyItems?.map(
                    ({ content, subContent }: TitleTileItemsProps, index) => (
                        <>
                            <Grid
                                columnItem={[1, 2]}
                                rowItem={[index + 1, bodyItems.length + 1]}
                                textAlign="right"
                            >
                                <Typography
                                    type="body"
                                    content={content}
                                    inline
                                />
                            </Grid>
                            <Grid
                                columnItem={[2, 2]}
                                rowItem={[index + 1, bodyItems.length + 1]}
                                textAlign="left"
                            >
                                <Typography
                                    type="body"
                                    content={
                                        <>&nbsp;&#124;&nbsp;{subContent}</>
                                    }
                                    light
                                    inline
                                />
                            </Grid>
                        </>
                    )
                )}
            </Grid>
        )}
    </Tile>
)
