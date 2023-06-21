import { FC } from 'react'
import '../styles/button.styles.css'
import { ButtonProps } from '../types'

export const Button: FC<ButtonProps> = ({
    className,
    func,
    value,
    content,
}: any) => (
    <button className={className} onClick={func} value={value}>
        {content}
    </button>
)
