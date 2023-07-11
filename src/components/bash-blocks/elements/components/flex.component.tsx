import { FC } from 'react'
import { FlexProps } from '..'
import '../styles/flex.styles.css'

export const Flex: FC<FlexProps> = ({ children, item, center }: any) => {
    if (item) {
        return (
            <div
                className="flex-col"
                style={{
                    textAlign: center && 'center',
                }}
            >
                {children}
            </div>
        )
    }

    return <div className="flex-row">{children}</div>
}
