import { BackgroundProps } from '..'
import '../styles/background.styles.css'
import backgroundImage from './../../../../media/images/pages/background.jpg'

// const background = {
//     backgroundImage: backgroundImage,
//     // textAlign: 'left',
//     backgroundAttachment: 'fixed',
//     backgroundPosition: 'top',
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     margin: '0',
//     padding: '175px 150px 25px 150px',
// }

export const Background: React.FC<BackgroundProps> = ({
    ...props
}: BackgroundProps) => (
    <div
        className="background"
        // style={background}
    >
        <span className={props.className}>{props.content}</span>
    </div>
)
