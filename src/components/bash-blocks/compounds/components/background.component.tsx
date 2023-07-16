import { FC } from 'react'
import { BackgroundProps } from '..'
import '../styles/background.styles.css'

export const Background: FC<BackgroundProps> = ({
    ...props
}: BackgroundProps) => (
    <div className="background">
        <span className={props.className}>{props.content}</span>
    </div>
)
