import { BackgroundProps } from '..'
import '../styles/background.styles.css'

export const Background: React.FC<BackgroundProps> = ({
    ...props
}: BackgroundProps) => (
    <div className="background">
        <span className={props.className}>{props.content}</span>
    </div>
)
