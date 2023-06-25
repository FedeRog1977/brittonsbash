import { FC } from 'react'
import { SpacingProps } from '../types'

export const Spacing: FC<SpacingProps> = ({
    mX,
    mY,
    mT,
    mB,
    mL,
    mR,
    children,
    ruleTop,
    ruleBottom,
}: any) => (
    <div
        style={{
            borderTop: ruleTop ? '1.5px solid var(--darker-grey)' : undefined,
            borderBottom: ruleBottom
                ? '1.5px solid var(--darker-grey)'
                : undefined,
            marginTop: mX ? `${mX / 2}px` : mT ? `${mT}px` : 0,
            marginBottom: mX ? `${mX / 2}px` : mB ? `${mB}px` : 0,
            marginLeft: mY ? `${mY / 2}px` : mL ? `${mL}px` : 0,
            marginRight: mY ? `${mY / 2}px` : mR ? `${mR}px` : 0,
            padding: 0,
        }}
    >
        {children && children}
    </div>
)
