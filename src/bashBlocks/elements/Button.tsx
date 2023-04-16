import './styles/Button.css'

const Button = ({ className, func, content }: any) => {
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