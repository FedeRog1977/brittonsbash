import { FC, ReactElement } from 'react'
import { useScreenWidth } from '../../../../../scripts'
import { Spacing, Tile, Typography } from '../../../../bash-blocks'

type ResultTileProps = {
    title: string
    subTitle: ReactElement
    result: ReactElement
}

export const ResultTitle: FC<ResultTileProps> = ({
    title,
    subTitle,
    result,
}) => {
    const { isMobile } = useScreenWidth()

    return (
        <Tile type="solid">
            <Spacing mB={isMobile ? 7.5 : 15}>
                <Typography type="h1" textAlign="center">
                    {title}
                </Typography>
                <Typography type="h2" color="mediumGrey" textAlign="center">
                    {subTitle}
                </Typography>
            </Spacing>
            {result && result}
        </Tile>
    )
}
