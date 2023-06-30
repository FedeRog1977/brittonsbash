import { FC } from 'react'
import { SpacingProps } from '..'

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
    textAlign,
    ruleTop,
    ruleBottom,
    backgroundColor,
    border,
    borderRadius,
    position,
}: any) => (
    <div
        style={{
            textAlign: textAlign,
            backgroundColor: backgroundColor,
            border: border,
            borderTop: ruleTop ? '1.5px solid var(--darker-grey)' : undefined,
            borderBottom: ruleBottom
                ? '1.5px solid var(--darker-grey)'
                : undefined,
            borderRadius: borderRadius,
            position: position,
            marginTop: mY ? `${mY / 2}px` : mT ? `${mT}px` : 0,
            marginBottom: mY ? `${mY / 2}px` : mB ? `${mB}px` : 0,
            marginLeft: mX ? `${mX / 2}px` : mL ? `${mL}px` : 0,
            marginRight: mX ? `${mX / 2}px` : mR ? `${mR}px` : 0,
            paddingTop: pY ? `${pY / 2}px` : pT ? `${pT}px` : 0,
            paddingBottom: pY ? `${pY / 2}px` : pB ? `${pB}px` : 0,
            paddingLeft: pX ? `${pX / 2}px` : pL ? `${pL}px` : 0,
            paddingRight: pX ? `${pX / 2}px` : pR ? `${pR}px` : 0,
        }}
    >
        {children && children}
    </div>
)
