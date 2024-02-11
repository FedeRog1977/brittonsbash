import { SpacingProps } from './spacing.types'
// import styles from './spacing.module.scss'

export const Spacing: React.FC<SpacingProps> = ({ ...props }: SpacingProps) => (
    <div
        style={{
            textAlign: props.textAlign,
            backgroundColor: props.backgroundColor,
            width: `${props.width}px`,
            border: props.border,
            borderTop: props.ruleTop ? '1.5px solid black' : undefined,
            borderBottom: props.ruleBottom ? '1.5px solid black' : undefined,
            borderRadius: props.borderRadius,
            position: props.position ? props.position : undefined,
            marginTop: props.mY
                ? `${props.mY / 2}px`
                : props.mT
                ? `${props.mT}px`
                : 0,
            marginBottom: props.mY
                ? `${props.mY / 2}px`
                : props.mB
                ? `${props.mB}px`
                : 0,
            marginLeft: props.mX
                ? `${props.mX / 2}px`
                : props.mL
                ? `${props.mL}px`
                : 0,
            marginRight: props.mX
                ? `${props.mX / 2}px`
                : props.mR
                ? `${props.mR}px`
                : 0,
            paddingTop: props.pY
                ? `${props.pY / 2}px`
                : props.pT
                ? `${props.pT}px`
                : 0,
            paddingBottom: props.pY
                ? `${props.pY / 2}px`
                : props.pB
                ? `${props.pB}px`
                : 0,
            paddingLeft: props.pX
                ? `${props.pX / 2}px`
                : props.pL
                ? `${props.pL}px`
                : 0,
            paddingRight: props.pX
                ? `${props.pX / 2}px`
                : props.pR
                ? `${props.pR}px`
                : 0,
        }}
    >
        {props.children && props.children}
    </div>
)
