const Button = ({ text, id, func }: any) => {
    if (typeof id !== "undefined") {
        return (
            <button
                id={id}
                onClick={func}
            >
                {text}
            </button>
        )
    }
    return (
        <button
            onClick={func}
        >
            {text}
        </button>
    )
}

export default Button;