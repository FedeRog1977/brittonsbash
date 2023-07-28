import { FC } from 'react'
import { BackgroundProps } from '..'
import '../styles/background.styles.css'

// const standard = {
//     backgroundImage: "url('../../../../media/images/pages/background.jpg')",
//     textAlign: 'left',
//     backgroundAttachment: 'fixed',
//     backgroundPosition: 'top',
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     margin: '0',
//     padding: '175px 150px 25px 150px',
// }

export const Background: FC<BackgroundProps> = ({
    ...props
}: BackgroundProps) => (
    <div
        className="background"
        // style={standard}
    >
        <span className={props.className}>{props.content}</span>
    </div>
)
