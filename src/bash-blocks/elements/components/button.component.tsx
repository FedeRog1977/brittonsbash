import { FC, ReactElement } from 'react'
import '../styles/button.styles.css'

export type ButtonProps = {
    className: string
    func: () => void
    value?: string
    content: string | ReactElement
}

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
