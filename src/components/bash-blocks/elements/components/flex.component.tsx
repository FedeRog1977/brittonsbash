import React, { FC } from 'react'
import { FlexProps } from '..'
import '../styles/flex.styles.css'

export const Flex: FC<FlexProps> = ({ children, item }: any) => {
    if (item) {
        return <div className="flex-col">{children}</div>
    }

    return (
        <div className="flex-row">
            {/* {children.map((child: React.ReactElement) => (
                <div className="flex-col">{child}</div>
            ))} */}
            {children}
        </div>
    )
}
