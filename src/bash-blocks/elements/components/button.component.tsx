import { FC } from 'react'
import '../styles/button.styles.css'
import { ButtonProps } from '../types'

export const Button: FC<ButtonProps> = ({
    type,
    func,
    value,
    content,
}: any) => (
    <button className={type} onClick={func} value={value}>
        {content}
    </button>
)
