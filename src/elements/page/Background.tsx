import './styles/Background.css';

const Background = ({ content, className }: any) => {
    return (
        <div className={"background"}>
            <span
                className={className}
            >
                {content}
            </span>
        </div>
    )
}

export default Background;