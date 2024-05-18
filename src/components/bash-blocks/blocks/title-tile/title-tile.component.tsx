import { FC } from 'react'
import { useScreenWidth } from '../../../../scripts'
import { Grid, Spacing, Tile, Typography } from '../../basics'
import { Items } from './types/items.type'

export type TitleTileProps = {
    heading?: string
    titleItems?: Items[]
    bodyItems?: Items[]
}

export const TitleTile: FC<TitleTileProps> = ({
    heading,
    titleItems,
    bodyItems,
}) => {
    const { isMobile } = useScreenWidth()

    return (
        <Tile type="clear" dense>
            {heading && (
                <Spacing mY={20}>
                    <Typography type="h3" textAlign="center" light>
                        {heading}
                    </Typography>
                </Spacing>
            )}
            {titleItems && (
                <Grid alignColumns="auto auto" columnGap={10} rowGap={10}>
                    {titleItems?.map(({ content, subContent }, index) => (
                        <>
                            <Grid
                                columnItem={[1, 2]}
                                rowItem={[index + 1, titleItems.length + 1]}
                                textAlign="right"
                            >
                                <Typography
                                    type={isMobile ? 'h4' : 'h3'}
                                    inline
                                >
                                    {content}
                                </Typography>
                            </Grid>
                            <Grid
                                columnItem={[2, 2]}
                                rowItem={[index + 1, titleItems.length + 1]}
                                textAlign="left"
                            >
                                <Typography
                                    type={isMobile ? 'h4' : 'h3'}
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
                                >
                                    {subContent.content}
                                </Typography>
                            </Grid>
                        </>
                    ))}
                </Grid>
            )}
            {Boolean(titleItems && bodyItems) && <Spacing mY={10} />}
            {bodyItems && (
                <Grid alignColumns="auto auto" rowGap={10}>
                    {bodyItems?.map(({ content, subContent }, index) => (
                        <>
                            <Grid
                                columnItem={[1, 2]}
                                rowItem={[index + 1, bodyItems.length + 1]}
                                textAlign="right"
                            >
                                <Typography type="body" inline>
                                    {content}
                                </Typography>
                            </Grid>
                            <Grid
                                columnItem={[2, 2]}
                                rowItem={[index + 1, bodyItems.length + 1]}
                                textAlign="left"
                            >
                                <Typography
                                    type="body"
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
                                >
                                    {subContent.content}
                                </Typography>
                            </Grid>
                        </>
                    ))}
                </Grid>
            )}
        </Tile>
    )
}
