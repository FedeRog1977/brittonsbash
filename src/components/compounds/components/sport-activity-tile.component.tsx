import { FC } from 'react'
import { useScreenWidth } from '../../../scripts'
import { Spacing, Typography } from '../../bash-blocks'

export type SportActivityTileProps = {
    title: {
        leftItem: string | React.ReactElement
        rightItem: string | React.ReactElement
    }
    entries: {
        leftItem: string | React.ReactElement
        rightItem: string | React.ReactElement
    }[]
}

export const SportActivityTile: FC<SportActivityTileProps> = ({
    title,
    entries,
}: any) => {
    const { isMobile } = useScreenWidth()

    return (
        <Spacing
            mL={isMobile ? 0 : 70}
            mR={isMobile ? 0 : 70}
            mT={isMobile ? 7.5 : 15}
            mB={isMobile ? 7.5 : 15}
            pL={isMobile ? 7.5 : 150}
            pR={isMobile ? 7.5 : 150}
            pT={isMobile ? 7.5 : 15}
            pB={isMobile ? 3.75 : 7.5}
            backgroundColor="var(--lighter-grey)"
            borderRadius={isMobile ? 'none' : 'var(--corners-small)'}
        >
            <>
                <>
                    <Spacing position="absolute">
                        <Typography
                            type="body"
                            content={title.leftItem}
                            boldFace={isMobile ? false : true}
                            inline
                        />
                    </Spacing>
                    <Spacing textAlign="right" position="relative">
                        <Typography
                            type="body"
                            content={title.rightItem}
                            boldFace={isMobile ? false : true}
                            inline
                        />
                    </Spacing>
                </>
                {entries.map(({ leftItem, rightItem, index }: any) => (
                    <div key={index}>
                        <Spacing mT={isMobile ? 3.75 : 7.5} />
                        <Spacing position="absolute">
                            <Typography
                                type="body"
                                content={leftItem}
                                boldFace={isMobile ? false : true}
                                inline
                            />
                        </Spacing>
                        <Spacing mL={100} textAlign="right" position="relative">
                            <Typography
                                type={isMobile ? 'body-light' : 'body'}
                                content={rightItem}
                                inline
                            />
                        </Spacing>
                    </div>
                ))}
            </>
        </Spacing>
    )
}
