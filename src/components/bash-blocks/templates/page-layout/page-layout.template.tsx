import { FC } from 'react'
import { Background, BackgroundProps } from '../../basics'

export type PageLayoutProps = {
    background: BackgroundProps
    children: React.ReactNode
}

export const PageLayout: FC<PageLayoutProps> = ({
    background,
    children,
}: PageLayoutProps) => (
    <>
        <Background {...background} />
        {children}
    </>
)
