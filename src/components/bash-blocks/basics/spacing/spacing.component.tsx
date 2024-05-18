import { FC } from 'react'
import { Align, Margin, Padding } from '../../reference'
// import styles from './spacing.module.scss'

export type SpacingProps = {
    children?: React.ReactNode
    textAlign?: Align
    mX?: number
    mY?: number
    pX?: number
    pY?: number
} & Margin &
    Padding

export const Spacing: FC<SpacingProps> = ({
    children,
    textAlign,
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
            textAlign: textAlign,
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
        {children}
    </div>
)
