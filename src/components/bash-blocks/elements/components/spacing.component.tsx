import { FC } from 'react'
import { SpacingProps } from '../types'

export const Spacing: FC<SpacingProps> = ({
    mX,
    mY,
    mT,
    mB,
    mL,
    mR,
    pX,
    pY,
    pT,
    pB,
    pL,
    pR,
    children,
    ruleTop,
    ruleBottom,
    backgroundColor,
    border,
    borderRadius,
}: any) => (
    <div
        style={{
            backgroundColor: backgroundColor,
            border: border,
            borderTop: ruleTop ? '1.5px solid var(--darker-grey)' : undefined,
            borderBottom: ruleBottom
                ? '1.5px solid var(--darker-grey)'
                : undefined,
            borderRadius: borderRadius,
            marginTop: mX ? `${mX / 2}px` : mT ? `${mT}px` : 0,
            marginBottom: mX ? `${mX / 2}px` : mB ? `${mB}px` : 0,
            marginLeft: mY ? `${mY / 2}px` : mL ? `${mL}px` : 0,
            marginRight: mY ? `${mY / 2}px` : mR ? `${mR}px` : 0,
            paddingTop: mX ? `${pX / 2}px` : pT ? `${pT}px` : 0,
            paddingBottom: mX ? `${pX / 2}px` : pB ? `${pB}px` : 0,
            paddingLeft: mY ? `${pY / 2}px` : pL ? `${pL}px` : 0,
            paddingRight: mY ? `${pY / 2}px` : pR ? `${pR}px` : 0,
        }}
    >
        {children && children}
    </div>
)
