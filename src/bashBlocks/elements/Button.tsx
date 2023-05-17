import { ReactElement } from 'react';
import './styles/Button.css'

const Button = ({ refKey, className, func, value, content }: any | ReactElement) => {
    return (
        <button
            key={refKey}
            className={className}
            onClick={func}
            value={value}
        >
            {content}
        </button>
    )
}

export default Button;