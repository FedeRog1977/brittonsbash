import { FC } from 'react'
import '../styles/button.styles.css'
import { ButtonProps } from '../types'

export const Button: FC<ButtonProps> = ({
    type,
    func,
    value,
    content,
    textAlign,
    borders,
}: any) => (
    <button
        className={type}
        onClick={func}
        value={value}
        style={{
            textAlign: textAlign ? textAlign : 'center',
        }}
    >
        {borders ? (
            <div
                style={{
                    borderTopLeftRadius: 'var(--corners-small)',
                    borderTop: '2.5px solid var(--darker-grey)',
                    borderLeft: '2.5px solid var(--darker-grey)',
                }}
            >
                {content}
            </div>
        ) : (
            content
        )}
    </button>
)
