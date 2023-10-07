import { BackgroundProps } from '..'
import './background.styles.scss'

export const Background: React.FC<BackgroundProps> = ({
    ...props
}: BackgroundProps) => (
    <div className="background">
        <span className={props.className}>{props.content}</span>
    </div>
)
