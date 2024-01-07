import { useScreenWidth } from '../../../../scripts'
import { Grid, Spacing, Tile, Typography } from '../../basics'
import { TitleTileItemsProps, TitleTileProps } from './title-tile.types'

export const TitleTile: React.FC<TitleTileProps> = ({
    heading,
    titleItems,
    bodyItems,
}: TitleTileProps) => {
    const { isMobile } = useScreenWidth()

    return (
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
                <Grid alignColumns="auto auto" columnGap={10} rowGap={10}>
                    {titleItems?.map(
                        (
                            { content, subContent }: TitleTileItemsProps,
                            index
                        ) => (
                            <>
                                <Grid
                                    columnItem={[1, 2]}
                                    rowItem={[index + 1, titleItems.length + 1]}
                                    textAlign="right"
                                >
                                    <Typography
                                        type={isMobile ? 'h4' : 'h3'}
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
                                        type={isMobile ? 'h4' : 'h3'}
                                        content={subContent.content}
                                        link={
                                            subContent.link?.url
                                                ? {
                                                      url: subContent.link?.url,
                                                      newTab: subContent.link
                                                          ?.newTab,
                                                  }
                                                : undefined
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
                        (
                            { content, subContent }: TitleTileItemsProps,
                            index
                        ) => (
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
                                        content={subContent.content}
                                        link={
                                            subContent.link?.url
                                                ? {
                                                      url: subContent.link?.url,
                                                      newTab: subContent.link
                                                          ?.newTab,
                                                  }
                                                : undefined
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
}
