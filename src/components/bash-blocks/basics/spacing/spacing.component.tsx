import { FC } from 'react'
import { Align, Margin, Padding } from '../../reference'
// import styles from './spacing.module.scss'

export type SpacingProps = {
    children?: React.ReactNode
    textAlign?: Align
    gapsX?: number
    gapsY?: number
    mX?: number
    mY?: number
    pX?: number
    pY?: number
} & Margin &
    Padding

export const Spacing: FC<SpacingProps> = ({
    children,
    textAlign,
    gapsX,
    gapsY,
    mX,
    mY,
    pX,
    pY,
    mT,
    mB,
    mL,
    mR,
    pT,
    pB,
    pL,
    pR,
}) => (
    <div
        style={{
            display: Boolean(gapsX || gapsY) ? 'grid' : undefined,
            textAlign: textAlign,
            columnGap: gapsX,
            rowGap: gapsY,
            marginTop: mY ? `${mY}px` : mT ? `${mT}px` : 0,
            marginBottom: mY ? `${mY}px` : mB ? `${mB}px` : 0,
            marginLeft: mX ? `${mX}px` : mL ? `${mL}px` : 0,
            marginRight: mX ? `${mX}px` : mR ? `${mR}px` : 0,
            paddingTop: pY ? `${pY}px` : pT ? `${pT}px` : 0,
            paddingBottom: pY ? `${pY}px` : pB ? `${pB}px` : 0,
            paddingLeft: pX ? `${pX}px` : pL ? `${pL}px` : 0,
            paddingRight: pX ? `${pX}px` : pR ? `${pR}px` : 0,
        }}
    >
        {children}
    </div>
)
