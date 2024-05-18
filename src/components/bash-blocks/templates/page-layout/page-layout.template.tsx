import { FC } from 'react'
import { Background, BackgroundProps } from '../../basics'
import { Footer } from '../../partials'

export type PageLayoutProps = {
    background: BackgroundProps
    children: React.ReactNode
}

export const PageLayout: FC<PageLayoutProps> = ({ background, children }) => (
    <>
        <Background {...background} />
        {children}
        <Footer />
    </>
)
