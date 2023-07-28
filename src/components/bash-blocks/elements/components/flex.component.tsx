import { FlexProps } from '..'
import '../styles/flex.styles.scss'

export const Flex: React.FC<FlexProps> = ({ ...props }: FlexProps) => {
    if (props.item) {
        return (
            <div
                className="flex-col"
                style={{
                    textAlign: props.center ? 'center' : 'left',
                }}
            >
                {props.children}
            </div>
        )
    }

    return <div className="flex-row">{props.children}</div>
}
