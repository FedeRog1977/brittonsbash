import { ReactElement } from 'react';
import './styles/Button.css'

const Button = ({ className, func, content }: any | ReactElement) => {
    return (
        <button
            className={className}
            onClick={func}
        >
            {content}
        </button>
    )
}

export default Button;