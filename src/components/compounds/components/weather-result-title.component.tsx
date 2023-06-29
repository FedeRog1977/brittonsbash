import { useScreenWidth } from '../../../scripts'
import { Spacing, Tile, Typography } from '../../bash-blocks'

export const WeatherResultTitle = ({ title, subTitle, result }: any) => {
    const { isMobile } = useScreenWidth()

    return (
        <Tile type="solid" dense={isMobile && true}>
            <>
                <Spacing mB={isMobile ? 7.5 : 15}>
                    <>
                        <Typography
                            type="h1"
                            content={title}
                            textAlign="center"
                        />
                        <Typography
                            type="h2"
                            content={subTitle}
                            textAlign="center"
                        />
                    </>
                </Spacing>
                {result && result}
            </>
        </Tile>
    )
}
